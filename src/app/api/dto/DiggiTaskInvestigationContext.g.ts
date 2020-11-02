/*tslint:disable*/
import {DiggiTaskCardInfoContext} from "./DiggiTaskCardInfoContext.g";

export interface DiggiTaskInvestigationContext extends DiggiTaskCardInfoContext {
    title: string;
    text: string;
    email: string;
    name: string;
    buyerId: string;
    sellerId: string;
}