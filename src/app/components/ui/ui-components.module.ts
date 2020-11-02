import {NgModule} from '@angular/core';
import {SelectComponent} from './select/select.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ButtonComponent} from './button/button.component';
import {NgZorroAntdModule, NzButtonModule} from "ng-zorro-antd";
import {BrandAutocompleteComponent} from "./autocomplete/brand-autocomplete.component";
import {VendorAutocompleteComponent} from "./autocomplete/vendor-autocomplete.component";
import {NzSelectComponent} from './nz-select/nz-select.component';
import {InputComponent} from './input/input.component';
import {InputNumberComponent} from './input-number/input-number.component';
import {DatePickerComponent} from './date-picker/date-picker.component';
import {DirectivesModule} from "../../core/directives/directives.module";
import {EmployeeAutocompleteComponent} from "./autocomplete/employee-autocomplete.component";
import {SelectGroupComponent} from './select-group/select-group.component';
import {NzSelectMultipleComponent} from './nz-select-multiple/nz-select-multiple.component';
import {IconsModule} from "../icons/icons.module";
import {PartnersVendorAutocompleteComponent} from "./autocomplete/partners-vendor-autocomplete.component";
import {TextAreaComponent} from './text-area/text-area.component';
import {InputFileComponent} from './input-file/input-file.component';
import {TransactionsVendorAutocompleteComponent} from "./autocomplete/transactions-vendor-autocomplete.component";
import {InputRangeComponent} from './input-range/input-range.component';
import {BuyerAutocompleteComponent} from "./autocomplete/buyer-autocomplete.component";
import {QuestionAnswerComponent} from './question-answer/question-answer.component';
import {QuestionAnswerGroupComponent} from './question-answer-group/question-answer-group.component';
import {ProblemGroupComponent} from './problem-group/problem-group.component';

const components = [
  SelectComponent,
  ButtonComponent,
  BrandAutocompleteComponent,
  BuyerAutocompleteComponent,
  VendorAutocompleteComponent,
  EmployeeAutocompleteComponent,
  PartnersVendorAutocompleteComponent,
  TransactionsVendorAutocompleteComponent,
  NzSelectComponent,
  InputComponent,
  InputNumberComponent,
  DatePickerComponent,
  SelectGroupComponent,
  NzSelectMultipleComponent,
  TextAreaComponent,
  InputFileComponent,
  InputRangeComponent,
  QuestionAnswerComponent,
  QuestionAnswerGroupComponent,
  ProblemGroupComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    FormsModule,
    CommonModule,
    NzButtonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    DirectivesModule,
    IconsModule,
  ],
  exports: [
    ...components,
  ],
  providers: [],
  bootstrap: []
})
export class UiComponentsModule {
}
