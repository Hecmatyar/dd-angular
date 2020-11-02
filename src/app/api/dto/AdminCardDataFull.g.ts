/*tslint:disable*/
import {SellCardStatus} from "./SellCardStatus.g";
import {AdminCardDataFullDetail} from "./AdminCardDataFullDetail.g";
import {CommentDto} from "./CommentDto.g";

export interface AdminCardDataFull {
    id: string;
    status: SellCardStatus;
    brandId: string;
    brandName: string;
    value: number;
    currentAmount: number;
    createdUtc: Date | string;
    number: string;
    pinCode: string;
    expiration: Date | string | null;
    vendorId: string;
    vendorName: string;
    buyerId: string | null;
    buyerName: string;
    orderNumber: number | null;
    bonusTransactionsNumber: number | null;
    financeTransactionsNumber: number | null;
    detail: AdminCardDataFullDetail;
    comment: CommentDto;
    availableTransitions: SellCardStatus[];
}