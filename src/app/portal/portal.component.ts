import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent {
  router: Router
  signupforms_btnText: String;
  addorgs_btnText: String
  deleteorg_btnText: String
  deleteorgs_btnText: String
  getorgs_btnText: String
  updateorgs_btnText: String
  userlevel = ''


  constructor(router: Router) {
    this.router = router
    this.userlevel = localStorage.getItem('accessLevel')
  }

  route(url: string){
    this.router.navigateByUrl(url)
  }
}
