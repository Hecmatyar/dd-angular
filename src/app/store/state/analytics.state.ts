import {BaseState} from "../../core/interfaces/base/base-state";
import {ContentLoading, initialContentLoading} from "../../core/interfaces/content-loading";
import {AdminAnalyticsBrandDto} from "../../api/dto/AdminAnalyticsBrandDto.g";
import {AdminAnalyticsValueDto} from "../../api/dto/AdminAnalyticsValueDto.g";
import {AdminAnalyticPartnerDto} from "../../api/dto/AdminAnalyticPartnerDto.g";
import {AdminAnalyticsCardsDto} from "../../api/dto/AdminAnalyticsCardsDto.g";
import {AdminAnalyticOverviewDto} from "../../api/dto/AdminAnalyticOverviewDto.g";
import {GetCardsAnalyticRequest} from "../../core/interfaces/requests/get-cards-analytic-request";
import {GetBrandsAnalyticRequest} from "../../core/interfaces/requests/get-brands-analytic-request";
import {GetValuesAnalyticRequest} from "../../core/interfaces/requests/get-values-analytic-request";
import {GetOverviewAnalyticRequest} from "../../core/interfaces/requests/get-overview-analytic-request";
import {GetPartnersAnalyticRequest} from "../../core/interfaces/requests/get-partners-analytic-request";

export interface IAnalyticsState extends BaseState {
  brandsItems: AdminAnalyticsBrandDto[];
  valuesItems: AdminAnalyticsValueDto[];
  partnersItems: AdminAnalyticPartnerDto[];
  totalItems: number;
  cards: ContentLoading<AdminAnalyticsCardsDto>;
  overview: ContentLoading<AdminAnalyticOverviewDto>;
  filterCards: GetCardsAnalyticRequest;
  filterPartners: GetPartnersAnalyticRequest;
  filterOverview: GetOverviewAnalyticRequest;
  filterValues: GetValuesAnalyticRequest;
  filterBrands: GetBrandsAnalyticRequest;
}

const defaultFilter = {
  paged: {
    page: 1,
    pageSize: 50
  }
};

export const initialAnalyticsState: IAnalyticsState = {
  filterBrands: {...defaultFilter} as GetBrandsAnalyticRequest,
  filterValues: {...defaultFilter} as GetValuesAnalyticRequest,
  filterPartners: {...defaultFilter} as GetPartnersAnalyticRequest,
  filterCards: {} as GetCardsAnalyticRequest,
  filterOverview: {} as GetOverviewAnalyticRequest,
  isLoading: true,
  totalItems: 0,
  brandsItems: [],
  valuesItems: [],
  partnersItems: [],
  cards: initialContentLoading,
  overview: initialContentLoading
};
