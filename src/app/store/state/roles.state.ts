import {BaseState} from "../../core/interfaces/base/base-state";
import {AdminRole} from "../../api/dto/AdminRole.g";
import {Paged} from "../../api/dto/Paged.g";
import {AccessLevelMap} from "../../api/dto/AccessLevelMap.g";
import {ContentLoading, initialContentLoading} from "../../core/interfaces/content-loading";
import {EntityDto} from "../../api/dto/EntityDto.g";

export interface IRolesState extends BaseState {
  items: AdminRole[];
  totalItems: number;
  filter: SearchRolesRequest;
  role: ContentLoading<AdminRole>;
  accessLevelMap: ContentLoading<AccessLevelMap>;
  rolesAccessLevelMap: ContentLoading<AccessLevelMap>;
  roleList: EntityDto[];
}

export const initialRolesState: IRolesState = {
  items: [],
  filter: {
    paged: {
      page: 1,
      pageSize: 50
    },
    name: null,
  } as SearchRolesRequest,
  isLoading: true,
  totalItems: 0,
  role: initialContentLoading,
  accessLevelMap: initialContentLoading,
  rolesAccessLevelMap: initialContentLoading,
  roleList: [],
};

export interface SearchRolesRequest {
  paged: Paged;
  name: string;
}
