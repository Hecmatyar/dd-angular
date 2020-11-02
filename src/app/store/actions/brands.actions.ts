import actionCreatorFactory from "typescript-fsa";
import {PagedResult} from "../../api/dto/PagedResult.g";
import {AdminBrandFull} from "../../api/dto/AdminBrandFull.g";
import {SearchBrandRequest} from "../../api/dto/SearchBrandRequest.g";
import {AdminBrandShort} from "../../api/dto/AdminBrandShort.g";
import {EntityDto} from "../../api/dto/EntityDto.g";
import {UpdateBrandRequest} from "../../core/interfaces/requests/update-brand-request";
import {SetBrandTopRequest} from "../../api/dto/SetBrandTopRequest.g";
import {SetBuyAbilityRequest} from "../../api/dto/SetBuyAbilityRequest.g";
import {AddBrandRequest} from "../../core/interfaces/requests/add-brand-request";

export enum EBrandsActions {
  GET_LIST = "GET_LIST",
  GET_BY_ID = "GET_BY_ID",
  GET_ALL = "GET_ALL",
  ADD = "ADD",
  UPDATE = "UPDATE",
  SET_TOP_COMMISSION = "SET_TOP_COMMISSION",
  SET_ABILITY = "SET_ABILITY"
}

const actionCreator = actionCreatorFactory("BRANDS");

export class BrandsActions {
  static getList = actionCreator.async<SearchBrandRequest, PagedResult<AdminBrandShort>, Error>(EBrandsActions.GET_LIST);
  static getById = actionCreator.async<string, AdminBrandFull, Error>(EBrandsActions.GET_BY_ID);
  static getAll = actionCreator.async<null, EntityDto[], Error>(EBrandsActions.GET_ALL);
  static add = actionCreator.async<AddBrandRequest, AdminBrandFull, Error>(EBrandsActions.ADD);
  static update = actionCreator.async<UpdateBrandRequest, AdminBrandFull, Error>(EBrandsActions.UPDATE);
  static setTopCommission = actionCreator.async<SetBrandTopRequest, AdminBrandShort, Error>(EBrandsActions.SET_TOP_COMMISSION);
  static setAbility = actionCreator.async<SetBuyAbilityRequest, AdminBrandShort, Error>(EBrandsActions.SET_ABILITY);
}
