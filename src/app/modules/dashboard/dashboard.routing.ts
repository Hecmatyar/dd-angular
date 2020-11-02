import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {functionsRoutes} from "../functions/functions.routing";
import {employeeListPath} from "../../core/path";
import {cardsRoutes} from "../cards/cards.routing";
import {ordersRoutes} from "../orders/orders.routing";
import {vendorsRoutes} from "../vendors/vendors.routing";
import {analyticsRoutes} from "../analytics/analytics.routing";
import {brandsRoutes} from "../brands/brands.routing";
import {tasksRoutes} from "../tasks/tasks.routing";
import {supportRoutes} from "../support/support.routing";

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path: '', redirectTo: employeeListPath, pathMatch: 'full'},
      ...functionsRoutes,
      ...cardsRoutes,
      ...ordersRoutes,
      ...vendorsRoutes,
      ...analyticsRoutes,
      ...brandsRoutes,
      ...tasksRoutes,
      ...supportRoutes,
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule {
}
