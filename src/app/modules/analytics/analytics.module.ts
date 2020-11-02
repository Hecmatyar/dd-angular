import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from "../../components/pages/pages.module";
import { AnalyticsOverviewContainerComponent } from './analytics-overview-container/analytics-overview-container.component';
import { AnalyticsCardsContainerComponent } from './analytics-cards-container/analytics-cards-container.component';
import { AnalyticsBrandsContainerComponent } from './analytics-brands-container/analytics-brands-container.component';
import { AnalyticsValueContainerComponent } from './analytics-value-container/analytics-value-container.component';
import { AnalyticsPartnersContainerComponent } from './analytics-partners-container/analytics-partners-container.component';
import { CommonComponentsModule } from "../../components/common/common-components.module"

@NgModule({
  declarations: [
    AnalyticsOverviewContainerComponent,
    AnalyticsCardsContainerComponent,
    AnalyticsBrandsContainerComponent,
    AnalyticsValueContainerComponent,
    AnalyticsPartnersContainerComponent
  ],
  imports: [
    CommonModule,
    PagesModule,
    CommonComponentsModule,
  ],
  exports: [],
})
export class AnalyticsModule { }
