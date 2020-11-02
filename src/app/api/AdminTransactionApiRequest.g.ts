/*tslint:disable*/
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {BaseRequest} from './BaseRequest';
import {SearchTransactionsRequest} from './dto/SearchTransactionsRequest.g';
import {AdminTransactionsFull} from './dto/AdminTransactionsFull.g';
import {PagedResult} from './dto/PagedResult.g';
import {AddMobileTransactionRequest} from './dto/AddMobileTransactionRequest.g';
import {AddBulkTransactionRequest} from './dto/AddBulkTransactionRequest.g';
import {AddPartnersTransactionRequest} from './dto/AddPartnersTransactionRequest.g';
import {AdminDebtCardsRequest} from './dto/AdminDebtCardsRequest.g';
import {AdminDebtCard} from './dto/AdminDebtCard.g';
import {AdminAllowedTransactionTypesDto} from './dto/AdminAllowedTransactionTypesDto.g';
import {AdminSetTransactionStatus} from './dto/AdminSetTransactionStatus.g';
import {SetCommentRequest} from "./dto/SetCommentRequest.g";
import {CommentDto} from "./dto/CommentDto.g";

@Injectable()
export class AdminTransactionApiRequest extends BaseRequest {

  constructor(http: HttpClient) {
    super(http);
  }

  getTransactions(request: SearchTransactionsRequest): Promise<PagedResult<AdminTransactionsFull>> {
    const requestObj = new HttpRequest('POST', `api/admin/transaction/Search`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  addMobileTransaction(request: AddMobileTransactionRequest): Promise<void> {
    const requestObj = new HttpRequest('POST', `api/admin/transaction/AddMobile`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  addBulkTransaction(request: AddBulkTransactionRequest): Promise<void> {
    const requestObj = new HttpRequest('POST', `api/admin/transaction/AddBulk`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  getTransactionAmountForBulkSales(vendorId: string, number: number): Promise<number> {
    const p: { [key: string]: string | number | boolean | Date } = { };
    p["vendorId"] = vendorId;
    p["number"] = number;
    const requestObj = new HttpRequest('GET', `api/admin/transaction/GetTransactionAmountForBulkSales${this.q(p)}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  addPartnersTransaction(request: AddPartnersTransactionRequest): Promise<void> {
    const requestObj = new HttpRequest('POST', `api/admin/transaction/AddPartners`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  getTransactionAmountForPartners(vendorId: string, number: number, debtCardIds: string[]): Promise<number> {
    const p: { [key: string]: string | string[] |number | boolean | Date } = { };
    p["vendorId"] = vendorId;
    p["number"] = number;
    p["debtCardIds"] = debtCardIds;
    const requestObj = new HttpRequest('GET', `api/admin/transaction/GetTransactionAmountForPartners${this.q(p)}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getDebtCards(request: AdminDebtCardsRequest): Promise<AdminDebtCard[]> {
    const requestObj = new HttpRequest('POST', `api/admin/transaction/DebtCards`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getAllowedTransactionTypes(): Promise<AdminAllowedTransactionTypesDto> {
    const requestObj = new HttpRequest('GET', `api/admin/transaction/AllowedTransactionTypes`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  setStatus(request: AdminSetTransactionStatus): Promise<void> {
    const requestObj = new HttpRequest('PATCH', `api/admin/transaction/SetStatus`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  setComment(transactionId: string, request: SetCommentRequest): Promise<CommentDto> {
    const requestObj = new HttpRequest('PATCH', `api/admin/transaction/SetComment/${transactionId}`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
      .then((response) => response)
      .catch(BaseRequest.handleError);
  }

}
