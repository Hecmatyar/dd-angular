import {Paged} from "../../../api/dto/Paged.g";
import {SortParamDto} from "../../../api/dto/SortParamDto.g";

export interface GetPartnersAnalyticRequest {
  dateFrom: Date | string | null;
  dateTo: Date | string | null;
  partnerId: string | null;
  paged: Paged;
  sortParamDto: SortParamDto;
}
