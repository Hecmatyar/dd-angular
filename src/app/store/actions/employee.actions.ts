import actionCreatorFactory from "typescript-fsa";
import {SearchEmployeeRequest} from "../../api/dto/SearchEmployeeRequest.g";
import {PagedResult} from "../../api/dto/PagedResult.g";
import {AdminShortEmployee} from "../../api/dto/AdminShortEmployee.g";
import {ManageEmployeeRequest} from "../../api/dto/ManageEmployeeRequest.g";
import {AdminEmployee} from "../../api/dto/AdminEmployee.g";

export enum EEmployeeActions {
  GET_LIST = "GET_LIST",
  ADD = "ADD",
  UPDATE = "UPDATE",
  GE_BY_ID = "GET_BY_ID",
  BAN = "BAN",
  UN_BAN = "UN_BAN",
}

const actionCreator = actionCreatorFactory("EMPLOYEE");

export class EmployeeActions {
  static getList = actionCreator.async<SearchEmployeeRequest, PagedResult<AdminShortEmployee>, Error>(EEmployeeActions.GET_LIST);
  static add = actionCreator.async<ManageEmployeeRequest, AdminEmployee, Error>(EEmployeeActions.ADD);
  static update = actionCreator.async<ManageEmployeeRequest, AdminEmployee, Error>(EEmployeeActions.UPDATE);
  static getById = actionCreator.async<string, AdminEmployee, Error>(EEmployeeActions.GE_BY_ID);
  static setBan = actionCreator.async<string, void, Error>(EEmployeeActions.BAN);
  static setUnBan = actionCreator.async<string, void, Error>(EEmployeeActions.UN_BAN);
}
