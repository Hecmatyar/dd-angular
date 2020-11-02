import {Routes} from "@angular/router";
import {AccessLevel} from "../../api/dto/AccessLevel.g";
import {AuthGuardService} from "../../core/services/auth/auth-guard.service";
import {
  bulkOrderListPath,
  cardBulkOrderCreatePath,
  partnersOrderCreatePath,
  partnersOrderListPath,
  transactionsOrderCreateBulkPath,
  transactionsOrderCreatePartnersPath,
  transactionsOrderCreateUserPath,
  transactionsOrderListPath,
  userOrderListPath
} from "../../core/path";
import {MobileOrdersContainerComponent} from "./mobile/mobile-orders-container/mobile-orders-container.component";
import {BulkOrdersContainerComponent} from "./bulk/bulk-orders-container/bulk-orders-container.component";
import {PartnersOrdersContainerComponent} from "./partners/partners-orders-container/partners-orders-container.component";
import {TransactionsContainerComponent} from "./transactions/transactions-container/transactions-container.component";
import {BulkOrdersCreateContainerComponent} from "./bulk/bulk-orders-create-container/bulk-orders-create-container.component";
import {PartnersOrdersCreateContainerComponent} from "./partners/partners-orders-create-container/partners-orders-create-container.component";
import {TransactionsCreateBulkContainerComponent} from "./transactions/transactions-create-container/transactions-create-bulk-container/transactions-create-bulk-container.component";
import {TransactionsCreateUserContainerComponent} from "./transactions/transactions-create-container/transactions-create-user-container/transactions-create-user-container.component";
import {TransactionsCreatePartnersContainerComponent} from "./transactions/transactions-create-container/transactions-create-partners-container/transactions-create-partners-container.component";

export const ordersRoutes: Routes = [
  {
    path: userOrderListPath,
    component: MobileOrdersContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.UserOrdersPageView}
  },
  {
    path: bulkOrderListPath,
    component: BulkOrdersContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.BulkOrdersPageView}
  },
  {
    path: partnersOrderListPath,
    component: PartnersOrdersContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.PartnersOrdersPageView}
  },
  {
    path: transactionsOrderListPath,
    component: TransactionsContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.TransactionsPageView}
  },
  {
    path: cardBulkOrderCreatePath,
    component: BulkOrdersCreateContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.CardBulkOrderCreate}
  },
  {
    path: partnersOrderCreatePath,
    component: PartnersOrdersCreateContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.PartnersOrdersOrderCreate}
  },
  {
    path: transactionsOrderCreateBulkPath,
    component: TransactionsCreateBulkContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.TransactionsCreateBulkSell}
  },
  {
    path: transactionsOrderCreateUserPath,
    component: TransactionsCreateUserContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.TransactionsCreateUser}
  },
  {
    path: transactionsOrderCreatePartnersPath,
    component: TransactionsCreatePartnersContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.TransactionsCreatePartners}
  },
];
