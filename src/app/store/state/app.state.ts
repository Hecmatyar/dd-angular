import {RouterReducerState} from '@ngrx/router-store';
import {IAuthState, initialAuthState} from "./auth.state";
import {ICardsState, initialCardsState} from "./cards.state";
import {initialVendorsState, IVendorsState} from "./vendors/vendors.state";
import {initialOrdersState, IOrdersState} from "./order/orders.state";
import {IEmployeeState, initialEmployeeState} from "./employee.state";
import {initialRolesState, IRolesState} from "./roles.state";
import {IMobileOrdersState, initialMobileOrdersState} from "./order/mobile-orders.state";
import {IBulkOrdersState, initialBulkOrdersState} from "./order/bulk-orders.state";
import {initialPartnerOrdersState, IPartnerOrdersState} from "./order/partners-orders.state";
import {initialTransactionsState, ITransactionState} from "./transactions.state";
import {IBulkVendorsState, initialBulkVendorsState} from "./vendors/bulk-vendors.state";
import {IMobileVendorsState, initialMobileVendorsState} from "./vendors/mobile-vendors.state";
import {initialPartnersVendorsState, IPartnersVendorsState} from "./vendors/partners-vendors.state";
import {initialSettingsState, ISettingsState} from "./settings.state";
import {initialPartnersState, IPartnersState} from "./partners.state";
import {IBrandsState, initialBrandsState} from "./brands.state";
import {IBrandsCategoryState, initialBrandsCategoryState} from "./brands-category.state";
import {IAnalyticsState, initialAnalyticsState} from "./analytics.state";
import {ITasksState, initialTasksState} from "./tasks.state";
import {initialSupportState, ISupportState} from "./support.state";

export interface IAppState {
  router?: RouterReducerState;
  auth: IAuthState;
  cards: ICardsState;
  employees: IEmployeeState;
  roles: IRolesState;
  transactions: ITransactionState;
  orders: IOrdersState;
  mobileOrders: IMobileOrdersState;
  bulkOrders: IBulkOrdersState;
  partnerOrders: IPartnerOrdersState;
  vendors: IVendorsState;
  bulkVendors: IBulkVendorsState;
  mobileVendors: IMobileVendorsState;
  partnersVendors: IPartnersVendorsState;
  settings: ISettingsState;
  partners: IPartnersState;
  brands: IBrandsState;
  brandsCategories: IBrandsCategoryState;
  analytics: IAnalyticsState;
  tasks: ITasksState;
  support: ISupportState;
}

export const initialAppState: IAppState = {
  auth: initialAuthState,
  cards: initialCardsState,
  employees: initialEmployeeState,
  roles: initialRolesState,
  transactions: initialTransactionsState,
  orders: initialOrdersState,
  mobileOrders: initialMobileOrdersState,
  bulkOrders: initialBulkOrdersState,
  partnerOrders: initialPartnerOrdersState,
  vendors: initialVendorsState,
  bulkVendors: initialBulkVendorsState,
  mobileVendors: initialMobileVendorsState,
  partnersVendors: initialPartnersVendorsState,
  settings: initialSettingsState,
  partners: initialPartnersState,
  brands: initialBrandsState,
  brandsCategories: initialBrandsCategoryState,
  analytics: initialAnalyticsState,
  tasks: initialTasksState,
  support: initialSupportState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
