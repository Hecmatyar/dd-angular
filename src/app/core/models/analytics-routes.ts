import {IHorizontalMenuItem} from "../interfaces/gorizontal-menu-item";
import {
  analyticsBrandsPath,
  analyticsCardsPath,
  analyticsOverviewPath,
  analyticsPartnersPath,
  analyticsValuePath
} from "../path";
import {AccessLevel} from "../../api/dto/AccessLevel.g";

export const analyticsRoutes: IHorizontalMenuItem[] = [
  {
    title: "Overview",
    routerLink: analyticsOverviewPath,
    credential: AccessLevel.AnalyticsViewOverview
  },
  {
    title: "Cards",
    routerLink: analyticsCardsPath,
    credential: AccessLevel.AnalyticsViewCards
  },
  {
    title: "Brands",
    routerLink: analyticsBrandsPath,
    credential: AccessLevel.AnalyticsViewBrands
  },
  {
    title: "Value",
    routerLink: analyticsValuePath,
    credential: AccessLevel.AnalyticsViewValue
  },
  {
    title: "Partners",
    routerLink: analyticsPartnersPath,
    credential: AccessLevel.AnalyticsViewPartners
  }
];
