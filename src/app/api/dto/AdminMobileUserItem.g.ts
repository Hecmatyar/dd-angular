/*tslint:disable*/
import {UserType} from "./UserType.g";
import {PersonalIdType} from "./PersonalIdType.g";
import {CommentDto} from "./CommentDto.g";
import {AdminMobileUserItemDetail} from "./AdminMobileUserItemDetail.g";

export interface AdminMobileUserItem {
    id: string;
    type: UserType;
    deniedPercent: number;
    rejectedCount: number;
    reliabilityPercent: number;
    purchasesCount: number;
    salesCount: number;
    purchasesSum: number;
    salesSum: number;
    idType: PersonalIdType | null;
    personalId: string;
    banned: boolean;
    fullName: string;
    comment: CommentDto;
    detail: AdminMobileUserItemDetail;
}
