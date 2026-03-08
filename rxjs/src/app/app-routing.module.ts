import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsBasicComponent } from './components/rxjs-basic/rxjs-basic.component';

const routes: Routes = [
  {path: '', component: RxjsBasicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
