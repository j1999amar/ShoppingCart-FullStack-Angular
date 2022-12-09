import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent {
  constructor(private api: ApiService,private route:Router) {}
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
          this.route.navigate(['/userLogin'])
        }
      )
    }else{
      alert ("failed")
      this.name = '';
      this.address = '';
      this.phone = '';
      this.userLogin = '';
      this.password = '';
      this.confirmPassword = '';
    }
  };
}
