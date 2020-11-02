/*tslint:disable*/
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {BaseRequest} from './BaseRequest';
import {AdminBrandFull} from './dto/AdminBrandFull.g';
import {EntityDto} from './dto/EntityDto.g';
import {SearchBrandRequest} from './dto/SearchBrandRequest.g';
import {AdminBrandShort} from './dto/AdminBrandShort.g';
import {PagedResult} from './dto/PagedResult.g';
import {AdminAddBrandRequest} from './dto/AdminAddBrandRequest.g';
import {AdminUpdateBrandRequest} from './dto/AdminUpdateBrandRequest.g';
import {AdminBrandPercentRanges} from './dto/AdminBrandPercentRanges.g';
import {SetBrandTopRequest} from './dto/SetBrandTopRequest.g';
import {SetBuyAbilityRequest} from './dto/SetBuyAbilityRequest.g';
import {SetCommentRequest} from './dto/SetCommentRequest.g';
import {CommentDto} from './dto/CommentDto.g';

@Injectable()
export class AdminBrandApiRequest extends BaseRequest {

  constructor(http: HttpClient) {
    super(http);
  }

  getById(id: string): Promise<AdminBrandFull> {
    const requestObj = new HttpRequest('GET', `api/admin/brand/${id}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getAll(): Promise<EntityDto[]> {
    const requestObj = new HttpRequest('GET', `api/admin/brand/GetAll`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  autoComplete(startWith: string, count: number): Promise<EntityDto[]> {
    const p: { [key: string]: string | number | boolean | Date } = { };
    p["startWith"] = startWith;
    p["count"] = count;
    const requestObj = new HttpRequest('GET', `api/admin/brand/autoComplete${this.q(p)}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  search(request: SearchBrandRequest): Promise<PagedResult<AdminBrandShort>> {
    const requestObj = new HttpRequest('POST', `api/admin/brand/search`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  add(request: AdminAddBrandRequest, imageFile: File): Promise<AdminBrandFull> {
        const body = new FormData();
    body.append('imageFile',  imageFile);
    body.append('request',  JSON.stringify(request));
    const requestObj = new HttpRequest('POST', `api/admin/brand/add`, body, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  update(request: AdminUpdateBrandRequest, imageFile: File): Promise<AdminBrandFull> {
        const body = new FormData();
    body.append('imageFile',  imageFile);
    body.append('request',  JSON.stringify(request));
    const requestObj = new HttpRequest('PUT', `api/admin/brand/update`, body, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getPercentRanges(brandId: string): Promise<AdminBrandPercentRanges> {
    const requestObj = new HttpRequest('GET', `api/admin/brand/GetPercentRanges/${brandId}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  setTopCommissionSell(request: SetBrandTopRequest): Promise<AdminBrandShort> {
    const requestObj = new HttpRequest('PUT', `api/admin/brand/SetTopCommission`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  updatePercentRanges(request: AdminBrandPercentRanges): Promise<AdminBrandPercentRanges> {
    const requestObj = new HttpRequest('POST', `api/admin/brand/UpdatePercentRanges`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  setBuyAbility(request: SetBuyAbilityRequest): Promise<AdminBrandShort> {
    const requestObj = new HttpRequest('PUT', `api/admin/brand/buyAbility`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  setComment(brandId: string, request: SetCommentRequest): Promise<CommentDto> {
    const requestObj = new HttpRequest('POST', `api/admin/brand/SetComment/${brandId}`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

}
