/*tslint:disable*/
import {TransactionType} from "./TransactionType.g";
import {AdminTransactionType} from "./AdminTransactionType.g";
import {TransactionStatus} from "./TransactionStatus.g";
import {OrderType} from "./OrderType.g";
import {CommentDto} from "./CommentDto.g";

export interface AdminTransactionsFull {
    id: string;
    transactionType: TransactionType;
    type: string;
    adminTransactionType: AdminTransactionType;
    status: TransactionStatus;
    date: Date | string;
    transactionNumber: string;
    orderNumber: number | null;
    orderType: OrderType;
    paymentMethod: string;
    value: number;
    comment: CommentDto;
    availableTransitions: TransactionStatus[];
}