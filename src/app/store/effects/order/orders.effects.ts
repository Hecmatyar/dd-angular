import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {from, Observable, of} from "rxjs";
import {catchError, map, switchMap} from "rxjs/operators";
import {Action} from "typescript-fsa/src/index";
import {AnyAction} from "typescript-fsa";
import {Router} from "@angular/router";
import {AdminOrderApiRequest} from "../../../api/AdminOrderApiRequest.g";
import {OrdersActions} from "../../actions/order/order.actions";
import {AdminCreateBulkOrderRequest} from "../../../api/dto/AdminCreateBulkOrderRequest.g";
import {AdminConfirmBulkOrderRequest} from "../../../api/dto/AdminConfirmBulkOrderRequest.g";
import {bulkOrderListPath, cardBulkOrderCreate} from "../../../core/path";
import {AccessLevel} from "../../../api/dto/AccessLevel.g";
import {AccessWorker} from "../../../core/access-worker";
import {NotificationService} from "../../../core/services/notification.service";

@Injectable()
export class OrdersEffects {
  @Effect()
  CreateBulkSales: Observable<AnyAction> = this.actions$.pipe(
    ofType(OrdersActions.createBulkOrder.started.type),
    map((action: Action<AdminCreateBulkOrderRequest>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.CardBulkOrderCreate)) {
          this.notificationService.showAccessDenyModal();

          return of(OrdersActions.createBulkOrder.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.orderApiRequest.createForBulkSell(params)).pipe(
          map((result) => {
            this.router.navigate([cardBulkOrderCreate(result.id)]);

            return OrdersActions.createBulkOrder.done({params, result});
          }),
          catchError((error) => of(OrdersActions.createBulkOrder.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  revertBulkSales: Observable<AnyAction> = this.actions$.pipe(
    ofType(OrdersActions.revertBulkOrder.started.type),
    map((action: Action<string>) => action.payload),
    switchMap(params => {
        return from(this.orderApiRequest.revertBulkOrder(params)).pipe(
          map((result) => {
            //TODO: взять фильтр или выставить свой
            this.router.navigate([bulkOrderListPath]).then(() =>
              this.notificationService.showSuccessMessage("Bulk sales was successfully reverted")
            );

            return OrdersActions.revertBulkOrder.done({params, result});
          }),
          catchError((error) => of(OrdersActions.revertBulkOrder.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  ConfirmBulkOrder: Observable<AnyAction> = this.actions$.pipe(
    ofType(OrdersActions.confirmBulkOrder.started.type),
    map((action: Action<AdminConfirmBulkOrderRequest>) => action.payload),
    switchMap(params => {
        return from(this.orderApiRequest.confirmBulkOrder(params)).pipe(
          map((result) => {
            this.router.navigate([bulkOrderListPath]).then(() =>
              this.notificationService.showSuccessMessage("Bulk sales was successfully confirmed")
            );

            return OrdersActions.confirmBulkOrder.done({params, result});
          }),
          catchError((error) => of(OrdersActions.confirmBulkOrder.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  GetDraftBulkOrder: Observable<AnyAction> = this.actions$.pipe(
    ofType(OrdersActions.getDraftBulkOrder.started.type),
    map((action: Action<string>) => action.payload),
    switchMap(params => {
        return from(this.orderApiRequest.getDraftBulkOrder(params)).pipe(
          map((result) => OrdersActions.getDraftBulkOrder.done({params, result})),
          catchError((error) => of(OrdersActions.getDraftBulkOrder.failed({params, error})))
        );
      }
    ),
  );

  constructor(
    private actions$: Actions,
    private orderApiRequest: AdminOrderApiRequest,
    private router: Router,
    private accessWorker: AccessWorker,
    private notificationService: NotificationService,
  ) {
  }
}
