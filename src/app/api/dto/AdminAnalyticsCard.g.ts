/*tslint:disable*/
import {SellCardStatus} from "./SellCardStatus.g";

export interface AdminAnalyticsCard {
    status: SellCardStatus;
    count: number;
    amount: number;
}