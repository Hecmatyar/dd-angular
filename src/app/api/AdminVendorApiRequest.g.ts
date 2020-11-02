/*tslint:disable*/
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {BaseRequest} from './BaseRequest';
import {AdminMobileUsersRequest} from './dto/AdminMobileUsersRequest.g';
import {AdminMobileUserItem} from './dto/AdminMobileUserItem.g';
import {PagedResult} from './dto/PagedResult.g';
import {AdminMobileUserFull} from './dto/AdminMobileUserFull.g';
import {AdminBulkUsersRequest} from './dto/AdminBulkUsersRequest.g';
import {AdminBulkUserItem} from './dto/AdminBulkUserItem.g';
import {EntityDto} from './dto/EntityDto.g';
import {AdminBulkUserFull} from './dto/AdminBulkUserFull.g';
import {AdminAddBulkRequest} from './dto/AdminAddBulkRequest.g';
import {AdminPartnerUsersRequest} from './dto/AdminPartnerUsersRequest.g';
import {AdminPartnerUserItem} from './dto/AdminPartnerUserItem.g';
import {AdminPartnerUserFull} from './dto/AdminPartnerUserFull.g';
import {AdminAddPartnerRequest} from './dto/AdminAddPartnerRequest.g';
import {SetCommentRequest} from './dto/SetCommentRequest.g';
import {CommentDto} from './dto/CommentDto.g';

@Injectable()
export class AdminVendorApiRequest extends BaseRequest {

  constructor(http: HttpClient) {
    super(http);
  }

  searchMobile(request: AdminMobileUsersRequest): Promise<PagedResult<AdminMobileUserItem>> {
    const requestObj = new HttpRequest('POST', `api/admin/vendor/Mobile/Search`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getMobileById(id: string): Promise<AdminMobileUserFull> {
    const requestObj = new HttpRequest('GET', `api/admin/vendor/Mobile/${id}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  updateMobile(request: AdminMobileUserFull, w9: File): Promise<AdminMobileUserFull> {
        const body = new FormData();
    body.append('w9',  w9);
    body.append('request',  JSON.stringify(request));
    const requestObj = new HttpRequest('PUT', `api/admin/vendor/Mobile/Update`, body, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  searchBulk(request: AdminBulkUsersRequest): Promise<PagedResult<AdminBulkUserItem>> {
    const requestObj = new HttpRequest('POST', `api/admin/vendor/Bulk/Search`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getNotBannedBulkSellers(): Promise<EntityDto[]> {
    const requestObj = new HttpRequest('GET', `api/admin/vendor/Bulk/GetNotBanned`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getBulkById(id: string): Promise<AdminBulkUserFull> {
    const requestObj = new HttpRequest('GET', `api/admin/vendor/Bulk/${id}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  updateBulk(request: AdminBulkUserFull, w9: File): Promise<AdminBulkUserFull> {
        const body = new FormData();
    body.append('w9',  w9);
    body.append('request',  JSON.stringify(request));
    const requestObj = new HttpRequest('PUT', `api/admin/vendor/Bulk/Update`, body, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  updateSellCommission(bulkBuyerId: string, csv: File): Promise<void> {
        const body = new FormData();
    body.append('csv',  csv);
    const requestObj = new HttpRequest('PUT', `api/admin/vendor/Bulk/UpdateSellCommission/${bulkBuyerId}`, body, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  addBulk(request: AdminAddBulkRequest, w9: File): Promise<AdminBulkUserFull> {
        const body = new FormData();
    body.append('w9',  w9);
    body.append('request',  JSON.stringify(request));
    const requestObj = new HttpRequest('POST', `api/admin/vendor/Bulk/Add`, body, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  searchPartner(request: AdminPartnerUsersRequest): Promise<PagedResult<AdminPartnerUserItem>> {
    const requestObj = new HttpRequest('POST', `api/admin/vendor/Partner/Search`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getPartnerById(id: string): Promise<AdminPartnerUserFull> {
    const requestObj = new HttpRequest('GET', `api/admin/vendor/Partner/${id}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  updatePartner(request: AdminPartnerUserFull, w9: File): Promise<AdminPartnerUserFull> {
        const body = new FormData();
    body.append('w9',  w9);
    body.append('request',  JSON.stringify(request));
    const requestObj = new HttpRequest('PUT', `api/admin/vendor/Partner/Update`, body, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  addPartner(request: AdminAddPartnerRequest, w9: File): Promise<AdminPartnerUserFull> {
        const body = new FormData();
    body.append('w9',  w9);
    body.append('request',  JSON.stringify(request));
    const requestObj = new HttpRequest('POST', `api/admin/vendor/Partner/Add`, body, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  banMobileUser(id: string): Promise<void> {
    const requestObj = new HttpRequest('POST', `api/admin/vendor/Mobile/ban/${id}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  unBanMobileUser(id: string): Promise<void> {
    const requestObj = new HttpRequest('POST', `api/admin/vendor/Mobile/unban/${id}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  banBulkUser(id: string): Promise<void> {
    const requestObj = new HttpRequest('POST', `api/admin/vendor/Bulk/ban/${id}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  unBanBulkUser(id: string): Promise<void> {
    const requestObj = new HttpRequest('POST', `api/admin/vendor/Bulk/unban/${id}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  banPartnerUser(id: string): Promise<void> {
    const requestObj = new HttpRequest('POST', `api/admin/vendor/Partner/ban/${id}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  unBanPartnerUser(id: string): Promise<void> {
    const requestObj = new HttpRequest('POST', `api/admin/vendor/Partner/unban/${id}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  autoCompleteVendors(startWith: string, count: number): Promise<EntityDto[]> {
    const p: { [key: string]: string | number | boolean | Date } = { };
    p["startWith"] = startWith;
    p["count"] = count;
    const requestObj = new HttpRequest('GET', `api/admin/vendor/autoComplete${this.q(p)}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  autoCompleteBulkSellers(startWith: string, count: number): Promise<EntityDto[]> {
    const p: { [key: string]: string | number | boolean | Date } = { };
    p["startWith"] = startWith;
    p["count"] = count;
    const requestObj = new HttpRequest('GET', `api/admin/vendor/autoCompleteBulkSellers${this.q(p)}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  autoCompletePartners(startWith: string, count: number): Promise<EntityDto[]> {
    const p: { [key: string]: string | number | boolean | Date } = { };
    p["startWith"] = startWith;
    p["count"] = count;
    const requestObj = new HttpRequest('GET', `api/admin/vendor/autoCompletePartners${this.q(p)}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  setComment(vendorId: string, request: SetCommentRequest): Promise<CommentDto> {
    const requestObj = new HttpRequest('POST', `api/admin/vendor/SetComment/${vendorId}`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

}