import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Auth } from 'aws-amplify';

@Injectable()
export class AddOrganizationService {
  addOrgUrl = 'https://0xuxtr2c59.execute-api.us-east-1.amazonaws.com/default/Organizations';

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
    return this.http.put<any>(this.addOrgUrl,{body: JSON.stringify(body)});
  }
}