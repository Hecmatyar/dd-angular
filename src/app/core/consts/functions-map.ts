import {AccessLevel} from "../../api/dto/AccessLevel.g";

export const functionsMap = new Map<AccessLevel, string>();
functionsMap.set(AccessLevel.EmployeeEdit, "Edit user");
functionsMap.set(AccessLevel.EmployeeCreate, "Create user");
functionsMap.set(AccessLevel.EmployeeBlocking, "Block and Unblock user");
functionsMap.set(AccessLevel.EmployeePageView, "View page and info");

functionsMap.set(AccessLevel.RolesPageView, "View page and info");
functionsMap.set(AccessLevel.RolesRolesManage, "Manage roles");

functionsMap.set(AccessLevel.CardPageView, "View page");
functionsMap.set(AccessLevel.CardDetailsView, "View detail info");
functionsMap.set(AccessLevel.CardStatusChange, "Change card status");
functionsMap.set(AccessLevel.CardBulkOrderCreate, "Create bulk order");
functionsMap.set(AccessLevel.CardTopEdit, "Edit top percent");
functionsMap.set(AccessLevel.CardInfoEdit, "Edit card info");

functionsMap.set(AccessLevel.BrandPageView, "View page and info");
functionsMap.set(AccessLevel.BrandBlocking, "Block and Unblock brand");
functionsMap.set(AccessLevel.BrandTopEdit, "Edit top percent");
functionsMap.set(AccessLevel.BrandEdit, "Edit brand");
functionsMap.set(AccessLevel.BrandCreate, "Create brand");

functionsMap.set(AccessLevel.PartnersOrdersPageView, "View page");
functionsMap.set(AccessLevel.PartnersOrdersDetailsView, "View details info");
functionsMap.set(AccessLevel.PartnersOrdersOrderCreate, "Create order");
functionsMap.set(AccessLevel.PartnersOrdersStatusChange, "Change status");

functionsMap.set(AccessLevel.BulkOrdersPageView, "View page");
functionsMap.set(AccessLevel.BulkOrdersDetailsView, "View detail info");
functionsMap.set(AccessLevel.BulkOrdersStatusChange, "Change partners status");

functionsMap.set(AccessLevel.UserOrdersPageView, "View page");
functionsMap.set(AccessLevel.UserOrdersDetailsView, "View detail info");
functionsMap.set(AccessLevel.UserOrdersStatusChange, "Change partners status");

functionsMap.set(AccessLevel.TransactionsCreateBulkSell, "Create bulk sell");
functionsMap.set(AccessLevel.TransactionsCreatePartners, "Create partner");
functionsMap.set(AccessLevel.TransactionsCreateUser, "Create user");
functionsMap.set(AccessLevel.TransactionsPageView, "View page");
functionsMap.set(AccessLevel.TransactionsStatusChange, "Change status");

functionsMap.set(AccessLevel.SettingsViewBonusAndFunds, "View bonus and founds");
functionsMap.set(AccessLevel.SettingsViewCards, "View cards");
functionsMap.set(AccessLevel.SettingsViewContent, "View content");
functionsMap.set(AccessLevel.SettingsViewDiscount, "View discount");
functionsMap.set(AccessLevel.SettingsViewPayment, "View payment");

functionsMap.set(AccessLevel.AnalyticsViewBrands, "View brand");
functionsMap.set(AccessLevel.AnalyticsViewCards, "View cards");
functionsMap.set(AccessLevel.AnalyticsViewOverview, "View overview");
functionsMap.set(AccessLevel.AnalyticsViewPartners, "View partners");
functionsMap.set(AccessLevel.AnalyticsViewValue, "View value");

functionsMap.set(AccessLevel.BulkSalesVendorsBlocking, "Blocking");
functionsMap.set(AccessLevel.BulkSalesVendorsCreate, "Create");
functionsMap.set(AccessLevel.BulkSalesVendorsDetails, "View detail");
functionsMap.set(AccessLevel.BulkSalesVendorsEdit, "Edit");
functionsMap.set(AccessLevel.BulkSalesVendorsPageView, "View page");

functionsMap.set(AccessLevel.PartnersSalesVendorsBlocking, "Blocking");
functionsMap.set(AccessLevel.PartnersSalesVendorsCreate, "Create");
functionsMap.set(AccessLevel.PartnersSalesVendorsEdit, "Edit");
functionsMap.set(AccessLevel.PartnersSalesVendorsPageView, "View page");
functionsMap.set(AccessLevel.PartnersSalesVendorsDetails, "View detail");

functionsMap.set(AccessLevel.UserVendorsBlocking, "Blocking");
functionsMap.set(AccessLevel.UserVendorsDetails, "View detail");
functionsMap.set(AccessLevel.UserVendorsEdit, "Edit");
functionsMap.set(AccessLevel.UserVendorsMoreDetails, "View more detail");
functionsMap.set(AccessLevel.UserVendorsPageView, "View page");

functionsMap.set(AccessLevel.TaskCreate, "Create");
functionsMap.set(AccessLevel.TaskOpenAll, "Open all");
functionsMap.set(AccessLevel.TaskPageView, "View page");
functionsMap.set(AccessLevel.TaskCustomerRole, "Customer role");
functionsMap.set(AccessLevel.TaskPartnersRole, "Partners role");
functionsMap.set(AccessLevel.TaskCheckRole, "Check role");
functionsMap.set(AccessLevel.TaskFinanceRole, "Finance role");

functionsMap.set(AccessLevel.AuditView, "View page");
