/*tslint:disable*/
import {EntityDto} from "./EntityDto.g";

export interface PartnerImportedCard {
    brand: EntityDto;
    number: string;
    pinCode: string;
    expiration: Date | string | null;
    amount: number;
    percent: number;
    payOut: number;
    isValid: boolean;
}