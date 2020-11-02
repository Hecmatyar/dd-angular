/*tslint:disable*/
import {BrandCommission} from "./BrandCommission.g";

export interface AdminUpdateVendorBrandCommissionSellRequest {
    vendorId: string;
    orderId: string;
    brandCommission: BrandCommission;
}