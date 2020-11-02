import {EmployeeContainerComponent} from "./employee/employee-container/employee-container.component";
import {Routes} from "@angular/router";
import {
  employeeCreatePath,
  employeeEditPath,
  employeeListPath,
  rolesCreatePath,
  rolesEditPath,
  rolesListPath
} from "../../core/path";
import {AccessLevel} from "../../api/dto/AccessLevel.g";
import {AuthGuardService} from "../../core/services/auth/auth-guard.service";
import {RolesContainerComponent} from "./roles/roles-container/roles-container.component";
import {EmployeeCreateContainerComponent} from "./employee/employee-create-container/employee-create-container.component";
import {EmployeeEditContainerComponent} from "./employee/employee-edit-container/employee-edit-container.component";
import {RolesCreateContainerComponent} from "./roles/roles-create-container/roles-create-container.component";
import {RolesEditContainerComponent} from "./roles/roles-edit-container/roles-edit-container.component";

export const functionsRoutes: Routes = [
  {
    path: employeeListPath,
    component: EmployeeContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.EmployeePageView}
  },
  {
    path: employeeCreatePath,
    component: EmployeeCreateContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.EmployeeCreate}
  },
  {
    path: employeeEditPath,
    component: EmployeeEditContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.EmployeeEdit}
  },
  {
    path: rolesListPath,
    component: RolesContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.RolesPageView}
  },
  {
    path: rolesCreatePath,
    component: RolesCreateContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.RolesRolesManage}
  },
  {
    path: rolesEditPath,
    component: RolesEditContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.RolesRolesManage}
  },
];
