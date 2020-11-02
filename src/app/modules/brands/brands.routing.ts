import {Routes} from "@angular/router";
import {AccessLevel} from "../../api/dto/AccessLevel.g";
import {AuthGuardService} from "../../core/services/auth/auth-guard.service";
import {brandCreatePath, brandEditPath, brandListPath} from "../../core/path";
import {BrandsContainerComponent} from "./brands-container/brands-container.component";
import {BrandsCreateContainerComponent} from "./brands-create-container/brands-create-container.component";
import {BrandsEditContainerComponent} from "./brands-edit-container/brands-edit-container.component";

export const brandsRoutes: Routes = [
  {
    path: brandListPath,
    component: BrandsContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.BrandPageView}
  },
  {
    path: brandCreatePath,
    component: BrandsCreateContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.BrandCreate}
  },
  {
    path: brandEditPath,
    component: BrandsEditContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.BrandEdit}
  },
];
