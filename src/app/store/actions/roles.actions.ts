import actionCreatorFactory from "typescript-fsa";
import {PagedResult} from "../../api/dto/PagedResult.g";
import {AdminRole} from "../../api/dto/AdminRole.g";
import {AccessLevelMap} from "../../api/dto/AccessLevelMap.g";
import {EntityDto} from "../../api/dto/EntityDto.g";

export enum ERoleActions {
  GET_LIST = "GET_LIST",
  UPDATE = "UPDATE",
  ADD = "ADD",
  GET_BY_ID = "GET_BY_ID",
  GET_EMPTY = "GET_EMPTY",
  DELETE = "DELETE",
  GET_ACCESS_LEVEL = "GET_ACCESS_LEVEL",
  GET_All = "GET_All",
  GET_ACCESS_BY_ID = "GET_ACCESS_BY_ID",
}

const actionCreator = actionCreatorFactory("ROLES");

export class RolesActions {
  static getList = actionCreator.async<Object, PagedResult<AdminRole>, Error>(ERoleActions.GET_LIST);
  static update = actionCreator.async<AdminRole, AdminRole, Error>(ERoleActions.UPDATE);
  static add = actionCreator.async<AdminRole, AdminRole, Error>(ERoleActions.ADD);
  static delete = actionCreator.async<string, void, Error>(ERoleActions.DELETE);
  static getById = actionCreator.async<string, AdminRole, Error>(ERoleActions.GET_BY_ID);
  static getEmpty = actionCreator.async<null, AdminRole, Error>(ERoleActions.GET_EMPTY);
  static getAccessLevel = actionCreator.async<null, AccessLevelMap, Error>(ERoleActions.GET_ACCESS_LEVEL);
  static getAll = actionCreator.async<null, EntityDto[], Error>(ERoleActions.GET_All);
  static getAccessById = actionCreator.async<string[], AccessLevelMap, Error>(ERoleActions.GET_ACCESS_BY_ID);
}
