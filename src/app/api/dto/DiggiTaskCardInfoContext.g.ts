/*tslint:disable*/
import {DiggiTaskAdditionalInfoContext} from "./DiggiTaskAdditionalInfoContext.g";

export interface DiggiTaskCardInfoContext extends DiggiTaskAdditionalInfoContext {
    cardNumber: string;
    cardPinCode: string;
    cardExpiration: Date | string | null;
    brand: string;
    brandPhoneNumber: string;
    brandUrl: string;
}