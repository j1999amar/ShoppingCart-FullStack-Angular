import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
const myRouter:Routes=[{
  path:"userLogin",
  component:UserLoginPageComponent
},{
  path:"",
  component:AdminLoginComponent
},{
  path:"userRegistration",
  component:UserRegistrationComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginPageComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,RouterModule.forRoot(myRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
