import {BulkOrdersTableComponent} from "./bulk/bulk-orders-table/bulk-orders-table.component";
import {MobileOrdersTableComponent} from "./mobile/mobile-orders-table/mobile-orders-table.component";
import {PartnersOrdersTableComponent} from "./partners/partners-orders-table/partners-orders-table.component";
import {BulkOrdersFilterComponent} from "./bulk/bulk-orders-filter/bulk-orders-filter.component";
import {MobileOrdersFilterComponent} from "./mobile/mobile-orders-filter/mobile-orders-filter.component";
import {PartnersOrdersFilterComponent} from "./partners/partners-orders-filter/partners-orders-filter.component";
import {BulkOrdersRowTemplateComponent} from "./bulk/bulk-orders-table/bulk-orders-row-template/bulk-orders-row-template.component";
import {MobileOrdersRowTemplateComponent} from "./mobile/mobile-orders-table/mobile-orders-row-template/mobile-orders-row-template.component";
import {PartnersOrdersRowTemplateComponent} from "./partners/partners-orders-table/partners-orders-row-template/partners-orders-row-template.component";
import {PartnersOrdersCreateComponent} from "./partners/partners-orders-create/partners-orders-create.component";
import {TransactionsFilterComponent} from "./transactions/transactions-filter/transactions-filter.component";
import {TransactionsTableComponent} from "./transactions/transactions-table/transactions-table.component";
import {TransactionsCreateComponent} from "./transactions/transactions-create/transactions-create.component";
import {BulkOrdersFormComponent} from "./bulk/bulk-orders-form/bulk-orders-form.component";
import {PartnersOrdersFormComponent} from "./partners/partners-orders-form/partners-orders-form.component";
import {TransactionsFormUserComponent} from "./transactions/transactions-form/transactions-form-user/transactions-form-user.component";
import {TransactionsFormBulkComponent} from "./transactions/transactions-form/transactions-form-bulk/transactions-form-bulk.component";
import {TransactionsFormPartnersComponent} from "./transactions/transactions-form/transactions-form-partners/transactions-form-partners.component";

export const ordersComponents = [
  BulkOrdersTableComponent,
  BulkOrdersFilterComponent,
  BulkOrdersRowTemplateComponent,
  BulkOrdersFormComponent,

  MobileOrdersTableComponent,
  MobileOrdersFilterComponent,
  MobileOrdersRowTemplateComponent,

  PartnersOrdersTableComponent,
  PartnersOrdersFilterComponent,
  PartnersOrdersRowTemplateComponent,
  PartnersOrdersCreateComponent,
  PartnersOrdersFormComponent,

  TransactionsFilterComponent,
  TransactionsTableComponent,
  TransactionsCreateComponent,
  TransactionsFormUserComponent,
  TransactionsFormBulkComponent,
  TransactionsFormPartnersComponent,
];
