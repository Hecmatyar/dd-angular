/*tslint:disable*/
import {AdminBulkCardInfoDto} from "./AdminBulkCardInfoDto.g";

export interface AdminBulkOrder {
    id: string;
    vendorName: string;
    vendorWarranty: number;
    cards: AdminBulkCardInfoDto[];
}