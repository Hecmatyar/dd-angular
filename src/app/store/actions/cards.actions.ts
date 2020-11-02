import actionCreatorFactory from "typescript-fsa";
import {SearchCardRequest} from "../../api/dto/SearchCardRequest.g";
import {PagedResult} from "../../api/dto/PagedResult.g";
import {AdminCardDataFull} from "../../api/dto/AdminCardDataFull.g";
import {AdminSetCardStatus} from "../../api/dto/AdminSetCardStatus.g";
import {SetCardTopRequest} from "../../api/dto/SetCardTopRequest.g";
import {AdminUpdateCardRequest} from "../../api/dto/AdminUpdateCardRequest.g";
import {CommentDto} from "../../api/dto/CommentDto.g";
import {SetCardsCommentRequest} from "../../core/interfaces/requests/set-cards-comment-request";

export enum ECardActions {
  GET_LIST = "GET_LIST",
  SET_STATUS = "SET_STATUS",
  SET_INFO = "SET_INFO",
  SET_TOP = "SET_TOP",
  SET_COMMENT = "SET_COMMENT",
  // SET_FILTER = "SET_FILTER",
}

const actionCreator = actionCreatorFactory("CARDS");

export class CardsActions {
  static getList = actionCreator.async<SearchCardRequest, PagedResult<AdminCardDataFull>, Error>(ECardActions.GET_LIST);
  static setStatus = actionCreator.async<AdminSetCardStatus, AdminCardDataFull, Error>(ECardActions.SET_STATUS);
  static setInfo = actionCreator.async<AdminUpdateCardRequest, AdminCardDataFull, Error>(ECardActions.SET_INFO);
  static setTop = actionCreator.async<SetCardTopRequest, AdminCardDataFull, Error>(ECardActions.SET_TOP);
  static setComment = actionCreator.async<SetCardsCommentRequest, CommentDto, Error>(ECardActions.SET_COMMENT);
  // static setFilter = actionCreator.async<SearchCardRequest, SearchCardRequest, Error>(ECardActions.SET_FILTER);
}
