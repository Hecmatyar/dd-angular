export const defaultPath = "";
export const notFoundPath = "not-found";
export const accessDeniedPath = "access-denied";
export const loginPath = "login";

export const functionsPath = "functions";
export const employeeListPath = "functions/employee";
export const employeeEditPath = "functions/employee/edit/:id";
export const employeeEdit = (id: string | number): string => `functions/employee/edit/${id}`;
export const employeeCreatePath = "functions/employee/create";

export const rolesListPath = "functions/roles/list";
export const rolesEditPath = "functions/roles/edit/:id";
export const rolesEdit =  (id: string | number): string => `functions/roles/edit/${id}`;
export const rolesCreatePath = "functions/roles/create";

export const cardListPath = "cards";

export const ordersPath = "orders";
export const userOrderListPath = "orders/users";
export const bulkOrderListPath = "orders/bulk";
export const cardBulkOrderCreatePath = "orders/bulk/create/:id";
export const cardBulkOrderCreate = (id: string | number): string => `orders/bulk/create/${id}`;
export const partnersOrderListPath = "orders/partners";
export const partnersOrderCreatePath = "orders/partners/create";

export const transactionsOrderListPath = "orders/transactions";
export const transactionsOrderCreateUserPath = "orders/transactions/create/user";
export const transactionsOrderCreateBulkPath = "orders/transactions/create/bulk";
export const transactionsOrderCreatePartnersPath = "orders/transactions/create/partner";

export const vendorsPath = "vendors";
export const userVendorsListPath = "vendors/users";
export const userVendorsEditPath = "vendors/users/edit/:id";
export const userVendorsInfoPath = "vendors/users/info/:id";
export const userVendorsEdit = (id: string | number): string => `vendors/users/edit/${id}`;
export const userVendorsInfo = (id: string | number): string => `vendors/users/info/${id}`;

export const bulkVendorsListPath = "vendors/bulk";
export const bulkVendorsEditPath = "vendors/bulk/edit/:id";
export const bulkVendorsEdit = (id: string | number): string => `vendors/bulk/edit/${id}`;
export const bulkVendorsCreatePath = "vendors/bulk/create";

export const partnersVendorsListPath = "vendors/partners";
export const partnersVendorsEditPath = "vendors/partners/edit/:id";
export const partnersVendorsEdit = (id: string | number): string => `vendors/partners/edit/${id}`;
export const partnersVendorsCreatePath = "vendors/partners/create";

export const brandListPath = "brand";
export const brandEditPath = "brand/edit/:id";
export const brandEdit = (id: string | number): string => `brand/edit/${id}`;
export const brandCreatePath = "brand/create";

export const tasksListPath = "tasks";

export const settingsPath = "settings";

export const analytics = "analytics";
export const analyticsOverviewPath = "analytics/overview";
export const analyticsCardsPath = "analytics/cards";
export const analyticsBrandsPath = "analytics/brands";
export const analyticsValuePath = "analytics/value";
export const analyticsPartnersPath = "analytics/partners";

export const supportPath = "support";
export const supportChangeLogPath = "support/change-log";
export const supportSettingsPath = "support/settings";
export const supportSettingsCardsPath = "support/settings/cards";
export const supportSettingsBonusPath = "support/settings/bonus";
export const supportSettingsDiscountPath = "support/settings/discount";
export const supportSettingsContentPath = "support/settings/content";
