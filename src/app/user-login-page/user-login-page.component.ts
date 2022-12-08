import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.css'],
})
export class UserLoginPageComponent {
    data: any = {};

  constructor(private api: ApiService,private route:Router) {
    
  }

  userLogin = ''; 
  password = '';

  readValue = () => {
    let userLoginData = {
      "userLogin": this.userLogin,
      "password":this.password
    };
    this.api.searchUser(userLoginData).subscribe((response) => {
      this.data = response;
      console.log(this.data)
      if(this.userLogin==this.data[0].userLogin&&this.password==this.data[0].password){
        console.log(this.data,this.userLogin,this.password)
        this.route.navigate(['/userViewProduct'])
      }else{
        alert("Login Failed")
      }
    });
   
  };
}
