import {BaseState} from "../../../core/interfaces/base/base-state";
import {AdminPartnerOrderDto} from "../../../api/dto/AdminPartnerOrderDto.g";
import {SearchAdminPartnerOrderRequest} from "../../../api/dto/SearchAdminPartnerOrderRequest.g";

export interface IPartnerOrdersState extends BaseState {
  items: AdminPartnerOrderDto[];
  totalItems: number;
  filter: SearchAdminPartnerOrderRequest;
}

export const initialPartnerOrdersState: IPartnerOrdersState = {
  filter: {
    paged: {
      page: 1,
      pageSize: 50
    }
  } as SearchAdminPartnerOrderRequest,
  isLoading: true,
  totalItems: 0,
  items: []
};
