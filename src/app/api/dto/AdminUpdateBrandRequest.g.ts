/*tslint:disable*/
import {BrandType} from "./BrandType.g";
import {EntityDto} from "./EntityDto.g";

export interface AdminUpdateBrandRequest {
    id: string;
    name: string;
    type: BrandType;
    commissionBuy: number;
    commissionBulkBuy: number;
    commissionSell: number;
    maxAmount: number;
    url: string;
    phone: string;
    numberLength: number;
    pinCodeLength: number;
    comment: string;
    categories: EntityDto[];
    relatedBrands: EntityDto[];
}