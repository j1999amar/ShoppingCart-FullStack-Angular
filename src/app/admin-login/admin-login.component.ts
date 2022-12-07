import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(private router:Router){}
  adminUserName=""
  adminPassWord=""
  readValue=()=>{
    if(this.adminUserName=="admin"&&this.adminPassWord=="12345"){
      this.router.navigate(['/addProduct'])
    }else{
      alert ("failed")
    }
  }

}
