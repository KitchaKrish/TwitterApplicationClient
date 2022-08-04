import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Menu/header/header.component';
import { RegisterComponent } from './User/register/register.component';
import { LoginComponent } from './User/login/login.component';
import { SuccessComponent } from './User/success/success.component';
import { ListtweetComponent } from './Post/listtweet/listtweet.component';
import { AddpostComponent } from './Post/addpost/addpost.component';
import { MytweetComponent } from './Post/mytweet/mytweet.component';
import { LogoutComponent } from './User/logout/logout.component';
import { ForgotComponent } from './User/forgot/forgot.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    SuccessComponent,
    ListtweetComponent,
    AddpostComponent,
    MytweetComponent,
    LogoutComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
