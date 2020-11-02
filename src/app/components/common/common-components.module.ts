import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {LogoutComponent} from "./logout/logout.component";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {DateEditSwitcherComponent} from "./switchers/date-edit-switcher/date-edit-switcher.component";
import {NumberEditSwitcherComponent} from "./switchers/number-edit-switcher/number-edit-switcher.component";
import {TextEditSwitcherComponent} from "./switchers/text-edit-switcher/text-edit-switcher.component";
import {CommentComponent} from './comment/comment.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BaseFilterTemplateComponent} from '../template/base-filter-template/base-filter-template.component';
import {DirectivesModule} from "../../core/directives/directives.module";
import {UserStatusComponent} from './status/user-status.component';
import {BaseModalTemplateComponent} from '../template/base-modal-template/base-modal-template.component';
import {DownloadFileComponent} from './download-file/download-file.component';
import {FormFooterActionComponent} from './form-footer-action/form-footer-action.component';
import {UiComponentsModule} from "../ui/ui-components.module";
import {AccessBuilderComponent} from './access-builder/access-builder.component';
import {BaseFormTemplateComponent} from '../template/base-form-template/base-form-template.component';
import {TableCommentComponent} from './table-comment/table-comment.component';
import {BulkOrderBuilderComponent} from './order-builder/bulk-order-builder/bulk-order-builder.component';
import {PartnersOrderBuilderComponent} from './order-builder/partners-order-builder/partners-order-builder.component';
import {IconsModule} from "../icons/icons.module";
import {HorizontalMenuComponent} from './horizontal-menu/horizontal-menu.component';
import {WrapperWithHeaderComponent} from './wrapper-with-header/wrapper-with-header.component';
import {UploadFileComponent} from './upload-file/upload-file.component';
import {TransactionsOrderBuilderComponent} from './order-builder/transactions-order-builder/transactions-order-builder.component';
import { PaymentMethodsBuilderComponent } from './payment-methods-builder/payment-methods-builder.component';

const components = [
  LogoutComponent,
  DateEditSwitcherComponent,
  NumberEditSwitcherComponent,
  TextEditSwitcherComponent,
  CommentComponent,
  BaseFilterTemplateComponent,
  UserStatusComponent,
  BaseModalTemplateComponent,
  DownloadFileComponent,
  FormFooterActionComponent,
  AccessBuilderComponent,
  BaseFormTemplateComponent,
  TableCommentComponent,
  BulkOrderBuilderComponent,
  HorizontalMenuComponent,
  WrapperWithHeaderComponent,
  PartnersOrderBuilderComponent,
  TransactionsOrderBuilderComponent,
  UploadFileComponent,
];

@NgModule({
  declarations: [
    ...components,
    PaymentMethodsBuilderComponent,
  ],
  imports: [
    NgZorroAntdModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    DirectivesModule,
    UiComponentsModule,
    IconsModule,
    RouterModule,
  ],
  exports: [
    ...components,
    PartnersOrderBuilderComponent,
    PaymentMethodsBuilderComponent
  ],
  providers: [],
  bootstrap: []
})
export class CommonComponentsModule {
}
