import actionCreatorFactory from "typescript-fsa";
import {PagedResult} from "../../../api/dto/PagedResult.g";
import {AdminSetOrderStatus} from "../../../api/dto/AdminSetOrderStatus.g";
import {AdminPartnerOrderDto} from "../../../api/dto/AdminPartnerOrderDto.g";
import {SearchAdminPartnerOrderRequest} from "../../../api/dto/SearchAdminPartnerOrderRequest.g";
import {SetOrderCommentRequest} from "../../../core/interfaces/requests/set-comment-request";
import {CommentDto} from "../../../api/dto/CommentDto.g";

export enum EPartnerOrderActions {
  GET_LIST = "GET_LIST",
  SET_STATUS = "SET_STATUS",
  SET_COMMENT = "SET_COMMENT",
}

const actionCreator = actionCreatorFactory("PARTNER_ORDERS");

export class PartnerOrdersActions {
  static getList = actionCreator.async<SearchAdminPartnerOrderRequest, PagedResult<AdminPartnerOrderDto>, Error>(EPartnerOrderActions.GET_LIST);
  static setStatus = actionCreator.async<AdminSetOrderStatus, void, Error>(EPartnerOrderActions.SET_STATUS);
  static setComment = actionCreator.async<SetOrderCommentRequest, CommentDto, Error>(EPartnerOrderActions.SET_COMMENT);
}
