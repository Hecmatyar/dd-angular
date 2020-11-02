/*tslint:disable*/
import {TransactionStatus} from "./TransactionStatus.g";
import {AdminTransactionType} from "./AdminTransactionType.g";

export interface AdminSetTransactionStatus {
    id: string;
    newStatus: TransactionStatus;
    type: AdminTransactionType;
}