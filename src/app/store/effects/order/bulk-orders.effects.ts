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
import {BulkOrdersActions} from "../../actions/order/bulk-orders.actions";
import {SearchAdminBulkOrderRequest} from "../../../api/dto/SearchAdminBulkOrderRequest.g";
import {SetOrderCommentRequest} from "../../../core/interfaces/requests/set-comment-request";

@Injectable()
export class BulkOrdersEffects {
  @Effect()
  Search: Observable<AnyAction> = this.actions$.pipe(
    ofType(BulkOrdersActions.getList.started.type),
    map((action: Action<SearchAdminBulkOrderRequest>) => action.payload),
    switchMap(params => {
        if (params.sortParamDto) {
          if (params.sortParamDto.fieldName === 'buyer') {
            params.sortParamDto.memberName = 'buyer';
            params.sortParamDto.fieldName = 'name';
          }
        }

        return from(this.apiRequest.searchBulkOrders(params)).pipe(
          map((result) => BulkOrdersActions.getList.done({params, result})),
          catchError((error) => of(BulkOrdersActions.getList.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  SetStatus: Observable<AnyAction> = this.actions$.pipe(
    ofType(BulkOrdersActions.setStatus.started.type),
    map((action: Action<AdminSetOrderStatus>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.BulkOrdersStatusChange)) {
          this.notificationService.showAccessDenyModal();

          return of(BulkOrdersActions.setStatus.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.setBulkStatus(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Bulk order status was successfully changed");

            return BulkOrdersActions.setStatus.done({params, result});
          }),
          catchError((error) => of(BulkOrdersActions.setStatus.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  SetComment: Observable<AnyAction> = this.actions$.pipe(
    ofType(BulkOrdersActions.setComment.started.type),
    map((action: Action<SetOrderCommentRequest>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.BulkOrdersPageView)) {
          this.notificationService.showAccessDenyModal();

          return of(BulkOrdersActions.setComment.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.setComment(params.orderId, params.request)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Order comment was successfully changed");

            return BulkOrdersActions.setComment.done({params, result});
          }),
          catchError((error) => of(BulkOrdersActions.setComment.failed({params, error})))
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
