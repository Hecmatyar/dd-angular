/*tslint:disable*/
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {BaseRequest} from './BaseRequest';

@Injectable()
export class GeneratorTestApiRequest extends BaseRequest {

  constructor(http: HttpClient) {
    super(http);
  }

  getById(id: number): Promise<string> {
    const requestObj = new HttpRequest('GET', `api/GeneratorTest/GetById/${id}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  post(value: string): Promise<void> {
    const requestObj = new HttpRequest('POST', `api/GeneratorTest/Post`, value, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  put(id: number, value: string): Promise<void> {
    const requestObj = new HttpRequest('PUT', `api/GeneratorTest/Put/${id}`, value, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  delete(id: number): Promise<void> {
    const requestObj = new HttpRequest('DELETE', `api/GeneratorTest/Delete/${id}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

}