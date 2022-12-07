import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  adminUserName=""
  adminPassWord=""
  readValue=()=>{
    if(this.adminUserName=="admin"&&this.adminPassWord=="12345"){
      alert("ok")
    }else{
      alert ("failed")
    }
  }

}
