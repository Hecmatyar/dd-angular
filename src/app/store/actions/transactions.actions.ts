import actionCreatorFactory from "typescript-fsa";
import {PagedResult} from "../../api/dto/PagedResult.g";
import {SearchTransactionsRequest} from "../../api/dto/SearchTransactionsRequest.g";
import {AdminTransactionsFull} from "../../api/dto/AdminTransactionsFull.g";
import {AdminSetTransactionStatus} from "../../api/dto/AdminSetTransactionStatus.g";
import {AdminAllowedTransactionTypesDto} from "../../api/dto/AdminAllowedTransactionTypesDto.g";
import {AddMobileTransactionRequest} from "../../api/dto/AddMobileTransactionRequest.g";
import {AddBulkTransactionRequest} from "../../api/dto/AddBulkTransactionRequest.g";
import {AddPartnersTransactionRequest} from "../../api/dto/AddPartnersTransactionRequest.g";
import {AdminDebtCardsRequest} from "../../api/dto/AdminDebtCardsRequest.g";
import {AdminDebtCard} from "../../api/dto/AdminDebtCard.g";

export enum ETransactionActions {
  GET_LIST = "GET_LIST",
  SET_STATUS = "SET_STATUS",
  GET_ALLOWED_TYPES = "GET_ALLOWED_TYPES",
  ADD_MOBILE = "ADD_MOBILE",
  ADD_BULK = "ADD_BULK",
  ADD_PARTNER = "ADD_PARTNER",
  GET_DEBT_CARDS = "GET_DEBT_CARDS"
}

const actionCreator = actionCreatorFactory("TRANSACTIONS");

export class TransactionsActions {
  static getList = actionCreator.async<SearchTransactionsRequest, PagedResult<AdminTransactionsFull>, Error>(ETransactionActions.GET_LIST);
  static setStatus = actionCreator.async<AdminSetTransactionStatus, void, Error>(ETransactionActions.SET_STATUS);
  static getAllowedTypes = actionCreator.async<null, AdminAllowedTransactionTypesDto, Error>(ETransactionActions.GET_ALLOWED_TYPES);
  static addMobile = actionCreator.async<AddMobileTransactionRequest, void, Error>(ETransactionActions.ADD_MOBILE);
  static addBulk = actionCreator.async<AddBulkTransactionRequest, void, Error>(ETransactionActions.ADD_BULK);
  static addPartner = actionCreator.async<AddPartnersTransactionRequest, void, Error>(ETransactionActions.ADD_PARTNER);
  static getDebtCards = actionCreator.async<AdminDebtCardsRequest, AdminDebtCard[], Error>(ETransactionActions.GET_DEBT_CARDS);
}
