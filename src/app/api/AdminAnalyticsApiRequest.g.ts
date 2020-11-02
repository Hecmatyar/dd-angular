/*tslint:disable*/
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {BaseRequest} from './BaseRequest';
import {AdminAnalyticsCardsDto} from './dto/AdminAnalyticsCardsDto.g';
import {ServicePart} from './dto/ServicePart.g';
import {Paged} from './dto/Paged.g';
import {SortParamDto} from './dto/SortParamDto.g';
import {AdminAnalyticsBrandDto} from './dto/AdminAnalyticsBrandDto.g';
import {PagedResult} from './dto/PagedResult.g';
import {AdminAnalyticsValueDto} from './dto/AdminAnalyticsValueDto.g';
import {Range} from './dto/Range.g';
import {AdminAnalyticOverviewDto} from './dto/AdminAnalyticOverviewDto.g';
import {AdminAnalyticPartnerDto} from './dto/AdminAnalyticPartnerDto.g';

@Injectable()
export class AdminAnalyticsApiRequest extends BaseRequest {

  constructor(http: HttpClient) {
    super(http);
  }

  getByCards(brandId: string | null, dateFrom: Date | string | null, dateTo: Date | string | null): Promise<AdminAnalyticsCardsDto> {
    const p: { [key: string]: string | number | boolean | Date | string[] | Paged | SortParamDto } = { };
    p["brandId"] = brandId;
    p["dateFrom"] = dateFrom;
    p["dateTo"] = dateTo;
    const requestObj = new HttpRequest('GET', `api/admin/analytics/getByCards${this.q(p)}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getByBrands(brandName: string, dateFrom: Date | string | null, dateTo: Date | string | null, servicePart: ServicePart | null, paged: Paged, sortParamDto: SortParamDto): Promise<PagedResult<AdminAnalyticsBrandDto>> {
    const p: { [key: string]: string | number | boolean | Date | string[] | Paged | SortParamDto } = { };
    p["brandName"] = brandName;
    p["dateFrom"] = dateFrom;
    p["dateTo"] = dateTo;
    p["servicePart"] = servicePart;
    p["paged"] = paged;
    p["sortParamDto"] = sortParamDto;
    const requestObj = new HttpRequest('GET', `api/admin/analytics/getByBrands${this.q(p)}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getByValues(brandId: string | null, dateFrom: Date | string | null, dateTo: Date | string | null, paged: Paged, sortParamDto: SortParamDto, fromValue: number, toValue: number): Promise<PagedResult<AdminAnalyticsValueDto>> {
    const p: { [key: string]: string | number | boolean | Date | string[] | Paged | SortParamDto } = { };
    p["brandId"] = brandId;
    p["dateFrom"] = dateFrom;
    p["dateTo"] = dateTo;
    p["paged"] = paged;
    p["sortParamDto"] = sortParamDto;
    p["fromValue"] = fromValue;
    p["toValue"] = toValue;
    const requestObj = new HttpRequest('GET', `api/admin/analytics/getByValues${this.q(p)}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getFilterDataForValuesReport(): Promise<Range> {
    const requestObj = new HttpRequest('GET', `api/admin/analytics/getFilterDataForValuesReport`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getOverview(dateFrom: Date | string | null, dateTo: Date | string | null): Promise<AdminAnalyticOverviewDto> {
    const p: { [key: string]: string | number | boolean | Date | string[] | Paged | SortParamDto } = { };
    p["dateFrom"] = dateFrom;
    p["dateTo"] = dateTo;
    const requestObj = new HttpRequest('GET', `api/admin/analytics/getOverview${this.q(p)}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getByPartners(dateFrom: Date | string | null, dateTo: Date | string | null, partnerId: string | null, paged: Paged, sortParam: SortParamDto): Promise<PagedResult<AdminAnalyticPartnerDto>> {
    const p: { [key: string]: string | number | boolean | Date | string[] | Paged | SortParamDto } = { };
    p["dateFrom"] = dateFrom;
    p["dateTo"] = dateTo;
    p["partnerId"] = partnerId;
    p["paged"] = paged;
    p["sortParam"] = sortParam;
    const requestObj = new HttpRequest('GET', `api/admin/analytics/getByPartners${this.q(p)}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

}