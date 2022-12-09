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

  constructor(private api: ApiService, private route: Router) {}

  userLogin = '';
  password = '';

  readValue = () => {
    let userLoginData = {
      userLogin: this.userLogin,
      password: this.password,
    };
    if (this.userLogin != '' && this.password != '') {
      this.api.searchUser(userLoginData).subscribe((response: any) => {
        this.data = response;
        console.log(this.data);
        if (response.length != 0) {
          if (
            this.userLogin == this.data[0].userLogin &&
            this.password == this.data[0].password
          ) {
            console.log(this.data, this.userLogin, this.password);
            this.route.navigate(['/userViewProduct']);
          } else {alert("something is mismatching")
          }
        } else {
          alert('Login Failed');
        }
      });
    } else {
      alert('invalid login');
    }
  };
}
