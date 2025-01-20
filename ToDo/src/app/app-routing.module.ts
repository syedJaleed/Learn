import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compoents/home/home.component';
import { ValidationsComponent } from './compoents/validations/validations.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'validations', component: ValidationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
