import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MobileOrdersContainerComponent} from './mobile/mobile-orders-container/mobile-orders-container.component';
import {BulkOrdersContainerComponent} from './bulk/bulk-orders-container/bulk-orders-container.component';
import {PartnersOrdersContainerComponent} from './partners/partners-orders-container/partners-orders-container.component';
import {PagesModule} from "../../components/pages/pages.module";
import {TransactionsContainerComponent} from './transactions/transactions-container/transactions-container.component';
import {BulkOrdersCreateContainerComponent} from './bulk/bulk-orders-create-container/bulk-orders-create-container.component';
import {PartnersOrdersCreateContainerComponent} from './partners/partners-orders-create-container/partners-orders-create-container.component';
import {TransactionsCreateUserContainerComponent} from './transactions/transactions-create-container/transactions-create-user-container/transactions-create-user-container.component';
import {TransactionsCreateBulkContainerComponent} from './transactions/transactions-create-container/transactions-create-bulk-container/transactions-create-bulk-container.component';
import {TransactionsCreatePartnersContainerComponent} from './transactions/transactions-create-container/transactions-create-partners-container/transactions-create-partners-container.component';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {CommonComponentsModule} from "../../components/common/common-components.module";

@NgModule({
  declarations: [
    MobileOrdersContainerComponent,

    BulkOrdersContainerComponent,
    BulkOrdersCreateContainerComponent,

    PartnersOrdersContainerComponent,
    PartnersOrdersCreateContainerComponent,

    TransactionsContainerComponent,
    TransactionsCreateUserContainerComponent,
    TransactionsCreateBulkContainerComponent,
    TransactionsCreatePartnersContainerComponent,
  ],
  imports: [
    CommonModule,
    PagesModule,
    NgZorroAntdModule,
    CommonComponentsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: []
})
export class OrdersModule {
}
