/*tslint:disable*/
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {BaseRequest} from './BaseRequest';
import {AdminSearchAuditRequest} from './dto/AdminSearchAuditRequest.g';
import {AuditInfoDto} from './dto/AuditInfoDto.g';
import {PagedResult} from './dto/PagedResult.g';

@Injectable()
export class AuditApiRequest extends BaseRequest {

  constructor(http: HttpClient) {
    super(http);
  }

  search(request: AdminSearchAuditRequest): Promise<PagedResult<AuditInfoDto>> {
    const requestObj = new HttpRequest('POST', `api/audit/search`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

}