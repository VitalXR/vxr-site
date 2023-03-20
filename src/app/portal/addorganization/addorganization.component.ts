import { Component } from '@angular/core';
import { AddOrganizationService } from './addorganization.service';

@Component({
  templateUrl: './addorganization.component.html',
  styleUrls: ['./addorganization.component.scss'],
  providers: [AddOrganizationService]
})
export class AddOrganizationComponent {
  constructor(private addorganization: AddOrganizationService ) {}
  orgname = "";
  concurrent_users = ''
  total_users = ''
  submit = false
  
  onSubmit() {
    this.addorganization.addOrg(this.orgname, Number(this.concurrent_users), Number(this.total_users), false)
      .subscribe(e => {
        console.log(e);
      });
    this.submit = true
  }
}
