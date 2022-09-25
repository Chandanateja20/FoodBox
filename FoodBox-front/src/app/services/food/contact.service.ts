import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/shared/models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  baseURL="http://localhost:8082/contact";
  
  public contactDetails(contact:Contact):Observable<any> {
    return this.http.post(`${this.baseURL}`,contact);
    
  }
}
