import {NgModule} from '@angular/core';
import {DashboardComponent} from "./dashboard.component";
import {DashboardRoutingModule} from "./dashboard.routing";
import {EmployeeModule} from "../functions/employee/employee.module";
import {ComponentsModule} from "../../components/components.module";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {CardsModule} from "../cards/cards.module";
import {CommonComponentsModule} from "../../components/common/common-components.module";
import {RolesModule} from "../functions/roles/roles.module";
import {OrdersModule} from "../orders/orders.module";
import {VendorsModule} from "../vendors/vendors.module";
import {AnalyticsModule} from "../analytics/analytics.module";
import {BrandsModule} from "../brands/brands.module";
import {TasksModule} from "../tasks/tasks.module";
import {SupportModule} from "../support/support.module";

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    NgZorroAntdModule,
    DashboardRoutingModule,
    ComponentsModule,

    CommonComponentsModule,
    EmployeeModule,
    RolesModule,
    CardsModule,
    OrdersModule,
    VendorsModule,
    AnalyticsModule,
    BrandsModule,
    TasksModule,
    SupportModule,
  ],
  exports: [
    DashboardComponent
  ],
  providers: [],
  bootstrap: []
})
export class DashboardModule {
}
