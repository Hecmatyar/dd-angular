import {ActionReducerMap} from '@ngrx/store';

import {routerReducer} from '@ngrx/router-store';
import {IAppState} from '../state/app.state';
import {authReducer} from "./auth.reducer";
import {cardsReducer} from "./cards.reducer";
import {vendorsReducer} from "./vendors/vendors.reducer";
import {ordersReducer} from "./orders/orders.reducer";
import {employeeReducer} from "./employee.reducer";
import {rolesReducer} from "./roles.reducer";
import {mobileOrdersReducer} from "./orders/mobile-orders.reducer";
import {bulkOrdersReducer} from "./orders/bulk-orders.reducer";
import {partnerOrdersReducer} from "./orders/partners-orders.reducer";
import {transactionsReducer} from "./transactions.reducer";
import {vendorsMobileReducer} from "./vendors/mobile-vendors.reducer";
import {vendorsBulkReducer} from "./vendors/bulk-vendors.reducer";
import {vendorsPartnersReducer} from "./vendors/partners-vendors.reducer";
import {settingsReducer} from "./settings.reducer";
import {partnersReducer} from "./partners.reducer";
import {brandsReducer} from "./brands.reducer";
import {brandsCategoryReducer} from "./brands-category.reducer";
import {analyticsReducer} from "./analytics.reducer";
import {tasksReducers} from "./tasks.reducers";
import {supportReducers} from "./support.reducer";

// tslint:disable-next-line:no-any
export const appReducer: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  auth: authReducer,
  cards: cardsReducer,
  orders: ordersReducer,
  bulkOrders: bulkOrdersReducer,
  mobileOrders: mobileOrdersReducer,
  partnerOrders: partnerOrdersReducer,
  employees: employeeReducer,
  roles: rolesReducer,
  transactions: transactionsReducer,
  vendors: vendorsReducer,
  mobileVendors: vendorsMobileReducer,
  bulkVendors: vendorsBulkReducer,
  partnersVendors: vendorsPartnersReducer,
  settings: settingsReducer,
  partners: partnersReducer,
  brands: brandsReducer,
  brandsCategories: brandsCategoryReducer,
  analytics: analyticsReducer,
  tasks: tasksReducers,
  support: supportReducers,
};
