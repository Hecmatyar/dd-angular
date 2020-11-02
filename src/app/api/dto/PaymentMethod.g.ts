/*tslint:disable*/
import {PaymentType} from "./PaymentType.g";

export interface PaymentMethod {
    id: string;
    name: string;
    email: string;
    type: PaymentType;
    expirationDate: Date | string | null;
    cardNumber: string;
    accountNumber: string;
    routingNumber: string;
}