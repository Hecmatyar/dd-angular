import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {AccessWorker} from "../../../core/access-worker";
import {NotificationService} from "../../../core/services/notification.service";
import {AdminVendorApiRequest} from "../../../api/AdminVendorApiRequest.g";
import {Router} from "@angular/router";
import {from, Observable, of} from "rxjs";
import {AnyAction} from "typescript-fsa";
import {catchError, map, switchMap} from "rxjs/operators";
import {Action} from "typescript-fsa/src/index";
import {EmployeeActions} from "../../actions/employee.actions";
import {bulkVendorsListPath} from "../../../core/path";
import {AccessLevel} from "../../../api/dto/AccessLevel.g";
import {SetVendorCommentRequest} from "../../../core/interfaces/requests/set-vendor-comment-request";
import {VendorsBulkActions} from "../../actions/vendors/bulk-vendors.actions";
import {AdminBulkUsersRequest} from "../../../api/dto/AdminBulkUsersRequest.g";
import {UpdateSellCommission} from "../../../core/interfaces/requests/update-sell-commission";
import {UpdateBulkVendorRequest} from "../../../core/interfaces/requests/update-bulk-vendor-request";
import {AddBulkVendorRequest} from "../../../core/interfaces/requests/add-bulk-vendor-request";

@Injectable()
export class BulkVendorsEffects {
  @Effect()
  Search: Observable<AnyAction> = this.actions$.pipe(
    ofType(VendorsBulkActions.getList.started.type),
    map((action: Action<AdminBulkUsersRequest>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.searchBulk(params)).pipe(
          map((result) => VendorsBulkActions.getList.done({params, result})),
          catchError((error) => of(VendorsBulkActions.getList.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  GetById: Observable<AnyAction> = this.actions$.pipe(
    ofType(VendorsBulkActions.getById.started.type),
    map((action: Action<string>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.getBulkById(params)).pipe(
          map((result) => VendorsBulkActions.getById.done({params, result})),
          catchError((error) => of(EmployeeActions.getById.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  Update: Observable<AnyAction> = this.actions$.pipe(
    ofType(VendorsBulkActions.update.started.type),
    map((action: Action<UpdateBulkVendorRequest>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.updateBulk(params.request, params.w9)).pipe(
          map((result) => {
            this.router.navigate([bulkVendorsListPath]).then(() => {
              this.notificationService.showSuccessMessage("Bulk vendor was successfully updated");
            });

            return VendorsBulkActions.update.done({params, result});
          }),
          catchError((error) => of(VendorsBulkActions.update.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  Add: Observable<AnyAction> = this.actions$.pipe(
    ofType(VendorsBulkActions.add.started.type),
    map((action: Action<AddBulkVendorRequest>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.addBulk(params.request, params.w9)).pipe(
          map((result) => {
            this.router.navigate([bulkVendorsListPath]).then(() => {
              this.notificationService.showSuccessMessage("Bulk vendor was successfully created");
            });

            return VendorsBulkActions.add.done({params, result});
          }),
          catchError((error) => of(VendorsBulkActions.add.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  UpdateSellCommission: Observable<AnyAction> = this.actions$.pipe(
    ofType(VendorsBulkActions.updateSellCommission.started.type),
    map((action: Action<UpdateSellCommission>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.updateSellCommission(params.bulkBuyerId, params.csv)).pipe(
          map((result) => VendorsBulkActions.updateSellCommission.done({params, result})),
          catchError((error) => of(VendorsBulkActions.updateSellCommission.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  Ban: Observable<AnyAction> = this.actions$.pipe(
    ofType(VendorsBulkActions.ban.started.type),
    map((action: Action<string>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.BulkSalesVendorsBlocking)) {
          this.notificationService.showAccessDenyModal();

          return of(VendorsBulkActions.ban.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.banBulkUser(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Bulk vendor was successfully banned");

            return VendorsBulkActions.ban.done({params, result});
          }),
          catchError((error) => of(VendorsBulkActions.ban.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  UnBan: Observable<AnyAction> = this.actions$.pipe(
    ofType(VendorsBulkActions.unBan.started.type),
    map((action: Action<string>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.BulkSalesVendorsBlocking)) {
          this.notificationService.showAccessDenyModal();

          return of(VendorsBulkActions.unBan.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.unBanBulkUser(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Bulk vendor was successfully unbanned");

            return VendorsBulkActions.unBan.done({params, result});
          }),
          catchError((error) => of(VendorsBulkActions.unBan.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  SetComment: Observable<AnyAction> = this.actions$.pipe(
    ofType(VendorsBulkActions.setComment.started.type),
    map((action: Action<SetVendorCommentRequest>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.PartnersSalesVendorsPageView)) {
          this.notificationService.showAccessDenyModal();

          return of(VendorsBulkActions.setComment.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.setComment(params.vendorId, params.request)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Vendor comment was successfully changed");

            return VendorsBulkActions.setComment.done({params, result});
          }),
          catchError((error) => of(VendorsBulkActions.setComment.failed({params, error})))
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
