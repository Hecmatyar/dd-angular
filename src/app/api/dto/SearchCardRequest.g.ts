/*tslint:disable*/
import {Paged} from "./Paged.g";
import {SortParamDto} from "./SortParamDto.g";
import {SellCardStatus} from "./SellCardStatus.g";
import {SellCardType} from "./SellCardType.g";

export interface SearchCardRequest {
    paged: Paged;
    sortParamDto: SortParamDto;
    cardFilter: string;
    brandId: string | null;
    vendorId: string | null;
    buyerId: string | null;
    sellCardStatuses: SellCardStatus[];
    sellCardType: SellCardType | null;
    dateFrom: Date | string | null;
    dateTo: Date | string | null;
    orderNumber: string;
    cardNumber: string;
    value: number | null;
    transactionNumber: string;
}