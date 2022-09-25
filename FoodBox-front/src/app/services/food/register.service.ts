import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from 'src/app/shared/models/Register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  http: any;

  constructor(private hhtp:HttpClient) { }

  baseURL="http://localhost:8082/register";

  public RegisterRegistration(users:Register):Observable<any>{
    return this.http.post(`${this.baseURL}`,users);
  }
}
