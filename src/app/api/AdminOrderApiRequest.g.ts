/*tslint:disable*/
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {BaseRequest} from './BaseRequest';
import {SearchAdminMobileOrderRequest} from './dto/SearchAdminMobileOrderRequest.g';
import {AdminMobileOrderDto} from './dto/AdminMobileOrderDto.g';
import {PagedResult} from './dto/PagedResult.g';
import {SearchAdminPartnerOrderRequest} from './dto/SearchAdminPartnerOrderRequest.g';
import {AdminPartnerOrderDto} from './dto/AdminPartnerOrderDto.g';
import {SearchAdminBulkOrderRequest} from './dto/SearchAdminBulkOrderRequest.g';
import {AdminBulkOrderDto} from './dto/AdminBulkOrderDto.g';
import {AdminCreateBulkOrderRequest} from './dto/AdminCreateBulkOrderRequest.g';
import {AdminBulkOrder} from './dto/AdminBulkOrder.g';
import {AdminConfirmBulkOrderRequest} from './dto/AdminConfirmBulkOrderRequest.g';
import {AdminUpdateVendorBrandCommissionSellRequest} from './dto/AdminUpdateVendorBrandCommissionSellRequest.g';
import {AdminSetOrderStatus} from './dto/AdminSetOrderStatus.g';
import {SetCommentRequest} from './dto/SetCommentRequest.g';
import {CommentDto} from './dto/CommentDto.g';

@Injectable()
export class AdminOrderApiRequest extends BaseRequest {

  constructor(http: HttpClient) {
    super(http);
  }

  searchMobileOrders(request: SearchAdminMobileOrderRequest): Promise<PagedResult<AdminMobileOrderDto>> {
    const requestObj = new HttpRequest('POST', `api/admin/order/search/mobile`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  searchPartnerOrders(request: SearchAdminPartnerOrderRequest): Promise<PagedResult<AdminPartnerOrderDto>> {
    const requestObj = new HttpRequest('POST', `api/admin/order/search/partner`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  searchBulkOrders(request: SearchAdminBulkOrderRequest): Promise<PagedResult<AdminBulkOrderDto>> {
    const requestObj = new HttpRequest('POST', `api/admin/order/search/bulk`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  createForBulkSell(request: AdminCreateBulkOrderRequest): Promise<AdminBulkOrder> {
    const requestObj = new HttpRequest('POST', `api/admin/order/createForBulkSell`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  revertBulkOrder(orderId: string): Promise<void> {
    const requestObj = new HttpRequest('POST', `api/admin/order/revertBulkOrder`, orderId, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  confirmBulkOrder(request: AdminConfirmBulkOrderRequest): Promise<void> {
    const requestObj = new HttpRequest('POST', `api/admin/order/confirmBulkOrder`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  getDraftBulkOrder(orderId: string): Promise<AdminBulkOrder> {
    const requestObj = new HttpRequest('GET', `api/admin/order/getDraftBulk/${orderId}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  updateSellCommission(request: AdminUpdateVendorBrandCommissionSellRequest): Promise<AdminBulkOrder> {
    const requestObj = new HttpRequest('PUT', `api/admin/order/updateSellCommission`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getOrderSum(number: number): Promise<number> {
    const requestObj = new HttpRequest('GET', `api/admin/order/getOrderSum/${number}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  setMobileStatus(request: AdminSetOrderStatus): Promise<void> {
    const requestObj = new HttpRequest('PATCH', `api/admin/order/SetStatus/mobile`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  setBulkStatus(request: AdminSetOrderStatus): Promise<void> {
    const requestObj = new HttpRequest('PATCH', `api/admin/order/SetStatus/Bulk`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  setPartnerStatus(request: AdminSetOrderStatus): Promise<void> {
    const requestObj = new HttpRequest('PATCH', `api/admin/order/SetStatus/Partner`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then(() => {})
    .catch(BaseRequest.handleError);
  }

  getCsvForBulkOrder(cardIds: string[]): Promise<File> {
    const requestObj = new HttpRequest('GET', `api/admin/order/GetCsvForBulkOrder`, cardIds, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
      .then((response) => response)
      .catch(BaseRequest.handleError);
  }

  setComment(orderId: string, request: SetCommentRequest): Promise<CommentDto> {
    const requestObj = new HttpRequest('POST', `api/admin/order/SetComment/${orderId}`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

}
