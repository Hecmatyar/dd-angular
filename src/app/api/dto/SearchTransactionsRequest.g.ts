/*tslint:disable*/
import {Paged} from "./Paged.g";
import {SortParamDto} from "./SortParamDto.g";
import {TransactionStatus} from "./TransactionStatus.g";

export interface SearchTransactionsRequest {
    paged: Paged;
    sortParamDto: SortParamDto;
    status: TransactionStatus | null;
    dateFrom: Date | string | null;
    dateTo: Date | string | null;
    orderNumber: string;
    transactionNumber: string;
}