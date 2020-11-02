import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {AccessWorker} from "../../../core/access-worker";
import {NotificationService} from "../../../core/services/notification.service";
import {from, Observable, of} from "rxjs";
import {AnyAction} from "typescript-fsa";
import {catchError, map, switchMap} from "rxjs/operators";
import {Action} from "typescript-fsa/src/index";
import {EmployeeActions} from "../../actions/employee.actions";
import {partnersVendorsListPath} from "../../../core/path";
import {AccessLevel} from "../../../api/dto/AccessLevel.g";
import {SetVendorCommentRequest} from "../../../core/interfaces/requests/set-vendor-comment-request";
import {AdminVendorApiRequest} from "../../../api/AdminVendorApiRequest.g";
import {Router} from "@angular/router";
import {VendorsPartnersActions} from "../../actions/vendors/partners-vendors.actions";
import {AdminPartnerUsersRequest} from "../../../api/dto/AdminPartnerUsersRequest.g";
import {UpdatePartnerVendorRequest} from "../../../core/interfaces/requests/update-partner-vendor-request";
import {AddPartnerVendorRequest} from "../../../core/interfaces/requests/add-partner-vendor-request";

@Injectable()
export class PartnersVendorsEffects {
  @Effect()
  Search: Observable<AnyAction> = this.actions$.pipe(
    ofType(VendorsPartnersActions.getList.started.type),
    map((action: Action<AdminPartnerUsersRequest>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.searchPartner(params)).pipe(
          map((result) => VendorsPartnersActions.getList.done({params, result})),
          catchError((error) => of(VendorsPartnersActions.getList.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  GetById: Observable<AnyAction> = this.actions$.pipe(
    ofType(VendorsPartnersActions.getById.started.type),
    map((action: Action<string>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.getPartnerById(params)).pipe(
          map((result) => VendorsPartnersActions.getById.done({params, result})),
          catchError((error) => of(EmployeeActions.getById.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  Update: Observable<AnyAction> = this.actions$.pipe(
    ofType(VendorsPartnersActions.update.started.type),
    map((action: Action<UpdatePartnerVendorRequest>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.updatePartner(params.request, params.w9)).pipe(
          map((result) => {
            this.router.navigate([partnersVendorsListPath]).then(() => {
              this.notificationService.showSuccessMessage("Partner vendor was successfully updated");
            });

            return VendorsPartnersActions.update.done({params, result});
          }),
          catchError((error) => of(VendorsPartnersActions.update.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  Add: Observable<AnyAction> = this.actions$.pipe(
    ofType(VendorsPartnersActions.add.started.type),
    map((action: Action<AddPartnerVendorRequest>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.addPartner(params.request, params.w9)).pipe(
          map((result) => {
            this.router.navigate([partnersVendorsListPath]).then(() => {
              this.notificationService.showSuccessMessage("Bulk vendor was successfully created");
            });

            return VendorsPartnersActions.add.done({params, result});
          }),
          catchError((error) => of(VendorsPartnersActions.add.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  Ban: Observable<AnyAction> = this.actions$.pipe(
    ofType(VendorsPartnersActions.ban.started.type),
    map((action: Action<string>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.PartnersSalesVendorsBlocking)) {
          this.notificationService.showAccessDenyModal();

          return of(VendorsPartnersActions.ban.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.banPartnerUser(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Partners vendor was successfully banned");

            return VendorsPartnersActions.ban.done({params, result});
          }),
          catchError((error) => of(VendorsPartnersActions.ban.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  UnBan: Observable<AnyAction> = this.actions$.pipe(
    ofType(VendorsPartnersActions.unBan.started.type),
    map((action: Action<string>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.PartnersSalesVendorsBlocking)) {
          this.notificationService.showAccessDenyModal();

          return of(VendorsPartnersActions.unBan.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.unBanPartnerUser(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Partners vendor was successfully unbanned");

            return VendorsPartnersActions.unBan.done({params, result});
          }),
          catchError((error) => of(VendorsPartnersActions.unBan.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  SetComment: Observable<AnyAction> = this.actions$.pipe(
    ofType(VendorsPartnersActions.setComment.started.type),
    map((action: Action<SetVendorCommentRequest>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.PartnersSalesVendorsPageView)) {
          this.notificationService.showAccessDenyModal();

          return of(VendorsPartnersActions.setComment.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.setComment(params.vendorId, params.request)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Vendor comment was successfully changed");

            return VendorsPartnersActions.setComment.done({params, result});
          }),
          catchError((error) => of(VendorsPartnersActions.setComment.failed({params, error})))
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
