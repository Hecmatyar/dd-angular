import {AdminCardApiRequest} from "../../api/AdminCardApiRequest.g";
import {SearchCardRequest} from "../../api/dto/SearchCardRequest.g";
import {PagedResult} from "../../api/dto/PagedResult.g";
import {AdminCardDataFull} from "../../api/dto/AdminCardDataFull.g";
import {Injectable} from "@angular/core";

@Injectable()
export class CardsService {
  constructor(private cardApiRequest: AdminCardApiRequest) {
  }

  getList(request: SearchCardRequest): Promise<PagedResult<AdminCardDataFull>> {
    return this.cardApiRequest.search(request);
  }
}
