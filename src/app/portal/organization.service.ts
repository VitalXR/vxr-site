import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Auth } from 'aws-amplify';

@Injectable()
export class OrganizationService {
  orgUrl = 'https://0xuxtr2c59.execute-api.us-east-1.amazonaws.com/default/Organizations';

  constructor(private http:HttpClient) {}

  setAllOrgs(org: string, concurrent_users: number, total_users: number, is_deleted: Boolean) {
    // don't need this endpoint


    // let deleted = is_deleted ? 1 : 0
    // const body = {
    //   'name': org,
    //   "concurrent_users": concurrent_users,
    //   "total_users": total_users,
    //   "isDeleted": deleted
    // }
    // console.log(JSON.stringify(body))
    // return this.http.put<any>(this.orgUrl,{body: JSON.stringify(body)})
  }

  addOrg(org: string, concurrent_users: number, total_users: number, is_deleted: Boolean) {
    let deleted = is_deleted ? 1 : 0
    const body = {
      'name': org,
      "concurrent_users": concurrent_users,
      "total_users": total_users,
      "isDeleted": deleted
    }
    console.log(JSON.stringify(body))
    return this.http.post<any>(this.orgUrl, JSON.stringify(body))
  }

  getOrgs() {
    return this.http.get<any>(this.orgUrl)
  }

  getOrg(id) {
    // missing id as param
    return this.http.get<any>(this.orgUrl)
  }

  updateOrgField(id, field, new_field) {
    // use the patch to update a single field, use the put to update the entire thing
  }

  deleteOrg(id) {
    // ue the delete method
  }
}