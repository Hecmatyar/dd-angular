import actionCreatorFactory from "typescript-fsa";
import {AdminMobileUsersRequest} from "../../../api/dto/AdminMobileUsersRequest.g";
import {PagedResult} from "../../../api/dto/PagedResult.g";
import {AdminMobileUserItem} from "../../../api/dto/AdminMobileUserItem.g";
import {AdminMobileUserFull} from "../../../api/dto/AdminMobileUserFull.g";
import {CommentDto} from "../../../api/dto/CommentDto.g";
import {SetVendorCommentRequest} from "../../../core/interfaces/requests/set-vendor-comment-request";
import {UpdateMobileVendorRequest} from "../../../core/interfaces/requests/update-mobile-vendor-request";

export enum EMobileVendorsActions {
  GET_LIST = "GET_LIST",
  GET_BY_ID = "GET_BY_ID",
  UPDATE = "UPDATE",
  BAN = "BAN",
  UN_BAN = "UN_BAN",
  SET_COMMENT = "SET_COMMENT",
  DELETE_PAYMENT_METHOD_LOCAL = "DELETE_PAYMENT_METHOD_LOCAL"
}

const actionCreator = actionCreatorFactory("VENDORS_MOBILE");

export class VendorsMobileActions {
  static getList = actionCreator.async<AdminMobileUsersRequest, PagedResult<AdminMobileUserItem>, Error>(EMobileVendorsActions.GET_LIST);
  static getById = actionCreator.async<string, AdminMobileUserFull, Error>(EMobileVendorsActions.GET_BY_ID);
  static update = actionCreator.async<UpdateMobileVendorRequest, AdminMobileUserFull, Error>(EMobileVendorsActions.UPDATE);
  static ban = actionCreator.async<string, void, Error>(EMobileVendorsActions.BAN);
  static unBan = actionCreator.async<string, void, Error>(EMobileVendorsActions.UN_BAN);
  static setComment = actionCreator.async<SetVendorCommentRequest, CommentDto, Error>(EMobileVendorsActions.SET_COMMENT);
  static deletePaymentMethod = actionCreator.async<string, void, Error>(EMobileVendorsActions.DELETE_PAYMENT_METHOD_LOCAL);
}
