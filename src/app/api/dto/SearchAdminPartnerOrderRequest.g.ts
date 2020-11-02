/*tslint:disable*/
import {OrderStatus} from "./OrderStatus.g";
import {Paged} from "./Paged.g";
import {SortParamDto} from "./SortParamDto.g";

export interface SearchAdminPartnerOrderRequest {
    status: OrderStatus | null;
    dateFrom: Date | string | null;
    dateTo: Date | string | null;
    number: number | null;
    vendorId: string | null;
    paged: Paged;
    sortParamDto: SortParamDto;
}