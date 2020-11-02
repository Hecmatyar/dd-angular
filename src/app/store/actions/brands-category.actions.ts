import actionCreatorFactory from "typescript-fsa";
import {BrandCategory} from "../../api/dto/BrandCategory.g";

export enum EBrandsCategoryActions {
  GET_ALL = "GET_ALL",
}

const actionCreator = actionCreatorFactory("BRANDS_CATEGORY");

export class BrandsCategoryActions {
  static getAll = actionCreator.async<null, BrandCategory[], Error>(EBrandsCategoryActions.GET_ALL);
}
