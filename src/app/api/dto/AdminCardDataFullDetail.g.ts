/*tslint:disable*/
import {SellCardType} from "./SellCardType.g";

export interface AdminCardDataFullDetail {
    type: SellCardType;
    buyPrice: number;
    sellPrice: number | null;
    profit: number | null;
    topCommissionSell: number | null;
}