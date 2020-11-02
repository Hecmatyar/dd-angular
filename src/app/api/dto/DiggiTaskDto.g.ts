/*tslint:disable*/
import {DiggiTaskPriority} from "./DiggiTaskPriority.g";
import {DiggiTaskStatus} from "./DiggiTaskStatus.g";
import {DiggiTaskCategory} from "./DiggiTaskCategory.g";

export interface DiggiTaskDto {
    id: string;
    priority: DiggiTaskPriority;
    status: DiggiTaskStatus;
    number: number;
    category: DiggiTaskCategory;
    author: string;
    date: Date | string;
    comment: string;
    additionalInfo: object;
}