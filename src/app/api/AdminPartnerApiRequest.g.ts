/*tslint:disable*/
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {BaseRequest} from './BaseRequest';
import {VerifyPartnerCardRequest} from './dto/VerifyPartnerCardRequest.g';
import {PartnerImportedCard} from './dto/PartnerImportedCard.g';
import {ImportPartnerCardsRequest} from './dto/ImportPartnerCardsRequest.g';
import {PaymentMethod} from './dto/PaymentMethod.g';

@Injectable()
export class AdminPartnerApiRequest extends BaseRequest {

  constructor(http: HttpClient) {
    super(http);
  }

  verify(request: VerifyPartnerCardRequest): Promise<PartnerImportedCard> {
    const requestObj = new HttpRequest('POST', `api/admin/partner/importer/verify`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  verifyBatch(cards: VerifyPartnerCardRequest[]): Promise<PartnerImportedCard[]> {
    const requestObj = new HttpRequest('POST', `api/admin/partner/importer/verifyBatch`, cards, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  verifyFromFile(vendorId: string, csv: File): Promise<PartnerImportedCard[]> {
        const body = new FormData();
    body.append('csv',  csv);
    const requestObj = new HttpRequest('POST', `api/admin/partner/importer/verifyFromFile/${vendorId}`, body, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  import(request: ImportPartnerCardsRequest): Promise<void> {
    const requestObj = new HttpRequest('POST', `api/admin/partner/importer/import`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  getPaymentMethods(partnerId: string): Promise<PaymentMethod[]> {
    const requestObj = new HttpRequest('GET', `api/admin/partner/importer/paymentMethods/${partnerId}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

}