import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.css'],
})
export class UserLoginPageComponent {
    data: any = {};

  constructor(private api: ApiService) {
    
  }

  userLogin = '';
  password = '';

  readValue = () => {
    let userLoginData = {
      userLogin: this.userLogin,
    };
    this.api.searchUser(userLoginData).subscribe((response) => {
      this.data = response;
      console.log(this.data[0].userLogin)
      if(this.userLogin==this.data[0].userLogin&&this.password==this.data[0].password){
      }else{
        alert("Login Failed")
      }
    });
   
  };
}
