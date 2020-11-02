import {BaseState} from "../../../core/interfaces/base/base-state";
import {AdminMobileUserItem} from "../../../api/dto/AdminMobileUserItem.g";
import {AdminMobileUsersRequest} from "../../../api/dto/AdminMobileUsersRequest.g";
import {AdminMobileUserFull} from "../../../api/dto/AdminMobileUserFull.g";
import {ContentLoading, initialContentLoading} from "../../../core/interfaces/content-loading";

export interface IMobileVendorsState extends BaseState {
  items: AdminMobileUserItem[];
  totalItems: number;
  filter: AdminMobileUsersRequest;
  vendor: ContentLoading<AdminMobileUserFull>;
}

export const initialMobileVendorsState: IMobileVendorsState = {
  filter: {
    paged: {
      page: 1,
      pageSize: 50
    }
  } as AdminMobileUsersRequest,
  isLoading: true,
  totalItems: 0,
  items: [],
  vendor: initialContentLoading,
};
