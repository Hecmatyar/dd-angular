import actionCreatorFactory from "typescript-fsa";
import {PagedResult} from "../../../api/dto/PagedResult.g";
import {CommentDto} from "../../../api/dto/CommentDto.g";
import {SetVendorCommentRequest} from "../../../core/interfaces/requests/set-vendor-comment-request";
import {AdminBulkUserItem} from "../../../api/dto/AdminBulkUserItem.g";
import {AdminBulkUsersRequest} from "../../../api/dto/AdminBulkUsersRequest.g";
import {AdminBulkUserFull} from "../../../api/dto/AdminBulkUserFull.g";
import {UpdateSellCommission} from "../../../core/interfaces/requests/update-sell-commission";
import {UpdateBulkVendorRequest} from "../../../core/interfaces/requests/update-bulk-vendor-request";
import {AddBulkVendorRequest} from "../../../core/interfaces/requests/add-bulk-vendor-request";

export enum EBulkVendorsActions {
  GET_LIST = "GET_LIST",
  GET_BY_ID = "GET_BY_ID",
  UPDATE = "UPDATE",
  ADD = "ADD",
  UPDATE_SELL_COMMISSION = "UPDATE_SELL_COMMISSION",
  BAN = "BAN",
  UN_BAN = "UN_BAN",
  SET_COMMENT = "SET_COMMENT"
}

const actionCreator = actionCreatorFactory("VENDORS_BULK");

export class VendorsBulkActions {
  static getList = actionCreator.async<AdminBulkUsersRequest, PagedResult<AdminBulkUserItem>, Error>(EBulkVendorsActions.GET_LIST);
  static getById = actionCreator.async<string, AdminBulkUserFull, Error>(EBulkVendorsActions.GET_BY_ID);
  static update = actionCreator.async<UpdateBulkVendorRequest, AdminBulkUserFull, Error>(EBulkVendorsActions.UPDATE);
  static add = actionCreator.async<AddBulkVendorRequest, AdminBulkUserFull, Error>(EBulkVendorsActions.ADD);
  static updateSellCommission = actionCreator.async<UpdateSellCommission, void, Error>(EBulkVendorsActions.UPDATE_SELL_COMMISSION);
  static ban = actionCreator.async<string, void, Error>(EBulkVendorsActions.BAN);
  static unBan = actionCreator.async<string, void, Error>(EBulkVendorsActions.UN_BAN);
  static setComment = actionCreator.async<SetVendorCommentRequest, CommentDto, Error>(EBulkVendorsActions.SET_COMMENT);
}
