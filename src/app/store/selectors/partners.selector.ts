import {createSelector} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {initialPartnersState, IPartnersState} from "../state/partners.state";
import {Select} from "../../core/interfaces/select";

const selectOrders = (state: IAppState): IPartnersState => state.partners || initialPartnersState;

export const selectPartnersState = createSelector(
  selectOrders,
  (state: IPartnersState) => state
);

export const selectCardsPartnersState = createSelector(
  selectOrders,
  (state: IPartnersState) => state.cards
);

export const selectPaymentTypesPartnersState = createSelector(
  selectOrders,
  (state: IPartnersState): Select[] => (state.paymentTypes.content || []).map(item => ({
    key: item.name,
    value: item.name
  }))
);
