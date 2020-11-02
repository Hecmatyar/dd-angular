import actionCreatorFactory from "typescript-fsa";
import {PagedResult} from "../../../api/dto/PagedResult.g";
import {CommentDto} from "../../../api/dto/CommentDto.g";
import {SetVendorCommentRequest} from "../../../core/interfaces/requests/set-vendor-comment-request";
import {AdminPartnerUsersRequest} from "../../../api/dto/AdminPartnerUsersRequest.g";
import {AdminPartnerUserItem} from "../../../api/dto/AdminPartnerUserItem.g";
import {AdminPartnerUserFull} from "../../../api/dto/AdminPartnerUserFull.g";
import {UpdatePartnerVendorRequest} from "../../../core/interfaces/requests/update-partner-vendor-request";
import {AddPartnerVendorRequest} from "../../../core/interfaces/requests/add-partner-vendor-request";

export enum EPartnersVendorsActions {
  GET_LIST = "GET_LIST",
  GET_BY_ID = "GET_BY_ID",
  UPDATE = "UPDATE",
  ADD = "ADD",
  BAN = "BAN",
  UN_BAN = "UN_BAN",
  SET_COMMENT = "SET_COMMENT"
}

const actionCreator = actionCreatorFactory("VENDORS_PARTNERS");

export class VendorsPartnersActions {
  static getList = actionCreator.async<AdminPartnerUsersRequest, PagedResult<AdminPartnerUserItem>, Error>(EPartnersVendorsActions.GET_LIST);
  static getById = actionCreator.async<string, AdminPartnerUserFull, Error>(EPartnersVendorsActions.GET_BY_ID);
  static update = actionCreator.async<UpdatePartnerVendorRequest, AdminPartnerUserFull, Error>(EPartnersVendorsActions.UPDATE);
  static add = actionCreator.async<AddPartnerVendorRequest, AdminPartnerUserFull, Error>(EPartnersVendorsActions.ADD);
  static ban = actionCreator.async<string, void, Error>(EPartnersVendorsActions.BAN);
  static unBan = actionCreator.async<string, void, Error>(EPartnersVendorsActions.UN_BAN);
  static setComment = actionCreator.async<SetVendorCommentRequest, CommentDto, Error>(EPartnersVendorsActions.SET_COMMENT);
}
