/*tslint:disable*/
import {AdminUserBase} from "./AdminUserBase.g";

export interface AdminAddBulkRequest extends AdminUserBase {
    guaranteeDays: number;
}