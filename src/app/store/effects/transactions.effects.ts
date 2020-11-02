import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {from, Observable, of} from "rxjs";
import {AnyAction} from "typescript-fsa";
import {catchError, map, switchMap} from "rxjs/operators";
import {Action} from "typescript-fsa/src/index";
import {TransactionsActions} from "../actions/transactions.actions";
import {AccessWorker} from "../../core/access-worker";
import {NotificationService} from "../../core/services/notification.service";
import {AdminTransactionApiRequest} from "../../api/AdminTransactionApiRequest.g";
import {SearchTransactionsRequest} from "../../api/dto/SearchTransactionsRequest.g";
import {AccessLevel} from "../../api/dto/AccessLevel.g";
import {AdminSetTransactionStatus} from "../../api/dto/AdminSetTransactionStatus.g";
import {AddMobileTransactionRequest} from "../../api/dto/AddMobileTransactionRequest.g";
import {Router} from "@angular/router";
import {transactionsOrderListPath} from "../../core/path";
import {AddBulkTransactionRequest} from "../../api/dto/AddBulkTransactionRequest.g";
import {AddPartnersTransactionRequest} from "../../api/dto/AddPartnersTransactionRequest.g";
import {AdminDebtCardsRequest} from "../../api/dto/AdminDebtCardsRequest.g";

@Injectable()
export class TransactionsEffects {
  @Effect()
  Search: Observable<AnyAction> = this.actions$.pipe(
    ofType(TransactionsActions.getList.started.type),
    map((action: Action<SearchTransactionsRequest>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.getTransactions(params)).pipe(
          map((result) => TransactionsActions.getList.done({params, result})),
          catchError((error) => of(TransactionsActions.getList.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  SetStatus: Observable<AnyAction> = this.actions$.pipe(
    ofType(TransactionsActions.setStatus.started.type),
    map((action: Action<AdminSetTransactionStatus>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.TransactionsStatusChange)) {
          this.notificationService.showAccessDenyModal();

          return of(TransactionsActions.setStatus.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.setStatus(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Transaction status was successfully changed");

            return TransactionsActions.setStatus.done({params, result});
          }),
          catchError((error) => of(TransactionsActions.setStatus.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  GetAllowedType: Observable<AnyAction> = this.actions$.pipe(
    ofType(TransactionsActions.getAllowedTypes.started.type),
    map((action: Action<null>) => action.payload),
    switchMap(() => {
        return from(this.apiRequest.getAllowedTransactionTypes()).pipe(
          map((result) => TransactionsActions.getAllowedTypes.done({result})),
          catchError((error) => of(TransactionsActions.getAllowedTypes.failed({error})))
        );
      }
    ),
  );

  @Effect()
  GetDebtCards: Observable<AnyAction> = this.actions$.pipe(
    ofType(TransactionsActions.getDebtCards.started.type),
    map((action: Action<AdminDebtCardsRequest>) => action.payload),
    switchMap((params) => {
        return from(this.apiRequest.getDebtCards(params)).pipe(
          map((result) => TransactionsActions.getDebtCards.done({params, result})),
          catchError((error) => of(TransactionsActions.getDebtCards.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  AddMobile: Observable<AnyAction> = this.actions$.pipe(
    ofType(TransactionsActions.addMobile.started.type),
    map((action: Action<AddMobileTransactionRequest>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.TransactionsCreateUser)) {
          this.notificationService.showAccessDenyModal();

          return of(TransactionsActions.addMobile.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.addMobileTransaction(params)).pipe(
          map((result) => {
            this.router.navigate([transactionsOrderListPath]).then(() =>
              this.notificationService.showSuccessMessage("Successfully created a mobile transaction")
            );

            return TransactionsActions.addMobile.done({params, result});
          }),
          catchError((error) => of(TransactionsActions.addMobile.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  AddBulk: Observable<AnyAction> = this.actions$.pipe(
    ofType(TransactionsActions.addBulk.started.type),
    map((action: Action<AddBulkTransactionRequest>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.TransactionsCreateBulkSell)) {
          this.notificationService.showAccessDenyModal();

          return of(TransactionsActions.addBulk.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.addBulkTransaction(params)).pipe(
          map((result) => {
            this.router.navigate([transactionsOrderListPath]).then(() =>
              this.notificationService.showSuccessMessage("Successfully created a bulk transaction")
            );

            return TransactionsActions.addBulk.done({params, result});
          }),
          catchError((error) => of(TransactionsActions.addBulk.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  AddPartner: Observable<AnyAction> = this.actions$.pipe(
    ofType(TransactionsActions.addPartner.started.type),
    map((action: Action<AddPartnersTransactionRequest>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.TransactionsCreatePartners)) {
          this.notificationService.showAccessDenyModal();

          return of(TransactionsActions.addPartner.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.apiRequest.addPartnersTransaction(params)).pipe(
          map((result) => {
            this.router.navigate([transactionsOrderListPath]).then(() =>
              this.notificationService.showSuccessMessage("Successfully created a partner transaction")
            );

            return TransactionsActions.addPartner.done({params, result});
          }),
          catchError((error) => of(TransactionsActions.addPartner.failed({params, error})))
        );
      }
    ),
  );

  constructor(
    private actions$: Actions,
    private apiRequest: AdminTransactionApiRequest,
    private accessWorker: AccessWorker,
    private notificationService: NotificationService,
    private router: Router
  ) {
  }
}
