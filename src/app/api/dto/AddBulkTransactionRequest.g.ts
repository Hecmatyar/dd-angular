/*tslint:disable*/
import {AdminTransactionType} from "./AdminTransactionType.g";

export interface AddBulkTransactionRequest {
    vendorId: string;
    orderNumber: number;
    transactionType: AdminTransactionType;
}