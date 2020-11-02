import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {IAnalyticsState, initialAnalyticsState} from "../state/analytics.state";
import * as overviewConstants from "../../core/consts/analytics-overview";

const selectCards = (state: IAppState): IAnalyticsState => state.analytics || initialAnalyticsState;

export const selectAnalyticsState = createSelector(
  selectCards,
  (state: IAnalyticsState) => state
);

export const selectAnalyticsCardsState = createSelector(
  selectCards,
  (state: IAnalyticsState) => state.cards
);

export const selectAnalyticsOverviewState = createSelector(
  selectCards,
  ({ overview: { content, isLoading} }: IAnalyticsState) => {
    const { debit, credit, bonus, bonusKeys, creditKeys, debitKeys } = overviewConstants;

    if (content) {
      const {partners, bulkSales, users, transactionTotal, bonusOverviewItemsDto} = content;

      debitKeys.forEach((key: string) => {
        debit[key].partners = partners.debitOverview[key];
        debit[key].bulkSales = bulkSales.debitOverview[key];
        debit[key].users = users.debitOverview[key];
        debit[key].website = 0;
        debit[key].transactionTotal = transactionTotal.debitOverview[key];
      });

      creditKeys.forEach((key: string) => {
        credit[key].partners = partners.creditOverview[key];
        credit[key].bulkSales = bulkSales.creditOverview[key];
        credit[key].users = users.creditOverview[key];
        credit[key].website = 0;
        credit[key].transactionTotal = transactionTotal.creditOverview[key];
      });

      bonusKeys.forEach((key:string, i: number) => {
        bonus[key].usersCount = bonusOverviewItemsDto[i].usersCount;
        bonus[key].transactionsCount = bonusOverviewItemsDto[i].transactionsCount;
        bonus[key].transactionalTotal = bonusOverviewItemsDto[i].transactionalTotal;
      });
    }

    return { debit, credit, bonus, isLoading };
  }
);

export const selectAnalyticsOverviewFilterState = createSelector(
  selectCards,
  (state: IAnalyticsState) => state.filterOverview
);

export const selectAnalyticsValuesFilterState = createSelector(
  selectCards,
  (state: IAnalyticsState) => state.filterValues
);

export const selectAnalyticsBrandsFilterState = createSelector(
  selectCards,
  (state: IAnalyticsState) => state.filterBrands
);

export const selectAnalyticsPartnersFilterState = createSelector(
  selectCards,
  (state: IAnalyticsState) => state.filterPartners
);

export const selectAnalyticsCardsFilterState = createSelector(
  selectCards,
  (state: IAnalyticsState) => state.filterCards
);
