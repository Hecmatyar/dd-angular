import {BaseState} from "../../../core/interfaces/base/base-state";
import {AdminMobileOrderDto} from "../../../api/dto/AdminMobileOrderDto.g";
import {SearchAdminMobileOrderRequest} from "../../../api/dto/SearchAdminMobileOrderRequest.g";

export interface IMobileOrdersState extends BaseState {
  items: AdminMobileOrderDto[];
  totalItems: number;
  filter: SearchAdminMobileOrderRequest;
}

export const initialMobileOrdersState: IMobileOrdersState = {
  filter: {
    paged: {
      page: 1,
      pageSize: 50
    }
  } as SearchAdminMobileOrderRequest,
  isLoading: true,
  totalItems: 0,
  items: []
};
