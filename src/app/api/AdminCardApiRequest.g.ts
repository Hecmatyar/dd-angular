/*tslint:disable*/
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {BaseRequest} from './BaseRequest';
import {AdminUpdateCardRequest} from './dto/AdminUpdateCardRequest.g';
import {AdminCardDataFull} from './dto/AdminCardDataFull.g';
import {SearchCardRequest} from './dto/SearchCardRequest.g';
import {PagedResult} from './dto/PagedResult.g';
import {SetCardTopRequest} from './dto/SetCardTopRequest.g';
import {SetCommentRequest} from './dto/SetCommentRequest.g';
import {CommentDto} from './dto/CommentDto.g';
import {AdminSetCardStatus} from './dto/AdminSetCardStatus.g';

@Injectable()
export class AdminCardApiRequest extends BaseRequest {

  constructor(http: HttpClient) {
    super(http);
  }

  update(request: AdminUpdateCardRequest): Promise<AdminCardDataFull> {
    const requestObj = new HttpRequest('PUT', `api/admin/cardData/update`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  search(request: SearchCardRequest): Promise<PagedResult<AdminCardDataFull>> {
    const requestObj = new HttpRequest('POST', `api/admin/cardData/search`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  setTopCommission(request: SetCardTopRequest): Promise<AdminCardDataFull> {
    const requestObj = new HttpRequest('PUT', `api/admin/cardData/SetTopCommission`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  setComment(cardId: string, request: SetCommentRequest): Promise<CommentDto> {
    const requestObj = new HttpRequest('POST', `api/admin/cardData/SetComment/${cardId}`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  setStatus(request: AdminSetCardStatus): Promise<AdminCardDataFull> {
    const requestObj = new HttpRequest('PUT', `api/admin/cardData/SetStatus`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

}