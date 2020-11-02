import {createSelector} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {initialSettingsState, ISettingsState} from "../state/settings.state";
import {Select} from "../../core/interfaces/select";

const selectOrders = (state: IAppState): ISettingsState => state.settings || initialSettingsState;

export const selectSettingsState = createSelector(
  selectOrders,
  (state: ISettingsState) => state
);

export const selectCardsSettingsState = createSelector(
  selectOrders,
  (state: ISettingsState) => state.cards
);

export const selectDiscountSettingsState = createSelector(
  selectOrders,
  (state: ISettingsState) => state.discount
);

export const selectContentSettingsState = createSelector(
  selectOrders,
  (state: ISettingsState) => state.content
);

export const selectBonusSettingsState = createSelector(
  selectOrders,
  (state: ISettingsState) => state.bonus
);

export const selectPaymentSettingsState = createSelector(
  selectOrders,
  (state: ISettingsState): Select[] => state.payment.content
    ? state.payment.content.paymentMethods.map(item => ({key: item.id, value: item.name}))
    : []
);
