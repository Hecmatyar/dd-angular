import actionCreatorFactory from "typescript-fsa";
import {AdminSearchAuditRequest} from "../../api/dto/AdminSearchAuditRequest.g";
import {PagedResult} from "../../api/dto/PagedResult.g";
import {AuditInfoDto} from "../../api/dto/AuditInfoDto.g";
import {AdminCardsSetting} from "../../api/dto/AdminCardsSetting.g";
import {AdminDiscountSetting} from "../../api/dto/AdminDiscountSetting.g";
import {AdminContentSetting} from "../../api/dto/AdminContentSetting.g";
import {AdminBonusSetting} from "../../api/dto/AdminBonusSetting.g";

export enum ESupportActions {
  SEARCH = "SEARCH",
  GET_CARD = "GET_CARD",
  SET_CARD = "SET_CARD",
  GET_DISCOUNT = "GET_DISCOUNT",
  SET_DISCOUNT = "SET_DISCOUNT",
  GET_BONUS = "GET_BONUS",
  SET_BONUS = "SET_BONUS",
  GET_CONTENT = "GET_CONTENT",
  SET_CONTENT = "SET_CONTENT",
}

const actionCreator = actionCreatorFactory("SUPPORT");

export class SupportActions {
  static search = actionCreator.async<AdminSearchAuditRequest, PagedResult<AuditInfoDto>, Error>(ESupportActions.SEARCH);
  static getCard = actionCreator.async<null, AdminCardsSetting, Error>(ESupportActions.GET_CARD);
  static setCard = actionCreator.async<AdminCardsSetting, AdminCardsSetting, Error>(ESupportActions.SET_CARD);
  static getDiscount = actionCreator.async<null, AdminDiscountSetting, Error>(ESupportActions.GET_DISCOUNT);
  static setDiscount = actionCreator.async<AdminDiscountSetting, AdminDiscountSetting, Error>(ESupportActions.SET_DISCOUNT);
  static getBonus= actionCreator.async<null, AdminBonusSetting, Error>(ESupportActions.GET_BONUS);
  static setBonus= actionCreator.async<AdminBonusSetting, AdminBonusSetting, Error>(ESupportActions.SET_BONUS);
  static getContent= actionCreator.async<null, AdminContentSetting, Error>(ESupportActions.GET_CONTENT);
  static setContent= actionCreator.async<AdminContentSetting, AdminContentSetting, Error>(ESupportActions.SET_CONTENT);
}
