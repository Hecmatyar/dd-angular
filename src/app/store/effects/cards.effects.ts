import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {from, Observable, of} from "rxjs";
import {catchError, map, switchMap} from "rxjs/operators";
import {Action} from "typescript-fsa/src/index";
import {SearchCardRequest} from "../../api/dto/SearchCardRequest.g";
import {CardsActions} from "../actions/cards.actions";
import {AnyAction} from "typescript-fsa";
import {AdminSetCardStatus} from "../../api/dto/AdminSetCardStatus.g";
import {AdminCardApiRequest} from "../../api/AdminCardApiRequest.g";
import {AdminUpdateCardRequest} from "../../api/dto/AdminUpdateCardRequest.g";
import {SetCardTopRequest} from "../../api/dto/SetCardTopRequest.g";
import {AccessWorker} from "../../core/access-worker";
import {AccessLevel} from "../../api/dto/AccessLevel.g";
import {NotificationService} from "../../core/services/notification.service";
import {SetCardsCommentRequest} from "../../core/interfaces/requests/set-cards-comment-request";

@Injectable()
export class CardsEffects {

  @Effect()
  Search: Observable<AnyAction> = this.actions$.pipe(
    ofType(CardsActions.getList.started.type),
    map((action: Action<SearchCardRequest>) => action.payload),
    switchMap(params => {
        return from(this.cardsApiRequest.search(params)).pipe(
          map((result) => CardsActions.getList.done({params, result})),
          catchError((error) => of(CardsActions.getList.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  SetStatus: Observable<AnyAction> = this.actions$.pipe(
    ofType(CardsActions.setStatus.started.type),
    map((action: Action<AdminSetCardStatus>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.CardStatusChange)) {
          this.notificationService.showAccessDenyModal();

          return of(CardsActions.setStatus.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.cardsApiRequest.setStatus(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Card status was successfully changed");

            return CardsActions.setStatus.done({params, result});
          }),
          catchError((error) => of(CardsActions.setStatus.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  SetInfo: Observable<AnyAction> = this.actions$.pipe(
    ofType(CardsActions.setInfo.started.type),
    map((action: Action<AdminUpdateCardRequest>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.CardInfoEdit)) {
          this.notificationService.showAccessDenyModal();

          return of(CardsActions.setInfo.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.cardsApiRequest.update(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Card info was successfully changed");

            return CardsActions.setInfo.done({params, result});
          }),
          catchError((error) => of(CardsActions.setInfo.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  SetTop: Observable<AnyAction> = this.actions$.pipe(
    ofType(CardsActions.setTop.started.type),
    map((action: Action<SetCardTopRequest>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.CardTopEdit)) {
          this.notificationService.showAccessDenyModal();

          return of(CardsActions.setTop.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.cardsApiRequest.setTopCommission(params)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Card top commission value was successfully changed");

            return CardsActions.setTop.done({params, result});
          }),
          catchError((error) => of(CardsActions.setTop.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  SetComment: Observable<AnyAction> = this.actions$.pipe(
    ofType(CardsActions.setComment.started.type),
    map((action: Action<SetCardsCommentRequest>) => action.payload),
    switchMap(params => {
        if (!this.accessWorker.haveAccess(AccessLevel.CardPageView)) {
          this.notificationService.showAccessDenyModal();

          return of(CardsActions.setComment.failed({params, error: ({message: "Access denied"} as Error)}));
        }

        return from(this.cardsApiRequest.setComment(params.cardId, params.request)).pipe(
          map((result) => {
            this.notificationService.showSuccessMessage("Card comment was successfully changed");

            return CardsActions.setComment.done({params, result});
          }),
          catchError((error) => of(CardsActions.setComment.failed({params, error})))
        );
      }
    ),
  );

  // @Effect()
  // SetFilter: Observable<AnyAction> = this.actions$.pipe(
  //   ofType(CardsActions.setFilter.started.type),
  //   map((action: Action<SearchCardRequest>) => action.payload),
  //   switchMap(params => of(CardsActions.setFilter.done({params, result: params}))
  //   ),
  // );
  //
  // @Effect()
  // SetFilterDone: Observable<AnyAction> = this.actions$.pipe(
  //   ofType(CardsActions.setFilter.done.type),
  //   map((action: Action<SearchCardRequest>) => action.payload),
  //   switchMap(() => {
  //       combineLatest(this.store.select(selectCardsFilterState).pipe(take(1))).subscribe(filter => {
  //         this.store.dispatch(CardsActions.getList.started(filter[0]));
  //       });
  //
  //       return of();
  //     }
  //   ),
  // );

  constructor(
    private actions$: Actions,
    private cardsApiRequest: AdminCardApiRequest,
    private accessWorker: AccessWorker,
    private notificationService: NotificationService,
    // private store: Store<IAppState>
  ) {
  }
}
