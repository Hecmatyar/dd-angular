/*tslint:disable*/
import {OrderStatus} from "./OrderStatus.g";
import {EntityDto} from "./EntityDto.g";
import {CommentDto} from "./CommentDto.g";
import {AdminPartnerOrderDetail} from "./AdminPartnerOrderDetail.g";

export interface AdminPartnerOrderDto {
    id: string;
    status: OrderStatus;
    date: Date | string;
    number: number;
    paymentType: string;
    vendor: EntityDto;
    value: number;
    current: number;
    paid: number;
    payOut: number;
    availableTransitions: OrderStatus[];
    comment: CommentDto;
    detail: AdminPartnerOrderDetail;
}