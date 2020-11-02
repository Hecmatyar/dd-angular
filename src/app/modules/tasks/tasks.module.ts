import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksContainerComponent } from './tasks-container/tasks-container.component';
import {PagesModule} from "../../components/pages/pages.module";
import {CommonComponentsModule} from "../../components/common/common-components.module";
import {UiComponentsModule} from "../../components/ui/ui-components.module";

@NgModule({
  declarations: [TasksContainerComponent],
  imports: [
    CommonModule,
    PagesModule,
    CommonComponentsModule,
    UiComponentsModule,
  ]
})
export class TasksModule { }
