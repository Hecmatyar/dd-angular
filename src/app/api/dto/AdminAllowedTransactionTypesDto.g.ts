/*tslint:disable*/
import {AdminTransactionType} from "./AdminTransactionType.g";

export interface AdminAllowedTransactionTypesDto {
    mobile: AdminTransactionType[];
    bulk: AdminTransactionType[];
    partners: AdminTransactionType[];
}