import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PagesModule} from "../../components/pages/pages.module";
import {BulkVendorsContainerComponent} from './bulk/bulk-vendors-container/bulk-vendors-container.component';
import {MobileVendorsContainerComponent} from "./mobile/mobile-vendors-container/mobile-vendors-container.component";
import {PartnersVendorsContainerComponent} from './partners/partners-vendors-container/partners-vendors-container.component';
import {BulkVendorsCreateContainerComponent} from './bulk/bulk-vendors-create-container/bulk-vendors-create-container.component';
import {PartnersVendorsCreateContainerComponent} from './partners/partners-vendors-create-container/partners-vendors-create-container.component';
import {BulkVendorsEditContainerComponent} from './bulk/bulk-vendors-edit-container/bulk-vendors-edit-container.component';
import {MobileVendorsEditContainerComponent} from './mobile/mobile-vendors-edit-container/mobile-vendors-edit-container.component';
import {PartnersVendorsEditContainerComponent} from './partners/partners-vendors-edit-container/partners-vendors-edit-container.component';
import { MobileVendorsInfoContainerComponent } from './mobile/mobile-vendors-info-container/mobile-vendors-info-container.component';

@NgModule({
  declarations: [
    BulkVendorsContainerComponent,
    MobileVendorsContainerComponent,
    PartnersVendorsContainerComponent,
    BulkVendorsCreateContainerComponent,
    BulkVendorsEditContainerComponent,
    PartnersVendorsCreateContainerComponent,
    PartnersVendorsEditContainerComponent,
    MobileVendorsEditContainerComponent,
    MobileVendorsInfoContainerComponent,
  ],
  imports: [
    CommonModule,
    PagesModule,
  ],
  exports: [],
  providers: [],
  bootstrap: []
})
export class VendorsModule {
}
