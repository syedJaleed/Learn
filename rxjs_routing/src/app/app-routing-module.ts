import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RxjsBasic} from './components/rxjs-basic/rxjs-basic'

const routes: Routes = [
  {path: "", component: RxjsBasic}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
