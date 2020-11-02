import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {from, Observable, of} from "rxjs";
import {AnyAction} from "typescript-fsa";
import {catchError, map, switchMap} from "rxjs/operators";
import {Action} from "typescript-fsa/src/index";
import {AnalyticsAction} from "../actions/analytics-actions";
import {GetCardsAnalyticRequest} from "../../core/interfaces/requests/get-cards-analytic-request";
import {AdminAnalyticsApiRequest} from "../../api/AdminAnalyticsApiRequest.g";
import {GetBrandsAnalyticRequest} from "../../core/interfaces/requests/get-brands-analytic-request";
import {GetValuesAnalyticRequest} from "../../core/interfaces/requests/get-values-analytic-request";
import {GetOverviewAnalyticRequest} from "../../core/interfaces/requests/get-overview-analytic-request";
import {GetPartnersAnalyticRequest} from "../../core/interfaces/requests/get-partners-analytic-request";

@Injectable()
export class AnalyticsEffects {
  @Effect()
  GetCards: Observable<AnyAction> = this.actions$.pipe(
    ofType(AnalyticsAction.getCards.started.type),
    map((action: Action<GetCardsAnalyticRequest>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.getByCards(params.brandId, params.dateFrom, params.dateTo)).pipe(
          map((result) => AnalyticsAction.getCards.done({params, result})),
          catchError((error) => of(AnalyticsAction.getCards.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  GetBrands: Observable<AnyAction> = this.actions$.pipe(
    ofType(AnalyticsAction.getBrands.started.type),
    map((action: Action<GetBrandsAnalyticRequest>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.getByBrands(params.brandId, params.dateFrom, params.dateTo, params.servicePart, params.paged, params.sortParamDto)).pipe(
          map((result) => AnalyticsAction.getBrands.done({params, result})),
          catchError((error) => of(AnalyticsAction.getBrands.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  GetValues: Observable<AnyAction> = this.actions$.pipe(
    ofType(AnalyticsAction.getValues.started.type),
    map((action: Action<GetValuesAnalyticRequest>) => action.payload),
    switchMap((params) => {
        return from(this.apiRequest.getByValues(params.brandId, params.dateFrom, params.dateTo, params.paged, params.sortParamDto, params.fromValue, params.toValue)).pipe(
          map((result) => AnalyticsAction.getValues.done({params, result})),
          catchError((error) => of(AnalyticsAction.getValues.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  GetOverview: Observable<AnyAction> = this.actions$.pipe(
    ofType(AnalyticsAction.getOverview.started.type),
    map((action: Action<GetOverviewAnalyticRequest>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.getOverview(params.dateFrom, params.dateTo)).pipe(
          map((result) => AnalyticsAction.getOverview.done({params, result})),
          catchError((error) => of(AnalyticsAction.getOverview.failed({params, error})))
        );
      }
    ),
  );

  @Effect()
  GetPartners: Observable<AnyAction> = this.actions$.pipe(
    ofType(AnalyticsAction.getPartners.started.type),
    map((action: Action<GetPartnersAnalyticRequest>) => action.payload),
    switchMap(params => {
        return from(this.apiRequest.getByPartners(params.dateFrom, params.dateTo, params.partnerId, params.paged, params.sortParamDto)).pipe(
          map((result) => AnalyticsAction.getPartners.done({params, result})),
          catchError((error) => of(AnalyticsAction.getPartners.failed({params, error})))
        );
      }
    ),
  );

  constructor(
    private actions$: Actions,
    private apiRequest: AdminAnalyticsApiRequest,
  ) {
  }
}
