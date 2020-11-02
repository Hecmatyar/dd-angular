import {AccessLevel} from "../api/dto/AccessLevel.g";
import {
  brandCreatePath,
  brandEditPath,
  brandListPath,
  bulkOrderListPath,
  bulkVendorsCreatePath,
  bulkVendorsEditPath,
  bulkVendorsListPath,
  cardBulkOrderCreatePath,
  cardListPath,
  employeeCreatePath,
  employeeEditPath,
  employeeListPath,
  partnersOrderCreatePath,
  partnersOrderListPath,
  partnersVendorsCreatePath,
  partnersVendorsEditPath,
  partnersVendorsListPath,
  rolesEditPath,
  rolesListPath,
  tasksListPath,
  transactionsOrderCreateBulkPath,
  transactionsOrderCreatePartnersPath,
  transactionsOrderCreateUserPath,
  transactionsOrderListPath,
  userOrderListPath,
  userVendorsEditPath,
  userVendorsListPath
} from "./path";

export const routeMap = new Map<string, AccessLevel>();
routeMap.set(employeeListPath, AccessLevel.EmployeePageView);
routeMap.set(employeeCreatePath, AccessLevel.EmployeeCreate);
routeMap.set(employeeEditPath, AccessLevel.EmployeeEdit);
routeMap.set(rolesListPath, AccessLevel.RolesPageView);
routeMap.set(rolesEditPath, AccessLevel.RolesRolesManage);
routeMap.set(cardListPath, AccessLevel.CardPageView);
routeMap.set(cardBulkOrderCreatePath, AccessLevel.CardBulkOrderCreate);
routeMap.set(userOrderListPath, AccessLevel.UserOrdersPageView);
routeMap.set(bulkOrderListPath, AccessLevel.BulkOrdersPageView);
routeMap.set(partnersOrderListPath, AccessLevel.PartnersOrdersPageView);
routeMap.set(partnersOrderCreatePath, AccessLevel.PartnersOrdersOrderCreate);
routeMap.set(transactionsOrderListPath, AccessLevel.TransactionsPageView);
routeMap.set(transactionsOrderCreateUserPath, AccessLevel.TransactionsCreateUser);
routeMap.set(transactionsOrderCreateBulkPath, AccessLevel.TransactionsCreateBulkSell);
routeMap.set(transactionsOrderCreatePartnersPath, AccessLevel.TransactionsCreatePartners);
routeMap.set(userVendorsListPath, AccessLevel.UserVendorsPageView);
routeMap.set(userVendorsEditPath, AccessLevel.UserVendorsEdit);
routeMap.set(bulkVendorsListPath, AccessLevel.BulkSalesVendorsPageView);
routeMap.set(bulkVendorsEditPath, AccessLevel.BulkSalesVendorsEdit);
routeMap.set(bulkVendorsCreatePath, AccessLevel.BulkSalesVendorsCreate);
routeMap.set(partnersVendorsListPath, AccessLevel.PartnersSalesVendorsPageView);
routeMap.set(partnersVendorsEditPath, AccessLevel.PartnersSalesVendorsEdit);
routeMap.set(partnersVendorsCreatePath, AccessLevel.PartnersSalesVendorsCreate);
routeMap.set(brandListPath, AccessLevel.BrandPageView);
routeMap.set(brandEditPath, AccessLevel.BrandEdit);
routeMap.set(brandCreatePath, AccessLevel.BrandCreate);
routeMap.set(tasksListPath, AccessLevel.TaskOpenAll);
