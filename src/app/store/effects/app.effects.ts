import {AuthEffects} from "./auth.effects";
import {CardsEffects} from "./cards.effects";
import {VendorsEffects} from "./vendors/vendors.effects";
import {OrdersEffects} from "./order/orders.effects";
import {EmployeeEffects} from "./employee.effects";
import {RolesEffects} from "./roles.effects";
import {MobileOrdersEffects} from "./order/mobile-orders.effects";
import {BulkOrdersEffects} from "./order/bulk-orders.effects";
import {PartnerOrdersEffects} from "./order/partners-orders.effects";
import {TransactionsEffects} from "./transactions.effects";
import {MobileVendorsEffects} from "./vendors/mobile-vendors.effects";
import {PartnersVendorsEffects} from "./vendors/partners-vendors.effects";
import {BulkVendorsEffects} from "./vendors/bulk-vendors.effects";
import {SettingsEffects} from "./settings.effects";
import {PartnersEffects} from "./partners.effects";
import {BrandsEffects} from "./brands.effects";
import {BrandsCategoryEffects} from "./brands-category.effects";
import {AnalyticsEffects} from "./analytics.effects";
import {TasksEffects} from "./tasks.effects";
import {SupportEffects} from "./support.effects";

export const appEffects = [
  AuthEffects,
  CardsEffects,
  OrdersEffects,
  MobileOrdersEffects,
  BulkOrdersEffects,
  PartnerOrdersEffects,
  EmployeeEffects,
  RolesEffects,
  TransactionsEffects,
  VendorsEffects,
  MobileVendorsEffects,
  PartnersVendorsEffects,
  BulkVendorsEffects,
  SettingsEffects,
  PartnersEffects,
  BrandsEffects,
  BrandsCategoryEffects,
  AnalyticsEffects,
  TasksEffects,
  SupportEffects,
];
