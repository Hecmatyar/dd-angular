import {reducerWithInitialState} from "typescript-fsa-reducers";
import {initialSettingsState} from "../state/settings.state";
import {SettingsActions} from "../actions/settings.actions";

export const settingsReducer = reducerWithInitialState(initialSettingsState)
  .cases([SettingsActions.getCards.started,
    SettingsActions.setCards.started], (state) => ({...state, cards: {isLoading: true, content: null}}))
  .case(SettingsActions.getCards.done, (state, {result}) => ({
    ...state,
    cards: {isLoading: false, content: result}
  }))
  .cases([SettingsActions.getCards.failed,
    SettingsActions.setCards.failed], (state) => ({...state, order: {isLoading: false, content: null}}))
  .cases([SettingsActions.getBonus.started,
    SettingsActions.setBonus.started], (state) => ({...state, cards: {isLoading: true, content: null}}))
  .case(SettingsActions.getBonus.done, (state, {result}) => ({
    ...state,
    bonus: {isLoading: false, content: result}
  }))
  .cases([SettingsActions.getBonus.failed,
    SettingsActions.setBonus.failed], (state) => ({...state, order: {isLoading: false, content: null}}))
  .cases([SettingsActions.getContent.started,
    SettingsActions.setContent.started], (state) => ({...state, cards: {isLoading: true, content: null}}))
  .case(SettingsActions.getContent.done, (state, {result}) => ({
    ...state,
    content: {isLoading: false, content: result}
  }))
  .cases([SettingsActions.getContent.failed,
    SettingsActions.setContent.failed], (state) => ({...state, order: {isLoading: false, content: null}}))
  .cases([SettingsActions.getDiscount.started,
    SettingsActions.setDiscount.started], (state) => ({...state, cards: {isLoading: true, content: null}}))
  .case(SettingsActions.getDiscount.done, (state, {result}) => ({
    ...state,
    discount: {isLoading: false, content: result}
  }))
  .cases([SettingsActions.getDiscount.failed,
    SettingsActions.setDiscount.failed], (state) => ({...state, order: {isLoading: false, content: null}}))
  .cases([SettingsActions.getPayment.started,
    SettingsActions.setPayment.started], (state) => ({...state, cards: {isLoading: true, content: null}}))
  .case(SettingsActions.getPayment.done, (state, {result}) => ({
    ...state,
    payment: {isLoading: false, content: result}
  }))
  .cases([SettingsActions.getPayment.failed,
    SettingsActions.setPayment.failed], (state) => ({...state, order: {isLoading: false, content: null}}));
