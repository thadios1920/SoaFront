import { Credentials } from './../models/credentials';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL=environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    private http:HttpClient
  ) { }


  login(credentials: Credentials): Observable<any>{
    return this.http.post(URL + "/admin/login", credentials)
  }

}
