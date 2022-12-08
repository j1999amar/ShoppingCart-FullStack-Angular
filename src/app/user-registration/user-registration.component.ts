import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent {
  constructor(private api: ApiService) {}
  name = '';
  address = '';
  phone = '';
  userLogin = '';
  password = '';
  confirmPassword = '';
  readValue = () => {
    let data:any = {
      
      "userLogin": this.userLogin,
      "password": this.password,
    };
    
    if(this.password==this.confirmPassword&&this.userLogin!=""){
      this.api.addUser(data).subscribe(
        (response)=>{
          console.log(response)
        }
      )
    }
  };
}
