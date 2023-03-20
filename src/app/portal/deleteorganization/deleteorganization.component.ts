import { Component } from '@angular/core';
import { OrganizationService } from '../organization.service';

@Component({
  templateUrl: './deleteorganization.component.html',
  styleUrls: ['./deleteorganization.component.scss'],
  providers: [OrganizationService]
})
export class DeleteOrganizationComponent {
  constructor(private orgservice: OrganizationService ) {}
  orgname = "";
  concurrent_users = ''
  total_users = ''
  submit = false
  
  onSubmit() {
    this.orgservice.addOrg(this.orgname, Number(this.concurrent_users), Number(this.total_users), false)
      .subscribe(e => {
        console.log(e);
      });
    this.submit = true
  }
}
