import {BaseState} from "../../core/interfaces/base/base-state";
import {ContentLoading, initialContentLoading} from "../../core/interfaces/content-loading";
import {BrandCategory} from "../../api/dto/BrandCategory.g";

export interface IBrandsCategoryState extends BaseState {
  items: BrandCategory[];
  totalItems: number;
  categories: ContentLoading<BrandCategory[]>;
}

export const initialBrandsCategoryState: IBrandsCategoryState = {
  isLoading: true,
  totalItems: 0,
  items: [],
  categories: initialContentLoading
};
