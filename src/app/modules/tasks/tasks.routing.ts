import {Routes} from "@angular/router";
import {AuthGuardService} from "../../core/services/auth/auth-guard.service";
import {AccessLevel} from "../../api/dto/AccessLevel.g";
import {tasksListPath} from "../../core/path";
import {TasksContainerComponent} from "./tasks-container/tasks-container.component";

export const tasksRoutes: Routes = [
  {
    path: tasksListPath,
    component: TasksContainerComponent,
    canActivate: [AuthGuardService],
    data: {expectedRole: AccessLevel.TaskPageView}
  }
];
