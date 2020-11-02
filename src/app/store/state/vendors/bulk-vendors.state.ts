import {BaseState} from "../../../core/interfaces/base/base-state";
import {AdminBulkUsersRequest} from "../../../api/dto/AdminBulkUsersRequest.g";
import {AdminBulkUserItem} from "../../../api/dto/AdminBulkUserItem.g";
import {AdminBulkUserFull} from "../../../api/dto/AdminBulkUserFull.g";
import {ContentLoading, initialContentLoading} from "../../../core/interfaces/content-loading";

export interface IBulkVendorsState extends BaseState {
  items: AdminBulkUserItem[];
  totalItems: number;
  filter: AdminBulkUsersRequest;
  vendor: ContentLoading<AdminBulkUserFull>;
}

export const initialBulkVendorsState: IBulkVendorsState = {
  filter: {
    paged: {
      page: 1,
      pageSize: 50
    }
  } as AdminBulkUsersRequest,
  isLoading: true,
  totalItems: 0,
  items: [],
  vendor: initialContentLoading,
};
