import actionCreatorFactory from "typescript-fsa";
import {AdminCardsSetting} from "../../api/dto/AdminCardsSetting.g";
import {AdminDiscountSetting} from "../../api/dto/AdminDiscountSetting.g";
import {AdminContentSetting} from "../../api/dto/AdminContentSetting.g";
import {AdminBonusSetting} from "../../api/dto/AdminBonusSetting.g";
import {AdminPaymentSettings} from "../../api/dto/AdminPaymentSettings.g";

export enum ESettingsActions {
  GET_CARDS = "GET_CARDS",
  SET_CARDS = "SET_CARDS",
  GET_DISCOUNT = "GET_DISCOUNT",
  SET_DISCOUNT = "SET_DISCOUNT",
  GET_CONTENT = "GET_CONTENT",
  SET_CONTENT = "SET_CONTENT",
  GET_BONUS = "GET_BONUS",
  SET_BONUS = "SET_BONUS",
  GET_PAYMENT = "GET_PAYMENT",
  SET_PAYMENT = "SET_PAYMENT",
}

const actionCreator = actionCreatorFactory("SETTINGS");

export class SettingsActions {
  static getCards = actionCreator.async<null, AdminCardsSetting, Error>(ESettingsActions.GET_CARDS);
  static setCards = actionCreator.async<AdminCardsSetting, AdminCardsSetting, Error>(ESettingsActions.SET_CARDS);
  static getDiscount = actionCreator.async<null, AdminDiscountSetting, Error>(ESettingsActions.GET_DISCOUNT);
  static setDiscount = actionCreator.async<AdminDiscountSetting, AdminDiscountSetting, Error>(ESettingsActions.SET_DISCOUNT);
  static getContent = actionCreator.async<null, AdminContentSetting, Error>(ESettingsActions.GET_CONTENT);
  static setContent = actionCreator.async<AdminContentSetting, AdminContentSetting, Error>(ESettingsActions.SET_CONTENT);
  static getBonus = actionCreator.async<null, AdminBonusSetting, Error>(ESettingsActions.GET_BONUS);
  static setBonus = actionCreator.async<AdminBonusSetting, AdminBonusSetting, Error>(ESettingsActions.SET_BONUS);
  static getPayment = actionCreator.async<null, AdminPaymentSettings, Error>(ESettingsActions.GET_PAYMENT);
  static setPayment = actionCreator.async<AdminPaymentSettings, AdminPaymentSettings, Error>(ESettingsActions.SET_PAYMENT);
}
