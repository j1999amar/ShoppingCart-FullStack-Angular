import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
const myRouter:Routes=[{
  path:"userLogin",
  component:UserLoginPageComponent
},{
  path:"",
  component:AdminLoginComponent
},{
  path:"userRegistration",
  component:UserRegistrationComponent
},{
  path:"addProduct",
  component:AddProductComponent
},
{
  path:'viewProduct',
  component:ViewProductComponent
},{
  path:'searchProduct',
  component:SearchProductComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginPageComponent,
    UserRegistrationComponent,
    NavbarComponent,
    AddProductComponent,
    ViewProductComponent,
    SearchProductComponent,
    AdminNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,RouterModule.forRoot(myRouter),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
