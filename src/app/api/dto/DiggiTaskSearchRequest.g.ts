/*tslint:disable*/
import {DiggiTaskPriority} from "./DiggiTaskPriority.g";
import {DiggiTaskStatus} from "./DiggiTaskStatus.g";
import {DiggiTaskCategory} from "./DiggiTaskCategory.g";
import {SortParamDto} from "./SortParamDto.g";
import {Paged} from "./Paged.g";

export interface DiggiTaskSearchRequest {
    priority: DiggiTaskPriority | null;
    status: DiggiTaskStatus | null;
    category: DiggiTaskCategory | null;
    employeeId: string | null;
    number: number | null;
    dateFrom: Date | string | null;
    dateTo: Date | string | null;
    sortParamDto: SortParamDto;
    paged: Paged;
}