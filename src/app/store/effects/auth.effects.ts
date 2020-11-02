import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {AuthService} from "../../core/services/auth/auth.service";
import {
  AuthActions,
  EAuthActions,
  GetAccessLevelMap,
  GetAccessLevelMapFailure,
  GetAccessLevelMapSuccess,
  Login,
  LoginFailure,
  LoginSuccess,
  Logout,
  LogoutFailure,
  LogoutSuccess
} from "../actions/auth.actions";
import {from, Observable, of} from "rxjs";
import {catchError, delay, map, retryWhen, switchMap, take} from "rxjs/operators";
import {AccessLevel} from "../../api/dto/AccessLevel.g";
import {Router} from "@angular/router";
import {defaultPath, loginPath} from "../../core/path";
import {CookieService} from "../../core/services/cookie.service";

@Injectable()
export class AuthEffects {

  @Effect()
  Login: Observable<AuthActions> = this.actions$.pipe(
    ofType<Login>(EAuthActions.LOGIN),
    map((action: Login) => action.payload),
    switchMap(payload => {
        return from(this.authService.singIn({login: payload.login, password: payload.password})).pipe(
          switchMap(() => {
            this.router.navigate([defaultPath]);

            return [new LoginSuccess(), new GetAccessLevelMap()];
          }),
          catchError(error => of(new LoginFailure(error)))
        );
      }
    ),
  );

  @Effect()
  Logout: Observable<AuthActions> = this.actions$.pipe(
    ofType<Logout>(EAuthActions.LOGOUT),
    switchMap(() => {
        return from(this.authService.singOut()).pipe(
          map(() => {
            this.router.navigate([loginPath]);
            CookieService.deleteCookie("access_token");

            return new LogoutSuccess();
          }),
          catchError(error => of(new LogoutFailure(error)))
        );
      }
    ),
  );

  @Effect()
  GetAccessLevelMap: Observable<AuthActions> = this.actions$.pipe(
    ofType<GetAccessLevelMap>(EAuthActions.GET_ACCESS_LEVEL_MAP),
    switchMap(() =>
      from(this.authService.getAccessLevelMap()).pipe(
        retryWhen(errors => errors.pipe(delay(1000), take(10))),
        map((accessLevels: AccessLevel[]) => new GetAccessLevelMapSuccess(accessLevels)),
        catchError((error) => of(new GetAccessLevelMapFailure(error)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    // private store$: Store<IAppState>,
    private router: Router,
  ) {
  }
}
