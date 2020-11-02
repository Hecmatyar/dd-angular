/*tslint:disable*/
import {AdminAnalyticDebitOverviewDto} from "./AdminAnalyticDebitOverviewDto.g";
import {AdminAnalyticCreditOverviewDto} from "./AdminAnalyticCreditOverviewDto.g";

export interface AdminAnalyticsOverviewTypeDto {
    debitOverview: AdminAnalyticDebitOverviewDto;
    creditOverview: AdminAnalyticCreditOverviewDto;
}