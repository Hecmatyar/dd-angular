import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PagesModule} from "../../components/pages/pages.module";
import {BrandsContainerComponent} from './brands-container/brands-container.component';
import {BrandsCreateContainerComponent} from './brands-create-container/brands-create-container.component';
import {BrandsEditContainerComponent} from './brands-edit-container/brands-edit-container.component';

@NgModule({
  declarations: [
    BrandsContainerComponent,
    BrandsCreateContainerComponent,
    BrandsEditContainerComponent],
  imports: [
    CommonModule,
    PagesModule,
  ],
  exports: [],
  providers: [],
  bootstrap: []
})
export class BrandsModule {
}
