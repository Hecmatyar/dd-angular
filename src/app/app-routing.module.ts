import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {accessDeniedPath, notFoundPath} from "./core/path";
import {AuthComponent} from "./auth/auth.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AccessDeniedComponent} from "./components/access-denied/access-denied.component";

const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent,
    pathMatch: 'full'
  },
  {
    path: accessDeniedPath,
    component: AccessDeniedComponent,
  },
  {
    path: '**',
    redirectTo: notFoundPath
  },
  {
    path: notFoundPath,
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
