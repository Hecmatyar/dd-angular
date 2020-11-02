import {Injectable} from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {CookieService} from "../cookie.service";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../store/state/app.state";
import {LoginFailure} from "../../../store/actions/auth.actions";
import {NotificationService} from "../notification.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private notificationService: NotificationService,
    private store: Store<IAppState>
  ) {

  }

  // tslint:disable:no-any
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            if (event.status === 401) {
              this.handleUnauthorizedError();
            }
            if (event.status < 200 || event.status >= 300) {
              this.handleBaseError(event.body.message);
            }
          }
        }),
        catchError(error => {
          this.handleError(error);

          return of(error);
        })
      );
  }

  handleUnauthorizedError(): void {
    this.store.dispatch(new LoginFailure("User is not authorized"));
    CookieService.deleteCookie("access_token");
    this.router.navigate([`/login`]);
  }

  handleBaseError(message: string = "Error on server"): void {
    this.notificationService.showError(message);
  }

  private handleError(err: HttpErrorResponse): void {
    if (err.status === 401) {
      this.handleUnauthorizedError();
    } else {
      this.handleBaseError(err.error ? err.error.message : err.message);
    }
    throw err;
  }
}
