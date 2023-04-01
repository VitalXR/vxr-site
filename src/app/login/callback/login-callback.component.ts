import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  templateUrl: './login-callback.component.html'
})
export class LoginCallback implements OnInit {
  constructor(public route: Router) {}

  errMsg: string;

  ngOnInit(): void {
    const onInit = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        localStorage.setItem('login', 'true');
        this.route.navigateByUrl('/portal');
      }
      catch (e) {
        if (e === 'The user is not authenticated') {
          this.errMsg = 'Unable to sign up. Please contact your administrator';
        }
      }
    }
    onInit();
  }
}