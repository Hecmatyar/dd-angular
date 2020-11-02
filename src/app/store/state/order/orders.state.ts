import {BaseState} from "../../../core/interfaces/base/base-state";
import {AdminBulkOrder} from "../../../api/dto/AdminBulkOrder.g";
import {ContentLoading, initialContentLoading} from "../../../core/interfaces/content-loading";

export interface IOrdersState extends BaseState {
  order: ContentLoading<AdminBulkOrder>;
}

export const initialOrdersState: IOrdersState = {
  isLoading: false,
  order: initialContentLoading
};
