import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {AccessWorker} from "../../../core/access-worker";
import {NotificationService} from "../../../core/services/notification.service";
import {from, Observable, of} from "rxjs";
import {AnyAction} from "typescript-fsa";
import {catchError, map, switchMap} from "rxjs/operators";
import {Action} from "typescript-fsa/src/index";
import {VendorsMobileActions} from "../../actions/vendors/mobile-vendors.actions";
import {AdminMobileUsersRequest} from "../../../api/dto/AdminMobileUsersRequest.g";
import {AdminVendorApiRequest} from "../../../api/AdminVendorApiRequest.g";
import {EmployeeActions} from "../../actions/employee.actions";
import {userVendorsListPath} from "../../../core/path";
import {Router} from "@angular/router";
import {AccessLevel} from "../../../api/dto/AccessLevel.g";
import {SetVendorCommentRequest} from "../../../core/interfaces/requests/set-vendor-comment-request";
import {UpdateMobileVendorRequest} from "../../../core/interfaces/requests/update-mobile-vendor-request";

@Injectable()
export class MobileVendorsEffects {
  @Effect()
  Search: Observable<AnyAction> = this.actions$.pipe(
    ofType(VendorsMobileActions.getList.started.type),
    map((action: Action<AdminMobileUsersRequest>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.searchMobile(params)).pipe(
          map((result) => VendorsMobileActions.getList.done({params, result})),
          catchError((error) => of(VendorsMobileActions.getList.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  GetById: Observable<AnyAction> = this.actions$.pipe(
    ofType(VendorsMobileActions.getById.started.type),
    map((action: Action<string>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.getMobileById(params)).pipe(
          map((result) => VendorsMobileActions.getById.done({params, result})),
          catchError((error) => of(EmployeeActions.getById.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  Update: Observable<AnyAction> = this.actions$.pipe(
    ofType(VendorsMobileActions.update.started.type),
    map((action: Action<UpdateMobileVendorRequest>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.UserVendorsMoreDetails)) {
          this.notificationService.showAccessDenyModal();

          return of(VendorsMobileActions.update.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.updateMobile(params.request, params.w9)).pipe(
          map((result) => {
            this.router.navigate([userVendorsListPath]).then(() => {
              this.notificationService.showSuccessMessage("Mobile vendor was successfully updated");
            });

            return VendorsMobileActions.update.done({params, result});
          }),
          catchError((error) => of(VendorsMobileActions.update.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  Ban: Observable<AnyAction> = this.actions$.pipe(
    ofType(VendorsMobileActions.ban.started.type),
    map((action: Action<string>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.UserVendorsBlocking)) {
          this.notificationService.showAccessDenyModal();

          return of(VendorsMobileActions.ban.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.banMobileUser(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Mobile vendor was successfully banned");

            return VendorsMobileActions.ban.done({params, result});
          }),
          catchError((error) => of(VendorsMobileActions.ban.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  UnBan: Observable<AnyAction> = this.actions$.pipe(
    ofType(VendorsMobileActions.unBan.started.type),
    map((action: Action<string>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.UserVendorsBlocking)) {
          this.notificationService.showAccessDenyModal();

          return of(VendorsMobileActions.unBan.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.unBanMobileUser(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Mobile vendor was successfully unbanned");

            return VendorsMobileActions.unBan.done({params, result});
          }),
          catchError((error) => of(VendorsMobileActions.unBan.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  SetComment: Observable<AnyAction> = this.actions$.pipe(
    ofType(VendorsMobileActions.setComment.started.type),
    map((action: Action<SetVendorCommentRequest>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.UserVendorsPageView)) {
          this.notificationService.showAccessDenyModal();

          return of(VendorsMobileActions.setComment.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.setComment(params.vendorId, params.request)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Vendor comment was successfully changed");

            return VendorsMobileActions.setComment.done({params, result});
          }),
          catchError((error) => of(VendorsMobileActions.setComment.failed({params, error})))
        );
      }
    ),
  );

  constructor(
    private actions$: Actions,
    private apiRequest: AdminVendorApiRequest,
    private accessWorker: AccessWorker,
    private notificationService: NotificationService,
    private router: Router,
    // private store: Store<IAppState>
  ) {
  }
}
