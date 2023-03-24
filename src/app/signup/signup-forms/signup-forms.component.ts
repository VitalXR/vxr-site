import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { API } from 'aws-amplify';

export interface SignupFormDTO {
  fname: string;
  lname: string;
  email: string;
  org: string;
  usage: string;
  status: string;
  timestamp: string;
}

@Component({
  templateUrl: './signup-forms.component.html',
  styleUrls: ['./signup-forms.component.scss']
})
export class SignupFormsComponent {
  constructor(private router: Router) {
    this.data = [];
    this.columns = [
      'First Name',
      'Last Name',
      'Email',
      'Company Name',
      'Usage',
      'Status',
      'Request Date'
    ];

    const init = async () => {
      await this.getData();
      this.parseDataJson();
    }

    init();
  }

  dataJson: string;
  data: string[][];
  failed: string;
  columns: string[];

  onApprove(row: string[]) {
    row[row.length - 1] = 'true'
    const api = 'VitalXRBackendStack';
    const path = '/signup/approve';
    const init = {
      response: true,
      body: {
        org: row[3],
        email: row[2]
      }
    };

    API.post(api, path, init)
      .then(res => console.log(res))
      .then(() => {
        this.getData();
        this.parseDataJson();
      })
      .catch(e => console.log(e));

      this.router.navigateByUrl("/portal")
  }

  private async getData() {
    const api = 'vxr-dev-ag';
    const path = '/signup';
    const init = {
      response: true
    };

    try {
      const res = await API.get(api, path, init);
      console.log(res);
      this.failed = null;
      this.dataJson = res.data.body;
    }
    catch (e) {
      this.failed = 'Failed to load resource. Please try again later.';
    }
  }

  private parseDataJson() {
    this.data.splice(0, this.data.length);
    console.log(this.data);
    const data: string[][] = JSON.parse(this.dataJson);
    data.forEach(row => {
      row[row.length-1] = new Date(parseInt(row[row.length-1]) * 1000).toLocaleString();
      this.data.push(row);
      row.push('false')
    });
  }
}