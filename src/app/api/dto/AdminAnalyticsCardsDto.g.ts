/*tslint:disable*/
import {AdminAnalyticsCardsPartnerDto} from "./AdminAnalyticsCardsPartnerDto.g";

export interface AdminAnalyticsCardsDto {
    partners: AdminAnalyticsCardsPartnerDto;
    users: AdminAnalyticsCardsPartnerDto;
    toBulk: AdminAnalyticsCardsPartnerDto;
    totalCard: number;
    totalAmount: number;
}