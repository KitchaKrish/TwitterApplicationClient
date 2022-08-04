import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpostComponent } from './Post/addpost/addpost.component';
import { ListtweetComponent } from './Post/listtweet/listtweet.component';
import { MytweetComponent } from './Post/mytweet/mytweet.component';
import { ForgotComponent } from './User/forgot/forgot.component';
import { LoginComponent } from './User/login/login.component';
import { LogoutComponent } from './User/logout/logout.component';
import { RegisterComponent } from './User/register/register.component';
import { SuccessComponent } from './User/success/success.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"registersuccess", component:SuccessComponent},
  {path:"alltweet", component:ListtweetComponent},
  {path:"addpost", component:AddpostComponent},
  {path:"mytweet", component:MytweetComponent},
  {path:"logout", component:LogoutComponent},
  {path:"forgot", component:ForgotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
