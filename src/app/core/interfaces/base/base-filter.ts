import {SortParamDto} from "../../../api/dto/SortParamDto.g";
import {Paged} from "../../../api/dto/Paged.g";

export interface IBaseFilter {
  sortParamDto: SortParamDto;
  paged: Paged;
}
