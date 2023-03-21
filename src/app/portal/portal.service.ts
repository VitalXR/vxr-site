import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Auth, API } from 'aws-amplify';

@Injectable()
export class PortalService {
  addOrgUrl = 'https://0xuxtr2c59.execute-api.us-east-1.amazonaws.com/default/Organizations';
  inviteUserUrl = 'https://tdsy3cgt61.execute-api.ca-central-1.amazonaws.com/dev/user';
  confirmUserUrl = 'https://tdsy3cgt61.execute-api.ca-central-1.amazonaws.com/dev/user/confirm';

  constructor(private http:HttpClient) {}

  addOrg(org: string, concurrent_users: number, total_users: number, is_deleted: Boolean) {
    let deleted = is_deleted ? 1 : 0
    const body = {
      'name': org,
      "concurrent_users": concurrent_users,
      "total_users": total_users,
      "isDeleted": deleted
    }
    console.log(JSON.stringify(body))
    // let header = new HttpHeaders();
    // header = header.append('content-type', 'application/json');
    // return this.http.post(this.URL , body, {headers : header});
    return this.http.put<any>(this.addOrgUrl,body);
  }

  async inviteUser(email: string) {
    const api = 'vxr-dev-ag';
    const path = '/user';
    const init = {
      response: true,
      body: { email }
    };
    
    const res = await API.post(api, path, init);
    console.log(res);
  }

  async confirmUser(email: string, prevPasswd: string, newPasswd: string) {
    const user = await Auth.signIn(email, prevPasswd);
    console.log(user);
    const token = (await Auth.currentSession()).getAccessToken().getJwtToken();

    const api = 'vxr-dev-ag';
    const path = '/user/change-passwd'

    const init = {
      response: true,
      body: {
        prevPasswd,
        newPasswd,
        token
      }};

    const res = await API.post(api, path, init);
    console.log(res);
  }

  async getAllUsers() {
    const api = 'vxr-dev-ag';
    const path = '/user';
    const init = {
      response: true
    };

    return await API.get(api, path, init);
  }
}