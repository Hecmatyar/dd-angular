/*tslint:disable*/
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {BaseRequest} from './BaseRequest';
import {ChangePasswordByTokenRequest} from './dto/ChangePasswordByTokenRequest.g';

@Injectable()
export class BaseAuthenticationApiRequest extends BaseRequest {

  constructor(http: HttpClient) {
    super(http);
  }

  sendTokenForResetPassword(login: string): Promise<void> {
    const requestObj = new HttpRequest('POST', `api/authentication/sendTokenForResetPassword`, login, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  changePasswordByToken(request: ChangePasswordByTokenRequest): Promise<void> {
    const requestObj = new HttpRequest('POST', `api/authentication/changePasswordByToken`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

}