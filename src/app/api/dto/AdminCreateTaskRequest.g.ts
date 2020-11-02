/*tslint:disable*/
import {DiggiTaskRole} from "./DiggiTaskRole.g";
import {DiggiTaskPriority} from "./DiggiTaskPriority.g";

export interface AdminCreateTaskRequest {
    role: DiggiTaskRole;
    priority: DiggiTaskPriority;
    text: string;
}