import {Routes} from "@angular/router";
import {AccessLevel} from "../../api/dto/AccessLevel.g";
import {AuthGuardService} from "../../core/services/auth/auth-guard.service";
import {
  bulkVendorsCreatePath, bulkVendorsEditPath,
  bulkVendorsListPath, partnersVendorsCreatePath, partnersVendorsEditPath,
  partnersVendorsListPath,
  userVendorsEditPath, userVendorsInfoPath,
  userVendorsListPath
} from "../../core/path";
import {MobileVendorsContainerComponent} from "./mobile/mobile-vendors-container/mobile-vendors-container.component";
import {BulkVendorsContainerComponent} from "./bulk/bulk-vendors-container/bulk-vendors-container.component";
import {PartnersVendorsContainerComponent} from "./partners/partners-vendors-container/partners-vendors-container.component";
import {MobileVendorsEditContainerComponent} from "./mobile/mobile-vendors-edit-container/mobile-vendors-edit-container.component";
import {BulkVendorsCreateContainerComponent} from "./bulk/bulk-vendors-create-container/bulk-vendors-create-container.component";
import {PartnersVendorsCreateContainerComponent} from "./partners/partners-vendors-create-container/partners-vendors-create-container.component";
import {BulkVendorsEditContainerComponent} from "./bulk/bulk-vendors-edit-container/bulk-vendors-edit-container.component";
import {PartnersVendorsEditContainerComponent} from "./partners/partners-vendors-edit-container/partners-vendors-edit-container.component";
import {MobileVendorsInfoContainerComponent} from "./mobile/mobile-vendors-info-container/mobile-vendors-info-container.component";

export const vendorsRoutes: Routes = [
  {
    path: userVendorsListPath,
    component: MobileVendorsContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.UserVendorsPageView}
  },
  {
    path: userVendorsInfoPath,
    component: MobileVendorsInfoContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.UserVendorsMoreDetails}
  },
  {
    path: bulkVendorsListPath,
    component: BulkVendorsContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.BulkSalesVendorsPageView}
  },
  {
    path: partnersVendorsListPath,
    component: PartnersVendorsContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.PartnersSalesVendorsPageView}
  },
  {
    path: userVendorsEditPath,
    component: MobileVendorsEditContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.UserVendorsEdit}
  },
  {
    path: bulkVendorsEditPath,
    component: BulkVendorsEditContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.BulkSalesVendorsEdit}
  },
  {
    path: bulkVendorsCreatePath,
    component: BulkVendorsCreateContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.BulkSalesVendorsCreate}
  },
  {
    path: partnersVendorsCreatePath,
    component: PartnersVendorsCreateContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.PartnersSalesVendorsCreate}
  },
  {
    path: partnersVendorsEditPath,
    component: PartnersVendorsEditContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.PartnersSalesVendorsEdit}
  },
];
