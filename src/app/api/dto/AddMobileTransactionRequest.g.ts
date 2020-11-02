/*tslint:disable*/
import {AdminTransactionType} from "./AdminTransactionType.g";

export interface AddMobileTransactionRequest {
    telephone: string;
    orderNumber: number | null;
    transactionType: AdminTransactionType;
    value: number;
}