/*tslint:disable*/
import {Paged} from "./Paged.g";
import {SortParamDto} from "./SortParamDto.g";

export interface AdminMobileUsersRequest {
    paged: Paged;
    sortParamDto: SortParamDto;
    search: string;
}