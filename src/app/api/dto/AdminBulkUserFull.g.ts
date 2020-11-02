/*tslint:disable*/
import {AdminUserBase} from "./AdminUserBase.g";

export interface AdminBulkUserFull extends AdminUserBase {
    id: string;
    guaranteeDays: number;
}