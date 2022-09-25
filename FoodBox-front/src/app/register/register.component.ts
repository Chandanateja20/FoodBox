import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../services/food/register.service';
import { Register } from '../shared/models/Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register:Register=new Register();

  constructor(private route:Router,private registerService:RegisterService) { }

  ngOnInit(): void {
  }
  submit(){
    this.registerService.RegisterRegistration(this.register).subscribe((data)=>{
      alert('successfully inserted');
     
    });
    this.route.navigateByUrl('/user');
  }

}
