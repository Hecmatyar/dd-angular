/*tslint:disable*/
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {BaseRequest} from './BaseRequest';
import {SearchEmployeeRequest} from './dto/SearchEmployeeRequest.g';
import {AdminShortEmployee} from './dto/AdminShortEmployee.g';
import {PagedResult} from './dto/PagedResult.g';
import {AdminEmployee} from './dto/AdminEmployee.g';
import {ManageEmployeeRequest} from './dto/ManageEmployeeRequest.g';
import {EntityDto} from "./dto/EntityDto.g";

@Injectable()
export class AdminEmployeeApiRequest extends BaseRequest {

  constructor(http: HttpClient) {
    super(http);
  }

  autoComplete(startWith: string, count: number): Promise<EntityDto[]> {
    const p: { [key: string]: string | number | boolean | Date } = { };
    p["startWith"] = startWith;
    p["count"] = count;
    const requestObj = new HttpRequest('GET', `api/admin/employee/autoComplete${this.q(p)}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  search(request: SearchEmployeeRequest): Promise<PagedResult<AdminShortEmployee>> {
    const requestObj = new HttpRequest('POST', `api/admin/employee/search`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getById(id: string): Promise<AdminEmployee> {
    const requestObj = new HttpRequest('GET', `api/admin/employee/${id}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  add(request: ManageEmployeeRequest): Promise<AdminEmployee> {
    const requestObj = new HttpRequest('POST', `api/admin/employee/add`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  update(request: ManageEmployeeRequest): Promise<AdminEmployee> {
    const requestObj = new HttpRequest('PUT', `api/admin/employee/update`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  downloadCsv(request: SearchEmployeeRequest): Promise<Blob> {
    const requestObj = new HttpRequest('GET', `api/admin/employee/csv${this.q(request)}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'content-type': 'text/csv',
        responseType: 'blob' as 'json',
      })
    }));

    return this.http.get<Blob>(`api/admin/employee/csv${this.q(request)}`,
      {headers: requestObj.headers, responseType: 'blob' as 'json' }).toPromise<Blob>();
  }

  updateUserAccessCache(userId: string): Promise<void> {
    const requestObj = new HttpRequest('POST', `api/admin/employee`, userId, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  banEmployee(id: string): Promise<void> {
    const requestObj = new HttpRequest('POST', `api/admin/employee/ban/${id}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  unBanEmployee(id: string): Promise<void> {
    const requestObj = new HttpRequest('POST', `api/admin/employee/unban/${id}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

}
