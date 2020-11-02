/*tslint:disable*/
import {AccessLevelInfo} from "./AccessLevelInfo.g";

export interface AdminRole {
    id: string | null;
    name: string;
    cardAccessLevel: AccessLevelInfo;
    brandAccessLevel: AccessLevelInfo;
    employeeAccessLevel: AccessLevelInfo;
    rolesAccessLevel: AccessLevelInfo;
    userOrdersAccessLevel: AccessLevelInfo;
    bulkOrdersAccessLevel: AccessLevelInfo;
    partnersOrdersAccessLevel: AccessLevelInfo;
    userVendorsAccessLevel: AccessLevelInfo;
    bulkSalesVendorsAccessLevel: AccessLevelInfo;
    partnersSalesVendorsAccessLevel: AccessLevelInfo;
    transactionsAccessLevel: AccessLevelInfo;
    tasksAccessLevel: AccessLevelInfo;
    settingsAccessLevel: AccessLevelInfo;
    analyticsAccessLevel: AccessLevelInfo;
    auditAccessLevel: AccessLevelInfo;
}