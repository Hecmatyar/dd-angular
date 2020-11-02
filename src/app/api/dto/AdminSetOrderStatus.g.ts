/*tslint:disable*/
import {OrderStatus} from "./OrderStatus.g";

export interface AdminSetOrderStatus {
    orderId: string;
    status: OrderStatus;
}