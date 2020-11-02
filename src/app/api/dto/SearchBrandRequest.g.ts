/*tslint:disable*/
import {Paged} from "./Paged.g";
import {SortParamDto} from "./SortParamDto.g";
import {BrandType} from "./BrandType.g";

export interface SearchBrandRequest {
    paged: Paged;
    sortParams: SortParamDto[];
    search: string | null;
    brandName: string | null;
    categoryFilter: string | null;
    type: BrandType | null;
}