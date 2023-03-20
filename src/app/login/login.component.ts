import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = "";
  pswd: string = "";
  error_message: string = "";
  router: Router;
  btnText: String;

  constructor(router: Router) {
    this.router = router
  }

  async checkCredentials(): Promise<Boolean> {
    try {
      const user = await Auth.signIn(this.username, this.pswd);
      console.log(user);
      if (user != null) {
        let groups: any[] = user.signInUserSession.idToken.payload['cognito:groups']
        let usertype = 'NormalUser'
        if(groups.indexOf("VxrAdmin") !== -1) {
          usertype = 'VxrAdmin'
        } else if(groups.indexOf('CompanyAdmin') !== -1) {
          usertype = 'CompanyAdmin'
        }
        localStorage.setItem('accessLevel', usertype)
        localStorage.setItem('login', 'true');
        return true
      };
    }
    catch (e) {
      return false;
    }
  }

  async login_navigation(): Promise<void> {
    if(await this.checkCredentials()) {
      this.router.navigateByUrl("/portal")
    } else {
      this.username = ""
      this.pswd = ""
      this.error_message = "Invalid username or password."
    }
  }
}
