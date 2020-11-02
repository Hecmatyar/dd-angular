/*tslint:disable*/
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {BaseRequest} from './BaseRequest';
import {BrandCategory} from './dto/BrandCategory.g';

@Injectable()
export class AdminBrandCategoryApiRequest extends BaseRequest {

  constructor(http: HttpClient) {
    super(http);
  }

  getById(id: string): Promise<BrandCategory> {
    const requestObj = new HttpRequest('GET', `api/admin/brandcategory/${id}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getAll(): Promise<BrandCategory[]> {
    const requestObj = new HttpRequest('GET', `api/admin/brandcategory/GetAll`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  search(subString: string): Promise<BrandCategory[]> {
    const p: { [key: string]: string | number | boolean | Date } = { };
    p["subString"] = subString;
    const requestObj = new HttpRequest('GET', `api/admin/brandcategory/search${this.q(p)}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  add(category: BrandCategory): Promise<BrandCategory> {
    const requestObj = new HttpRequest('POST', `api/admin/brandcategory/add`, category, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  update(category: BrandCategory): Promise<BrandCategory> {
    const requestObj = new HttpRequest('PUT', `api/admin/brandcategory/update`, category, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

}