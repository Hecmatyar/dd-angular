/*tslint:disable*/
import {EntityDto} from "./EntityDto.g";

export interface AdminDebtCard {
    id: string;
    brand: EntityDto;
    number: string;
    pinCode: string;
    expiration: Date | string | null;
    amount: number;
    buyPercent: number;
    buyPrice: number;
    orderDate: Date | string;
}