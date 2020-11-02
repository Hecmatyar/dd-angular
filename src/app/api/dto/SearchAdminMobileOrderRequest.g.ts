/*tslint:disable*/
import {OrderStatus} from "./OrderStatus.g";
import {Paged} from "./Paged.g";
import {SortParamDto} from "./SortParamDto.g";

export interface SearchAdminMobileOrderRequest {
    status: OrderStatus | null;
    dateFrom: Date | string | null;
    dateTo: Date | string | null;
    number: number | null;
    buyerId: string | null;
    vendorId: string | null;
    paged: Paged;
    sortParamDto: SortParamDto;
}