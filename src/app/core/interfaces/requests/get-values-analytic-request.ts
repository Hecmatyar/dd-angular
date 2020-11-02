import {Paged} from "../../../api/dto/Paged.g";
import {SortParamDto} from "../../../api/dto/SortParamDto.g";

export interface GetValuesAnalyticRequest {
  brandId: string | null;
  dateFrom: Date | string | null;
  dateTo: Date | string | null;
  paged: Paged;
  sortParamDto: SortParamDto;
  fromValue: number;
  toValue: number;
}
