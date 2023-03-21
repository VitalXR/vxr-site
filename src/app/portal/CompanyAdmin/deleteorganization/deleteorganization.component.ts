import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationService } from '../../organization.service';

@Component({
  templateUrl: './deleteorganization.component.html',
  styleUrls: ['./deleteorganization.component.scss'],
  providers: [OrganizationService]
})
export class DeleteOrganizationComponent {
  constructor(private orgservice: OrganizationService, private router: Router) {}
  btnText = ''
  delete() {
    console.log('clicked')
    localStorage.setItem('login', 'false');
    this.router.navigateByUrl("/home")
  }
}
