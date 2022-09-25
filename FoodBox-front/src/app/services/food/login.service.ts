import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/shared/models/Login';
import { Register } from 'src/app/shared/models/Register';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  baseURL="http://localhost:8082/login";
  public UserRegistration(user:Login):Observable<any>{
    return this.http.post(`${this.baseURL}`,user);
  }
}
