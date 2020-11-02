/*tslint:disable*/
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {BaseRequest} from './BaseRequest';
import {AdminRole} from './dto/AdminRole.g';
import {EntityDto} from './dto/EntityDto.g';
import {AccessLevelMap} from './dto/AccessLevelMap.g';
import {PagedResult} from './dto/PagedResult.g';

@Injectable()
export class AdminRoleApiRequest extends BaseRequest {

  constructor(http: HttpClient) {
    super(http);
  }

  emptyRole(): Promise<AdminRole> {
    const requestObj = new HttpRequest('GET', `api/admin/role/emptyRole`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getById(id: string): Promise<AdminRole> {
    const requestObj = new HttpRequest('GET', `api/admin/role/${id}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getAll(): Promise<EntityDto[]> {
    const requestObj = new HttpRequest('GET', `api/admin/role/GetAll`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getAccessByIds(roleIds: string[]): Promise<AccessLevelMap> {
    const requestObj = new HttpRequest('POST', `api/admin/role/GetAccessByIds`, roleIds, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  search(name: string, page: number, pageSize: number): Promise<PagedResult<AdminRole>> {
    const p: { [key: string]: string | number | boolean | Date } = { };
    p["name"] = name;
    p["page"] = page;
    p["pageSize"] = pageSize;
    const requestObj = new HttpRequest('GET', `api/admin/role/search${this.q(p)}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  add(role: AdminRole): Promise<AdminRole> {
    const requestObj = new HttpRequest('POST', `api/admin/role/add`, role, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  update(role: AdminRole): Promise<AdminRole> {
    const requestObj = new HttpRequest('POST', `api/admin/role/update`, role, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getAccessLevelMap(): Promise<AccessLevelMap> {
    const requestObj = new HttpRequest('GET', `api/admin/role/accessLevelMap`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  removeRole(id: string): Promise<void> {
    const requestObj = new HttpRequest('DELETE', `api/admin/role/${id}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

}