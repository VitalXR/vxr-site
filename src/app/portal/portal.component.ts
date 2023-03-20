import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './portal.component.html'
})
export class PortalComponent {
  router: Router
  signupforms_btnText: String;

  constructor(router: Router) {
    this.router = router
  }

  route(url: string){
    this.router.navigateByUrl(url)
  }
}
