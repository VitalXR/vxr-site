import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  error_message: string = "";
  router: Router;
  btnText: String;

  constructor(router: Router) {
    this.router = router
  }

  async checkCredentials(): Promise<Boolean> {
    try {
      const user = await Auth.signIn(this.username, this.password);
      console.log(user);
      if (user != null) return true;
    }
    catch (e) {
      return false;
    }
  }

  async login_navigatio(): Promise<void> {
    if(await this.checkCredentials()) {
      this.router.navigateByUrl("/portal")
    } else {
      this.username = ""
      this.password = ""
      this.error_message = "Invalid username or password."
    }
  }
}
