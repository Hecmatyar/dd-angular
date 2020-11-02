/*tslint:disable*/
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {BaseRequest} from './BaseRequest';
import {Email} from './dto/Email.g';

@Injectable()
export class EmailApiRequest extends BaseRequest {

  constructor(http: HttpClient) {
    super(http);
  }

  get(): Promise<Email[]> {
    const requestObj = new HttpRequest('GET', `api/Email/Get`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getById(id: string): Promise<Email> {
    const requestObj = new HttpRequest('GET', `api/Email/GetById/${id}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  add(email: Email): Promise<void> {
    const requestObj = new HttpRequest('POST', `api/Email/Add`, email, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  update(email: Email): Promise<void> {
    const requestObj = new HttpRequest('PUT', `api/Email/Update`, email, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  delete(id: string): Promise<void> {
    const requestObj = new HttpRequest('DELETE', `api/Email/Delete/${id}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

}