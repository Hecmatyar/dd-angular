import actionCreatorFactory from "typescript-fsa";
import {PagedResult} from "../../../api/dto/PagedResult.g";
import {AdminSetOrderStatus} from "../../../api/dto/AdminSetOrderStatus.g";
import {SearchAdminBulkOrderRequest} from "../../../api/dto/SearchAdminBulkOrderRequest.g";
import {AdminBulkOrderDto} from "../../../api/dto/AdminBulkOrderDto.g";
import {SetOrderCommentRequest} from "../../../core/interfaces/requests/set-comment-request";
import {CommentDto} from "../../../api/dto/CommentDto.g";

export enum EBulkOrderActions {
  GET_LIST = "GET_LIST",
  SET_STATUS = "SET_STATUS",
  SET_COMMENT = "SET_COMMENT",
}

const actionCreator = actionCreatorFactory("BULK_ORDERS");

export class BulkOrdersActions {
  static getList = actionCreator.async<SearchAdminBulkOrderRequest, PagedResult<AdminBulkOrderDto>, Error>(EBulkOrderActions.GET_LIST);
  static setStatus = actionCreator.async<AdminSetOrderStatus, void, Error>(EBulkOrderActions.SET_STATUS);
  static setComment = actionCreator.async<SetOrderCommentRequest, CommentDto, Error>(EBulkOrderActions.SET_COMMENT);
}
