/*tslint:disable*/
import {OrderStatus} from "./OrderStatus.g";
import {EntityDto} from "./EntityDto.g";
import {CommentDto} from "./CommentDto.g";
import {AdminMobileOrderDetails} from "./AdminMobileOrderDetails.g";

export interface AdminMobileOrderDto {
    id: string;
    status: OrderStatus;
    date: Date | string;
    number: number;
    paymentType: string;
    buyer: EntityDto;
    vendor: EntityDto;
    value: number;
    payOut: number;
    paid: number;
    comment: CommentDto;
    details: AdminMobileOrderDetails;
    availableTransitions: OrderStatus[];
}