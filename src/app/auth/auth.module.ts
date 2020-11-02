import {NgModule} from '@angular/core';
import {AuthComponent} from "./auth.component";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AuthService} from "../core/services/auth/auth.service";

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [],
  providers: [AuthService],
  bootstrap: []
})
export class AuthModule {
}
