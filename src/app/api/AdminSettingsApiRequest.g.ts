/*tslint:disable*/
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {BaseRequest} from './BaseRequest';
import {AdminCardsSetting} from './dto/AdminCardsSetting.g';
import {AdminDiscountSetting} from './dto/AdminDiscountSetting.g';
import {AdminContentSetting} from './dto/AdminContentSetting.g';
import {AdminPaymentSettings} from './dto/AdminPaymentSettings.g';
import {AdminBonusSetting} from './dto/AdminBonusSetting.g';

@Injectable()
export class AdminSettingsApiRequest extends BaseRequest {

  constructor(http: HttpClient) {
    super(http);
  }

  getCards(): Promise<AdminCardsSetting> {
    const requestObj = new HttpRequest('GET', `api/admin/settings/getCards`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  setCards(request: AdminCardsSetting): Promise<AdminCardsSetting> {
    const requestObj = new HttpRequest('POST', `api/admin/settings/setCards`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getDiscount(): Promise<AdminDiscountSetting> {
    const requestObj = new HttpRequest('GET', `api/admin/settings/getDiscount`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  setDiscount(request: AdminDiscountSetting): Promise<AdminDiscountSetting> {
    const requestObj = new HttpRequest('POST', `api/admin/settings/setDiscount`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  setContent(request: AdminContentSetting): Promise<AdminContentSetting> {
    const requestObj = new HttpRequest('POST', `api/admin/settings/setContent`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  setPayment(request: AdminPaymentSettings): Promise<AdminPaymentSettings> {
    const requestObj = new HttpRequest('POST', `api/admin/settings/setPayment`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getBonus(): Promise<AdminBonusSetting> {
    const requestObj = new HttpRequest('GET', `api/admin/settings/getBonus`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  setBonus(request: AdminBonusSetting): Promise<AdminBonusSetting> {
    const requestObj = new HttpRequest('POST', `api/admin/settings/setBonus`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getContent(): Promise<AdminContentSetting> {
    const requestObj = new HttpRequest('GET', `api/admin/settings/getContent`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getPayment(): Promise<AdminPaymentSettings> {
    const requestObj = new HttpRequest('GET', `api/admin/settings/getPayment`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

}