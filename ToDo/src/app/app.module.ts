import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './compoents/home/home.component';
import { ValidationsComponent } from './compoents/validations/validations.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './authentication/login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { AuthServiceService } from './authentication/services/auth-service.service';
import { ChildComponent } from './compoents/home/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ValidationsComponent,
    LoginComponent,
    HeaderComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  exports:[
    ReactiveFormsModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
