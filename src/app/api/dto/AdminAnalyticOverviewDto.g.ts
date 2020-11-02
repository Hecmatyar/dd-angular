/*tslint:disable*/
import {AdminAnalyticsOverviewTypeDto} from "./AdminAnalyticsOverviewTypeDto.g";
import {AdminAnalyticBonusOverviewItemDto} from "./AdminAnalyticBonusOverviewItemDto.g";

export interface AdminAnalyticOverviewDto {
    partners: AdminAnalyticsOverviewTypeDto;
    bulkSales: AdminAnalyticsOverviewTypeDto;
    users: AdminAnalyticsOverviewTypeDto;
    transactionTotal: AdminAnalyticsOverviewTypeDto;
    bonusOverviewItemsDto: AdminAnalyticBonusOverviewItemDto[];
}