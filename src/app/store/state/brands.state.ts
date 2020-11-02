import {BaseState} from "../../core/interfaces/base/base-state";
import {ContentLoading, initialContentLoading} from "../../core/interfaces/content-loading";
import {AdminBrandFull} from "../../api/dto/AdminBrandFull.g";
import {SearchBrandRequest} from "../../api/dto/SearchBrandRequest.g";
import {AdminBrandShort} from "../../api/dto/AdminBrandShort.g";
import {EntityDto} from "../../api/dto/EntityDto.g";

export interface IBrandsState extends BaseState {
  items: AdminBrandShort[];
  totalItems: number;
  filter: SearchBrandRequest;
  brand: ContentLoading<AdminBrandFull>;
  brands: ContentLoading<EntityDto[]>;
}

export const initialBrandsState: IBrandsState = {
  filter: {
    paged: {
      page: 1,
      pageSize: 50
    }
  } as SearchBrandRequest,
  isLoading: true,
  totalItems: 0,
  items: [],
  brand: initialContentLoading,
  brands: initialContentLoading
};
