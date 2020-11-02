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
import {MobileOrdersActions} from "../../actions/order/mobile-orders.actions";
import {SearchAdminMobileOrderRequest} from "../../../api/dto/SearchAdminMobileOrderRequest.g";
import {SetOrderCommentRequest} from "../../../core/interfaces/requests/set-comment-request";

@Injectable()
export class MobileOrdersEffects {
  @Effect()
  Search: Observable<AnyAction> = this.actions$.pipe(
    ofType(MobileOrdersActions.getList.started.type),
    map((action: Action<SearchAdminMobileOrderRequest>) => action.payload),
    switchMap(params => {
        if (params.sortParamDto) {
          if (params.sortParamDto.fieldName === 'vendor') {
            params.sortParamDto.memberName = 'vendor';
            params.sortParamDto.fieldName = 'name';
          }
          if (params.sortParamDto.fieldName === 'buyer') {
            params.sortParamDto.memberName = 'buyer';
            params.sortParamDto.fieldName = 'name';
          }
        }

        return from(this.apiRequest.searchMobileOrders(params)).pipe(
          map((result) => MobileOrdersActions.getList.done({params, result})),
          catchError((error) => of(MobileOrdersActions.getList.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  SetStatus: Observable<AnyAction> = this.actions$.pipe(
    ofType(MobileOrdersActions.setStatus.started.type),
    map((action: Action<AdminSetOrderStatus>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.UserOrdersStatusChange)) {
          this.notificationService.showAccessDenyModal();

          return of(MobileOrdersActions.setStatus.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.setMobileStatus(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Mobile order status was successfully changed");

            return MobileOrdersActions.setStatus.done({params, result});
          }),
          catchError((error) => of(MobileOrdersActions.setStatus.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  SetComment: Observable<AnyAction> = this.actions$.pipe(
    ofType(MobileOrdersActions.setComment.started.type),
    map((action: Action<SetOrderCommentRequest>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.UserOrdersPageView)) {
          this.notificationService.showAccessDenyModal();

          return of(MobileOrdersActions.setComment.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.setComment(params.orderId, params.request)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Order comment was successfully changed");

            return MobileOrdersActions.setComment.done({params, result});
          }),
          catchError((error) => of(MobileOrdersActions.setComment.failed({params, error})))
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
