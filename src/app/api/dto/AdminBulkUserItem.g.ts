/*tslint:disable*/
import {CommentDto} from "./CommentDto.g";
import {AdminBulkUserItemDetail} from "./AdminBulkUserItemDetail.g";

export interface AdminBulkUserItem {
    id: string;
    banned: boolean;
    deniedPercent: number;
    rejectedCount: number;
    reliabilityPercent: number;
    debt: number;
    purchasesCount: number;
    purchasesSum: number;
    guaranteeDays: number;
    fullName: string;
    company: string;
    comment: CommentDto;
    detail: AdminBulkUserItemDetail;
}