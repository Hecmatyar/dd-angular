import {NgModule} from '@angular/core';
import {PagesModule} from "../../../components/pages/pages.module";
import {CommonModule} from "@angular/common";
import {CommonComponentsModule} from "../../../components/common/common-components.module";
import {RolesContainerComponent} from './roles-container/roles-container.component';
import {UiComponentsModule} from "../../../components/ui/ui-components.module";
import { RolesCreateContainerComponent } from './roles-create-container/roles-create-container.component';
import { RolesEditContainerComponent } from './roles-edit-container/roles-edit-container.component';

@NgModule({
  declarations: [
    RolesContainerComponent,
    RolesCreateContainerComponent,
    RolesEditContainerComponent,
  ],
  imports: [
    PagesModule,
    CommonModule,
    CommonComponentsModule,
    UiComponentsModule

  ],
  exports: [
    RolesContainerComponent,
  ],
  providers: [],
  bootstrap: []
})
export class RolesModule {
}
