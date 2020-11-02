import {NgModule} from '@angular/core';
import {EmployeeContainerComponent} from "./employee-container/employee-container.component";
import {PagesModule} from "../../../components/pages/pages.module";
import {CommonModule} from "@angular/common";
import {CommonComponentsModule} from "../../../components/common/common-components.module";
import {EmployeeCreateContainerComponent} from './employee-create-container/employee-create-container.component';
import {EmployeeEditContainerComponent} from './employee-edit-container/employee-edit-container.component';

@NgModule({
  declarations: [
    EmployeeContainerComponent,
    EmployeeCreateContainerComponent,
    EmployeeEditContainerComponent,
  ],
  imports: [
    PagesModule,
    CommonModule,
    CommonComponentsModule,
  ],
  exports: [
    EmployeeContainerComponent,
    EmployeeCreateContainerComponent,
    EmployeeEditContainerComponent,
  ],
  providers: [],
  bootstrap: []
})
export class EmployeeModule {
}
