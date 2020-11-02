import actionCreatorFactory from "typescript-fsa";
import {AdminCreateBulkOrderRequest} from "../../../api/dto/AdminCreateBulkOrderRequest.g";
import {AdminBulkOrder} from "../../../api/dto/AdminBulkOrder.g";
import {AdminConfirmBulkOrderRequest} from "../../../api/dto/AdminConfirmBulkOrderRequest.g";
import {AdminUpdateVendorBrandCommissionSellRequest} from "../../../api/dto/AdminUpdateVendorBrandCommissionSellRequest.g";

export enum EOrderActions {
  CREATE_BULK_ORDER = "CREATE_BULK_ORDER",
  REVERT_BULK_ORDER = "REVERT_BULK_ORDER",
  CONFIRM_BULK_ORDER = "CONFIRM_BULK_ORDER",
  GET_DRAFT_BULK_ORDER = "GET_DRAFT_BULK_ORDER",
  UPDATE_SELL_COMMISSION = "UPDATE_SELL_COMMISSION",
  GET_ORDER_SUM = "GET_ORDER_SUM",
}

const actionCreator = actionCreatorFactory("ORDERS");

export class OrdersActions {
  static createBulkOrder = actionCreator.async<AdminCreateBulkOrderRequest, AdminBulkOrder, Error>(EOrderActions.CREATE_BULK_ORDER);
  static revertBulkOrder = actionCreator.async<string, void, Error>(EOrderActions.REVERT_BULK_ORDER);
  static confirmBulkOrder = actionCreator.async<AdminConfirmBulkOrderRequest, void, Error>(EOrderActions.CONFIRM_BULK_ORDER);
  static getDraftBulkOrder = actionCreator.async<string, AdminBulkOrder, Error>(EOrderActions.GET_DRAFT_BULK_ORDER);
  static updateSellCommission = actionCreator.async<AdminUpdateVendorBrandCommissionSellRequest, AdminBulkOrder, Error>(EOrderActions.UPDATE_SELL_COMMISSION);
  static getOrderSum = actionCreator.async<number, number, Error>(EOrderActions.GET_ORDER_SUM);
}
