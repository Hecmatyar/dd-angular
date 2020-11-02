import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Store} from "@ngrx/store";
import {IAppState} from "../../../store/state/app.state";
import {Observable, of} from "rxjs";
import {IAuthState} from "../../../store/state/auth.state";
import {selectAuthState} from "../../../store/selectors/auth.selector";
import {catchError, filter, switchMap, take, tap} from "rxjs/operators";
import {GetAccessLevelMap, LoginSuccess} from "../../../store/actions/auth.actions";
import {accessDeniedPath, loginPath} from "../../path";
import {CookieService} from "../cookie.service";
import {AccessLevel} from "../../../api/dto/AccessLevel.g";
import {RouterDataInterface} from "../../interfaces/auth/router-data.interface";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(protected router: Router, private store: Store<IAppState>) {
  }

  static isPermissionStatusSuccess(level: AccessLevel, credentials: AccessLevel[]): boolean {
    return level ? credentials.includes(level) : true;
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.checkStore(route.data as RouterDataInterface).pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    ).toPromise();
  }

  checkStore(routeData: RouterDataInterface): Observable<IAuthState> {
    return this.store.select(selectAuthState).pipe(
      tap(async (data: IAuthState) => {
        if (!data.isAuthorized) {
          if (CookieService.getCookie("access_token")) {
            this.store.dispatch(new LoginSuccess());
          } else {
            await this.router.navigate([loginPath]);
            throw "Access is denied";
          }
        } else if (!data.credentials) {
          this.store.dispatch(new GetAccessLevelMap());
        }
      }),
      tap(async (data: IAuthState) => {
        if (data.credentials && !AuthGuardService.isPermissionStatusSuccess(routeData.expectedRole, data.credentials)) {
          await this.router.navigate([accessDeniedPath]);
          throw "Access is denied";
        }
      }),
      filter((data: IAuthState) => data.isAuthorized && !!data.credentials),
      take(1)
    );
  }

  // static isPermissionStatusSuccess(level: AccessLevel, credentials: AccessLevel[]): boolean {
  //   let havePermission = false;
  //
  //   const paramsKey = Object.keys(params);
  //   paramsKey.forEach(key => path = path.replace(params[key], `:${key}`));
  //   const level = routeMap.get(path);
  //   if (level) {
  //     havePermission = credentials.includes(level);
  //   }
  //   console.log('path', params, path);
  //
  //   return havePermission;
  // }

}
