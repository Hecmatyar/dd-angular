import actionCreatorFactory from "typescript-fsa";
import {SearchAdminMobileOrderRequest} from "../../../api/dto/SearchAdminMobileOrderRequest.g";
import {PagedResult} from "../../../api/dto/PagedResult.g";
import {AdminMobileOrderDto} from "../../../api/dto/AdminMobileOrderDto.g";
import {AdminSetOrderStatus} from "../../../api/dto/AdminSetOrderStatus.g";
import {SetOrderCommentRequest} from "../../../core/interfaces/requests/set-comment-request";
import {CommentDto} from "../../../api/dto/CommentDto.g";

export enum EMobileOrderActions {
  GET_LIST = "GET_LIST",
  SET_STATUS = "SET_STATUS",
  SET_COMMENT = "SET_COMMENT",
}

const actionCreator = actionCreatorFactory("MOBILE_ORDERS");

export class MobileOrdersActions {
  static getList = actionCreator.async<SearchAdminMobileOrderRequest, PagedResult<AdminMobileOrderDto>, Error>(EMobileOrderActions.GET_LIST);
  static setStatus = actionCreator.async<AdminSetOrderStatus, void, Error>(EMobileOrderActions.SET_STATUS);
  static setComment = actionCreator.async<SetOrderCommentRequest, CommentDto, Error>(EMobileOrderActions.SET_COMMENT);
}
