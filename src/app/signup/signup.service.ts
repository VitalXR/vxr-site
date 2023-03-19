import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class SignupService {
  signupUrl = 'https://tdsy3cgt61.execute-api.ca-central-1.amazonaws.com/dev/signup';

  constructor(private http:HttpClient) {}

  signup(org: string, fname: string, lname: string, email: string, usage: string) {
    const body = {
      org,
      fname,
      lname,
      email,
      usage
    };

    console.log(body);

    return this.http.post(this.signupUrl, body);
  }
}