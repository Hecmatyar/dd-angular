/*tslint:disable*/
import {AccessLevel} from "./AccessLevel.g";

export interface AccessLevelMap {
    employee: AccessLevel[];
    roles: AccessLevel[];
    card: AccessLevel[];
    brand: AccessLevel[];
    userOrders: AccessLevel[];
    bulkOrders: AccessLevel[];
    partnersOrders: AccessLevel[];
    userVendors: AccessLevel[];
    bulkSalesVendors: AccessLevel[];
    partnersSalesVendors: AccessLevel[];
    transactions: AccessLevel[];
    tasks: AccessLevel[];
    settings: AccessLevel[];
    analytics: AccessLevel[];
    audit: AccessLevel[];
}