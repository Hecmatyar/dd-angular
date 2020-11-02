import {BaseState} from "../../../core/interfaces/base/base-state";
import {EntityDto} from "../../../api/dto/EntityDto.g";

export interface IVendorsState extends BaseState {
  notBannedVendorList: EntityDto[];
  isCreateBulkOrder: boolean;
}

export const initialVendorsState: IVendorsState = {
  isLoading: true,
  isCreateBulkOrder: false,
  notBannedVendorList: [],
};
