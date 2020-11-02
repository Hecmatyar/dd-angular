/*tslint:disable*/
import {OrderStatus} from "./OrderStatus.g";
import {Paged} from "./Paged.g";
import {SortParamDto} from "./SortParamDto.g";

export interface SearchAdminBulkOrderRequest {
    status: OrderStatus | null;
    dateFrom: Date | string | null;
    dateTo: Date | string | null;
    number: number | null;
    buyerId: string | null;
    paged: Paged;
    sortParamDto: SortParamDto;
    externalId: string;
}