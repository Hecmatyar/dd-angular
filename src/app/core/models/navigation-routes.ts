import {INavigationItem} from "../interfaces/navigation-item";
import {
  analytics,
  brandListPath,
  bulkOrderListPath,
  bulkVendorsListPath,
  cardListPath,
  employeeListPath,
  functionsPath,
  ordersPath,
  partnersOrderListPath,
  partnersVendorsListPath,
  rolesListPath, supportChangeLogPath, supportPath, supportSettingsPath,
  tasksListPath,
  transactionsOrderListPath,
  userOrderListPath,
  userVendorsListPath,
  vendorsPath,
} from "../path";
import {AccessLevel} from "../../api/dto/AccessLevel.g";

export const navigationRoutes: INavigationItem[] = [
  {
    title: "Roles & Functions",
    routerLink: functionsPath,
    accessLevel: [AccessLevel.EmployeePageView, AccessLevel.RolesPageView],
    children: [
      {
        title: "Employee",
        routerLink: employeeListPath,
        accessLevel: [AccessLevel.EmployeePageView],
      },
      {
        title: "Roles & access rights",
        routerLink: rolesListPath,
        accessLevel: [AccessLevel.RolesPageView]
      }
    ]
  },
  {
    title: "Cards",
    routerLink: cardListPath,
    accessLevel: [AccessLevel.CardPageView]
  },
  {
    title: "Orders",
    routerLink: ordersPath,
    accessLevel: [AccessLevel.UserOrdersPageView,
      AccessLevel.BulkOrdersPageView,
      AccessLevel.PartnersOrdersPageView,
      AccessLevel.TransactionsPageView],
    children: [
      {
        title: "Mobile App",
        routerLink: userOrderListPath,
        accessLevel: [AccessLevel.UserOrdersPageView]
      },
      {
        title: "Bulk Sales",
        routerLink: bulkOrderListPath,
        accessLevel: [AccessLevel.BulkOrdersPageView]
      },
      {
        title: "Partners",
        routerLink: partnersOrderListPath,
        accessLevel: [AccessLevel.PartnersOrdersPageView]
      },
      {
        title: "Transactions",
        routerLink: transactionsOrderListPath,
        accessLevel: [AccessLevel.TransactionsPageView]
      }
    ]
  },
  {
    title: "Vendors",
    routerLink: vendorsPath,
    accessLevel: [AccessLevel.UserVendorsPageView,
      AccessLevel.BulkSalesVendorsPageView,
      AccessLevel.PartnersSalesVendorsPageView],
    children: [
      {
        title: "Mobile App",
        routerLink: userVendorsListPath,
        accessLevel: [AccessLevel.UserVendorsPageView]
      },
      {
        title: "Bulk Sales",
        routerLink: bulkVendorsListPath,
        accessLevel: [AccessLevel.BulkSalesVendorsPageView]
      },
      {
        title: "Partners",
        routerLink: partnersVendorsListPath,
        accessLevel: [AccessLevel.PartnersSalesVendorsPageView]
      },
    ]
  },
  {
    title: "Brands",
    routerLink: brandListPath,
    accessLevel: [AccessLevel.BrandPageView]
  },
  {
    title: "Tasks",
    routerLink: tasksListPath,
    accessLevel: [AccessLevel.TaskOpenAll]
  },
  {
    title: "Support",
    routerLink: supportPath,
    accessLevel: [AccessLevel.SettingsViewCards],
    children: [
      {
        title: "Change-log",
        routerLink: supportChangeLogPath,
        accessLevel: [AccessLevel.SettingsViewCards],
      },
      {
        title: "Settings",
        routerLink: supportSettingsPath,
        accessLevel: [AccessLevel.SettingsViewCards,
          AccessLevel.SettingsViewDiscount,
          AccessLevel.SettingsViewContent,
          AccessLevel.SettingsViewBonusAndFunds,
          AccessLevel.SettingsViewPayment],
      },
    ]
  },
  {
    title: "Analytics",
    routerLink: analytics,
    accessLevel: [AccessLevel.AnalyticsViewValue,
      AccessLevel.AnalyticsViewPartners,
      AccessLevel.AnalyticsViewOverview,
      AccessLevel.AnalyticsViewCards,
      AccessLevel.AnalyticsViewBrands]
  },
];
