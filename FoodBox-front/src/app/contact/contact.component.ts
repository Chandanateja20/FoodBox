import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../services/food/contact.service';
import { Contact } from '../shared/models/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:Contact=new Contact();
  constructor(private contactService:ContactService, private route:Router) { }

  ngOnInit(): void {
  }

  send(){
    this.contactService.contactDetails(this.contact).subscribe((data)=>{
      alert('successfully inserted');
     
    });
    this.route.navigateByUrl('/contactsuccess');
  }
}
