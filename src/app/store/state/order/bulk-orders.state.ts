import {BaseState} from "../../../core/interfaces/base/base-state";
import {AdminBulkOrderDto} from "../../../api/dto/AdminBulkOrderDto.g";
import {SearchAdminBulkOrderRequest} from "../../../api/dto/SearchAdminBulkOrderRequest.g";

export interface IBulkOrdersState extends BaseState {
  items: AdminBulkOrderDto[];
  totalItems: number;
  filter: SearchAdminBulkOrderRequest;
}

export const initialBulkOrdersState: IBulkOrdersState = {
  filter: {
    paged: {
      page: 1,
      pageSize: 50
    }
  } as SearchAdminBulkOrderRequest,
  isLoading: true,
  totalItems: 0,
  items: []
};
