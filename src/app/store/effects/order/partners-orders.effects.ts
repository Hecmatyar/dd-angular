import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {from, Observable, of} from "rxjs";
import {catchError, map, switchMap} from "rxjs/operators";
import {Action} from "typescript-fsa/src/index";
import {AnyAction} from "typescript-fsa";
import {AccessLevel} from "../../../api/dto/AccessLevel.g";
import {AccessWorker} from "../../../core/access-worker";
import {NotificationService} from "../../../core/services/notification.service";
import {AdminSetOrderStatus} from "../../../api/dto/AdminSetOrderStatus.g";
import {AdminOrderApiRequest} from "../../../api/AdminOrderApiRequest.g";
import {SearchAdminPartnerOrderRequest} from "../../../api/dto/SearchAdminPartnerOrderRequest.g";
import {PartnerOrdersActions} from "../../actions/order/partners-orders.actions";
import {SetOrderCommentRequest} from "../../../core/interfaces/requests/set-comment-request";

@Injectable()
export class PartnerOrdersEffects {
  @Effect()
  Search: Observable<AnyAction> = this.actions$.pipe(
    ofType(PartnerOrdersActions.getList.started.type),
    map((action: Action<SearchAdminPartnerOrderRequest>) => action.payload),
    switchMap(params => {
        if (params.sortParamDto) {
          if (params.sortParamDto.fieldName === 'vendor') {
            params.sortParamDto.memberName = 'vendor';
            params.sortParamDto.fieldName = 'name';
          }
        }

        return from(this.apiRequest.searchPartnerOrders(params)).pipe(
          map((result) => PartnerOrdersActions.getList.done({params, result})),
          catchError((error) => of(PartnerOrdersActions.getList.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  SetStatus: Observable<AnyAction> = this.actions$.pipe(
    ofType(PartnerOrdersActions.setStatus.started.type),
    map((action: Action<AdminSetOrderStatus>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.PartnersOrdersStatusChange)) {
          this.notificationService.showAccessDenyModal();

          return of(PartnerOrdersActions.setStatus.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.setPartnerStatus(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Partner order status was successfully changed");

            return PartnerOrdersActions.setStatus.done({params, result});
          }),
          catchError((error) => of(PartnerOrdersActions.setStatus.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  SetComment: Observable<AnyAction> = this.actions$.pipe(
    ofType(PartnerOrdersActions.setComment.started.type),
    map((action: Action<SetOrderCommentRequest>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.PartnersOrdersPageView)) {
          this.notificationService.showAccessDenyModal();

          return of(PartnerOrdersActions.setComment.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.setComment(params.orderId, params.request)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Order comment was successfully changed");

            return PartnerOrdersActions.setComment.done({params, result});
          }),
          catchError((error) => of(PartnerOrdersActions.setComment.failed({params, error})))
        );
      }
    ),
  );

  constructor(
    private actions$: Actions,
    private apiRequest: AdminOrderApiRequest,
    private accessWorker: AccessWorker,
    private notificationService: NotificationService,
  ) {
  }
}
