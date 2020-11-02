/*tslint:disable*/
import {SellCardStatus} from "./SellCardStatus.g";

export interface AdminSetCardStatus {
    cardId: string;
    status: SellCardStatus;
}