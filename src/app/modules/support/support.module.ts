import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesModule} from "../../components/pages/pages.module";
import {CommonComponentsModule} from "../../components/common/common-components.module";
import {UiComponentsModule} from "../../components/ui/ui-components.module";
import { SupportChangeLogContainerComponent } from './support-change-log-container/support-change-log-container.component';
import { SupportCardsContainerComponent } from './support-settings/support-cards-container/support-cards-container.component';
import { SupportBonusContainerComponent } from './support-settings/support-bonus-container/support-bonus-container.component';
import { SupportContentContainerComponent } from './support-settings/support-content-container/support-content-container.component';
import { SupportDiscountContainerComponent } from './support-settings/support-discount-container/support-discount-container.component';

@NgModule({
  declarations: [
  SupportChangeLogContainerComponent,
  SupportCardsContainerComponent,
  SupportBonusContainerComponent,
  SupportContentContainerComponent,
  SupportDiscountContainerComponent],
  imports: [
    CommonModule,
    PagesModule,
    CommonComponentsModule,
    UiComponentsModule,
  ]
})
export class SupportModule{ }
