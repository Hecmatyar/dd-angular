import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';

import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardModule} from "./modules/dashboard/dashboard.module";
import {ComponentsModule} from "./components/components.module";
import {en_US, NgZorroAntdModule, NZ_I18N} from 'ng-zorro-antd';
import {environment} from "../environments/environment";
import {appReducer} from "./store/reducers/app.reducer";
import {appEffects} from "./store/effects/app.effects";
import {AuthModule} from "./auth/auth.module";
import {ErrorInterceptor} from "./core/services/auth/error.interceptor";
import {AuthGuardService} from "./core/services/auth/auth-guard.service";
import {NotificationService} from "./core/services/notification.service";
import {AccessWorker} from "./core/access-worker";
import {apiRequests} from "./core/api-requests";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([...appEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    NgZorroAntdModule,

    AuthModule,
    DashboardModule,
    AppRoutingModule,
    ComponentsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: NZ_I18N, useValue: en_US},
    ...apiRequests,
    AuthGuardService,
    AccessWorker,
    NotificationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
