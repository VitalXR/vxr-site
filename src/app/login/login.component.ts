import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { PortalService } from '../portal/portal.service';

export enum LoginResponse {
  SUCCESS,
  UNAUTHORIZED,
  FAILURE,
  NEW_PASSWORD_REQUIRED
}

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [PortalService]
})
export class LoginComponent {
  username: string = "";
  pswd: string = "";
  error_message: string = "";
  router: Router;
  btnText: String;
  needConfirm: boolean;

  newPasswd = '';
  submit = false;
  user: any;

  constructor(private portalService: PortalService, router: Router) {
    this.router = router
  }

  async checkCredentials(): Promise<LoginResponse> {
    try {
      this.user = await Auth.signIn(this.username, this.pswd);
      console.log(this.user);
      if (this.user.challengeName = 'NEW_PASSWORD_REQUIRED' && this.user.signInUserSession === null)
        return LoginResponse.NEW_PASSWORD_REQUIRED;

      return LoginResponse.SUCCESS;
    }
    catch (e) {
      if (e.name === 'NotAuthorizedException') return LoginResponse.UNAUTHORIZED;
      return LoginResponse.FAILURE;
    }
  }

  async onSubmit() {
    if (!this.isValidPasswd(this.newPasswd)) {
      this.error_message = "invalid password";
      return;
    }
    try {
      this.user = await this.portalService.confirmUser(this.user, this.newPasswd);
      this.onSignInSuccess('/portal');
      this.needConfirm = false;
    }
    catch (e) {
      console.log(e);
      console.log(Object.entries(e));
    }
  }

  onSignInSuccess(url: string) {
    let groups: string[] = this.user.signInUserSession.idToken.payload['cognito:groups'];

    let usertype = 'NonAdmin';
    if(groups.indexOf("VxrAdmin") !== -1) usertype = 'VxrAdmin';
    else if(groups.indexOf('OrgAdmin') !== -1) usertype = 'OrgAdmin';

    localStorage.setItem('accessLevel', usertype)
    localStorage.setItem('login', 'true');

    this.reset();
    this.router.navigateByUrl(url);
  }

  reset() {
    this.error_message = '';
    this.username = '';
    this.pswd = '';
  }

  isValidPasswd(passwd: string): boolean {
    return (
      passwd.length >= 8 &&
      /\d/.test(passwd) &&
      /[\^$*.\[\]{}()?\-"!@#%&\/\\,><':;|_~`+=]/.test(passwd) &&
      /[a-z]/.test(passwd) &&
      /[A-Z]/.test(passwd)
    )
  }

  async login_navigation(): Promise<void> {
    switch (await this.checkCredentials()) {
      case LoginResponse.NEW_PASSWORD_REQUIRED:
        this.error_message = '';
        this.needConfirm = true;
        break;
      case LoginResponse.SUCCESS:
        this.onSignInSuccess('/portal');
        break;
      case LoginResponse.UNAUTHORIZED:
        this.pswd = "";
        this.error_message = "Invalid username or password."
        break;
      case LoginResponse.FAILURE:
        this.username = '';
        this.pswd = '';
        this.error_message = "Unable to Login. Please try again later.";
    }
  }
}
