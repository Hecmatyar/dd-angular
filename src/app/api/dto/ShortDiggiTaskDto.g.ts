/*tslint:disable*/
import {DiggiTaskPriority} from "./DiggiTaskPriority.g";
import {DiggiTaskStatus} from "./DiggiTaskStatus.g";
import {DiggiTaskCategory} from "./DiggiTaskCategory.g";
import {DiggiTaskRole} from "./DiggiTaskRole.g";

export interface ShortDiggiTaskDto {
    id: string;
    priority: DiggiTaskPriority;
    status: DiggiTaskStatus;
    number: number;
    employeeId: string | null;
    employee: string;
    category: DiggiTaskCategory;
    role: DiggiTaskRole;
    author: string;
    date: Date | string;
    canOpen: boolean;
}