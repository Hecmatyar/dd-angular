/*tslint:disable*/
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {BaseRequest} from './BaseRequest';
import {AdminAuthenticationRequest} from './dto/AdminAuthenticationRequest.g';
import {SetNewPasswordByTokenRequest} from './dto/SetNewPasswordByTokenRequest.g';
import {AccessLevel} from './dto/AccessLevel.g';

@Injectable()
export class AdminAuthenticationApiRequest extends BaseRequest {

  constructor(http: HttpClient) {
    super(http);
  }

  login(request: AdminAuthenticationRequest): Promise<void> {
    const requestObj = new HttpRequest('POST', `api/admin/authentication/Login`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  logout(): Promise<void> {
    const requestObj = new HttpRequest('POST', `api/admin/authentication/Logout`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  setNewPasswordByToken(request: SetNewPasswordByTokenRequest): Promise<void> {
    const requestObj = new HttpRequest('POST', `api/admin/authentication/setNewPassword`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  accessLevels(): Promise<AccessLevel[]> {
    const requestObj = new HttpRequest('GET', `api/admin/authentication/AccessLevels`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  checkAuthorize(): Promise<void> {
    const requestObj = new HttpRequest('GET', `api/admin/authentication`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

}