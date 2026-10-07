import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { AuthGuard } from './gaurd/auth-guard';
import { alertForUnsavedDataGuard } from './gaurd/alert/alert-for-unsaved-data-guard';
import { User } from './components/user/user';

const routes: Routes = [
  {path: "", component: Login},
  {path: "login", component: Login},
  {path: "dashboard", component: Dashboard, canActivate: [AuthGuard], canDeactivate: [alertForUnsavedDataGuard]},
  {path: "user", component: User, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
