import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {NotFoundComponent} from './not-found/not-found.component';
import {NavigationComponent} from './common/navigation/navigation.component';
import {UiComponentsModule} from "./ui/ui-components.module";
import {PagesModule} from "./pages/pages.module";
import {CommonComponentsModule} from "./common/common-components.module";
import {IconsModule} from "./icons/icons.module";
import { AccessDeniedComponent } from './access-denied/access-denied.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    NavigationComponent,
    AccessDeniedComponent,
  ],
  imports: [
    NgZorroAntdModule,
    RouterModule,
    CommonModule,

    UiComponentsModule,
    PagesModule,
    CommonComponentsModule,
    IconsModule,
  ],
  exports: [
    NavigationComponent,
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule {
}
