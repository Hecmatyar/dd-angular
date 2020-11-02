import actionCreatorFactory from "typescript-fsa";
import {GetCardsAnalyticRequest} from "../../core/interfaces/requests/get-cards-analytic-request";
import {AdminAnalyticsCardsDto} from "../../api/dto/AdminAnalyticsCardsDto.g";
import {GetBrandsAnalyticRequest} from "../../core/interfaces/requests/get-brands-analytic-request";
import {PagedResult} from "../../api/dto/PagedResult.g";
import {AdminAnalyticsBrandDto} from "../../api/dto/AdminAnalyticsBrandDto.g";
import {GetValuesAnalyticRequest} from "../../core/interfaces/requests/get-values-analytic-request";
import {GetOverviewAnalyticRequest} from "../../core/interfaces/requests/get-overview-analytic-request";
import {GetPartnersAnalyticRequest} from "../../core/interfaces/requests/get-partners-analytic-request";
import {AdminAnalyticsValueDto} from "../../api/dto/AdminAnalyticsValueDto.g";
import {AdminAnalyticOverviewDto} from "../../api/dto/AdminAnalyticOverviewDto.g";
import {AdminAnalyticPartnerDto} from "../../api/dto/AdminAnalyticPartnerDto.g";

export enum EAnalyticsActions {
  GET_CARDS = "GET_CARDS",
  GET_BRANDS = "GET_BRANDS",
  GET_VALUES = "GET_VALUES",
  GET_OVERVIEW = "GET_OVERVIEW",
  GET_PARTNERS = "GET_PARTNERS",
  IN_RANGE = "IN_RANGE"
}

const actionCreator = actionCreatorFactory("ANALYTICS");

export class AnalyticsAction {
  static getOverview = actionCreator.async<GetOverviewAnalyticRequest, AdminAnalyticOverviewDto, Error>(EAnalyticsActions.GET_OVERVIEW);
  static getCards = actionCreator.async<GetCardsAnalyticRequest, AdminAnalyticsCardsDto, Error>(EAnalyticsActions.GET_CARDS);
  static getBrands = actionCreator.async<GetBrandsAnalyticRequest, PagedResult<AdminAnalyticsBrandDto>, Error>(EAnalyticsActions.GET_BRANDS);
  static getValues = actionCreator.async<GetValuesAnalyticRequest, PagedResult<AdminAnalyticsValueDto>, Error>(EAnalyticsActions.GET_VALUES);
  static getPartners = actionCreator.async<GetPartnersAnalyticRequest, PagedResult<AdminAnalyticPartnerDto>, Error>(EAnalyticsActions.GET_PARTNERS);
  static getInRange = actionCreator.async<number, boolean, Error>(EAnalyticsActions.IN_RANGE);
}
