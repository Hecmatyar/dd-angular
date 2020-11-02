/*tslint:disable*/
import {BrandType} from "./BrandType.g";
import {CommentDto} from "./CommentDto.g";
import {EntityDto} from "./EntityDto.g";

export interface AdminBrandShort {
    id: string;
    name: string;
    commissionBulkBuy: number;
    commissionBuy: number;
    commissionSell: number;
    activeCardsCount: number;
    topCommissionSell: number | null;
    url: string;
    phone: string;
    type: BrandType;
    comment: CommentDto;
    relatedBrands: EntityDto[];
    categories: EntityDto[];
    canBuyCard: boolean;
}