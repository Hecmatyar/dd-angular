import {Routes} from "@angular/router";
import {AnalyticsOverviewContainerComponent} from "./analytics-overview-container/analytics-overview-container.component";
import {AnalyticsCardsContainerComponent} from './analytics-cards-container/analytics-cards-container.component';
import {AnalyticsBrandsContainerComponent} from './analytics-brands-container/analytics-brands-container.component';
import {AnalyticsValueContainerComponent} from './analytics-value-container/analytics-value-container.component';
import {AnalyticsPartnersContainerComponent} from './analytics-partners-container/analytics-partners-container.component';
import {AuthGuardService} from "../../core/services/auth/auth-guard.service";
import {AccessLevel} from "../../api/dto/AccessLevel.g";
import {
  analytics,
  analyticsBrandsPath,
  analyticsCardsPath,
  analyticsOverviewPath,
  analyticsPartnersPath,
  analyticsValuePath
} from "../../core/path";

export const analyticsRoutes: Routes = [
  {
    path: analytics,
    redirectTo: analyticsOverviewPath,
    canActivate: [ AuthGuardService],
  },
  {
    path: analyticsOverviewPath,
    component: AnalyticsOverviewContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.AnalyticsViewOverview}
  },
  {
    path: analyticsCardsPath,
    component: AnalyticsCardsContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.AnalyticsViewCards}
  },
  {
    path: analyticsBrandsPath,
    component: AnalyticsBrandsContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.AnalyticsViewBrands}
  },
  {
    path: analyticsValuePath,
    component: AnalyticsValueContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.AnalyticsViewValue}
  },
  {
    path: analyticsPartnersPath,
    component: AnalyticsPartnersContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.AnalyticsViewPartners}
  }
];
