import {Paged} from "../../api/dto/Paged.g";
import {SortParamDto} from "../../api/dto/SortParamDto.g";

export interface ITableLoadData {
  paged: Paged;
  sortParamDto: SortParamDto;
}
