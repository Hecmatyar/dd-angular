/*tslint:disable*/
import {DiggiTaskRole} from "./DiggiTaskRole.g";
import {DiggiTaskAdditionalInfoContext} from "./DiggiTaskAdditionalInfoContext.g";
import {DiggiTaskPriority} from "./DiggiTaskPriority.g";

export interface DiggiTaskPersonalContext extends DiggiTaskAdditionalInfoContext {
    role: DiggiTaskRole;
    priority: DiggiTaskPriority;
    text: string;
}