import {BaseState} from "../../../core/interfaces/base/base-state";
import {AdminPartnerUsersRequest} from "../../../api/dto/AdminPartnerUsersRequest.g";
import {AdminPartnerUserItem} from "../../../api/dto/AdminPartnerUserItem.g";
import {AdminPartnerUserFull} from "../../../api/dto/AdminPartnerUserFull.g";
import {ContentLoading, initialContentLoading} from "../../../core/interfaces/content-loading";

export interface IPartnersVendorsState extends BaseState {
  items: AdminPartnerUserItem[];
  totalItems: number;
  filter: AdminPartnerUsersRequest;
  vendor: ContentLoading<AdminPartnerUserFull>;
}

export const initialPartnersVendorsState: IPartnersVendorsState = {
  filter: {
    paged: {
      page: 1,
      pageSize: 50
    }
  } as AdminPartnerUsersRequest,
  isLoading: true,
  totalItems: 0,
  items: [],
  vendor: initialContentLoading,
};
