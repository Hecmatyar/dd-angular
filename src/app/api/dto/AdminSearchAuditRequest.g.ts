/*tslint:disable*/
import {SortParamDto} from "./SortParamDto.g";
import {Paged} from "./Paged.g";

export interface AdminSearchAuditRequest {
    entityName: string;
    entityId: string | null;
    dateFrom: Date | string | null;
    dateTo: Date | string | null;
    author: string;
    sortParamDto: SortParamDto;
    paged: Paged;
}