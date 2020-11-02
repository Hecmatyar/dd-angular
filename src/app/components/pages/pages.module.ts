import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgZorroAntdModule} from "ng-zorro-antd";

import {UiComponentsModule} from "../ui/ui-components.module";
import {CommonComponentsModule} from "../common/common-components.module";
import {IconsModule} from "../icons/icons.module";
import {cardsComponents} from "./cards/cards-components";
import {functionsComponents} from "./functions/functions-component";
import {ordersComponents} from "./orders/orders-component";
import {vendorsComponents} from "./vendors/vendors-component";
import {analyticsComponents} from './analytics/analytics.component';
import {brandsComponents} from "./brands/brands-components";
import {DirectivesModule} from "../../core/directives/directives.module";
import {tasksComponents} from "./tasks/tasks.component";
import {supportModules} from "./support/support.components";
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";

@NgModule({
  declarations: [
    ...cardsComponents,
    ...functionsComponents,
    ...ordersComponents,
    ...vendorsComponents,
    ...analyticsComponents,
    ...brandsComponents,
    ...tasksComponents,
    ...supportModules,
  ],
  imports: [
    NgZorroAntdModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiComponentsModule,
    CommonComponentsModule,
    IconsModule,
    DirectivesModule,
    CKEditorModule,
  ],
  exports: [
    ...cardsComponents,
    ...functionsComponents,
    ...ordersComponents,
    ...vendorsComponents,
    ...analyticsComponents,
    ...brandsComponents,
    ...tasksComponents,
    ...supportModules,
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule {
}
