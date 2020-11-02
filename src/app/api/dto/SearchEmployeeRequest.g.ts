/*tslint:disable*/
import {SortParamDto} from "./SortParamDto.g";
import {Paged} from "./Paged.g";

export interface SearchEmployeeRequest {
    name: string;
    role: string;
    phone: string;
    sortParamDto: SortParamDto;
    paged: Paged;
}