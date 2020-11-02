import {ServicePart} from "../../../api/dto/ServicePart.g";
import {Paged} from "../../../api/dto/Paged.g";
import {SortParamDto} from "../../../api/dto/SortParamDto.g";

export interface GetBrandsAnalyticRequest {
  brandId: string;
  dateFrom: Date | string | null;
  dateTo: Date | string | null;
  servicePart: ServicePart | null;
  paged: Paged;
  sortParamDto: SortParamDto;
}
