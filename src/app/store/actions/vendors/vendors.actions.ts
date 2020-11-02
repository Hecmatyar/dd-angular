import actionCreatorFactory from "typescript-fsa";
import {IEmpty} from "../../../core/interfaces/empty";
import {EntityDto} from "../../../api/dto/EntityDto.g";

export enum EVendorActions {
  GET_NOT_BANNED_VENDOR_LIST = "GET_VENDOR_LIST",
}

const actionCreator = actionCreatorFactory("VENDORS");

export class VendorsActions {
  static getNotBannedVendorList = actionCreator.async<IEmpty, EntityDto[], Error>(EVendorActions.GET_NOT_BANNED_VENDOR_LIST);
}
