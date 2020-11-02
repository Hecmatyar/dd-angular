/*tslint:disable*/
import {AdminTransactionType} from "./AdminTransactionType.g";

export interface AddPartnersTransactionRequest {
    vendorId: string;
    orderNumber: number;
    transactionType: AdminTransactionType;
    debtCardIds: string[];
}