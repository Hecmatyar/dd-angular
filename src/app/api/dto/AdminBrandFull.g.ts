/*tslint:disable*/
import {BrandType} from "./BrandType.g";
import {CommentDto} from "./CommentDto.g";
import {EntityDto} from "./EntityDto.g";

export interface AdminBrandFull {
    id: string;
    name: string;
    image: string;
    type: BrandType;
    commissionBuy: number;
    commissionBulkBuy: number;
    commissionSell: number;
    maxAmount: number;
    url: string;
    phone: string;
    numberLength: number;
    pinCodeLength: number;
    comment: CommentDto;
    categories: EntityDto[];
    relatedBrands: EntityDto[];
}