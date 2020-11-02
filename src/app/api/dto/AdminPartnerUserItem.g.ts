/*tslint:disable*/
import {UserType} from "./UserType.g";
import {PersonalIdType} from "./PersonalIdType.g";
import {CommentDto} from "./CommentDto.g";
import {AdminPartnerUserItemDetail} from "./AdminPartnerUserItemDetail.g";

export interface AdminPartnerUserItem {
    id: string;
    type: UserType;
    banned: boolean;
    idType: PersonalIdType | null;
    personalId: string;
    deniedPercent: number;
    rejectedCount: number;
    reliabilityPercent: number;
    debt: number;
    hold: number;
    salesCount: number;
    salesSum: number;
    fullName: string;
    company: string;
    comment: CommentDto;
    detail: AdminPartnerUserItemDetail;
}