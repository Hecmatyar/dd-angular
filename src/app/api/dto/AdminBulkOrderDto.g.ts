/*tslint:disable*/
import {OrderStatus} from "./OrderStatus.g";
import {EntityDto} from "./EntityDto.g";
import {CommentDto} from "./CommentDto.g";
import {AdminBulkOrderDetail} from "./AdminBulkOrderDetail.g";

export interface AdminBulkOrderDto {
    id: string;
    date: Date | string;
    number: number;
    status: OrderStatus;
    paymentType: string;
    buyer: EntityDto;
    value: number;
    current: number;
    payOut: number;
    paid: number;
    availableTransitions: OrderStatus[];
    comment: CommentDto;
    detail: AdminBulkOrderDetail;
}