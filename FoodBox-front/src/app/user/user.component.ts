import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/food/login.service';
import { Login } from '../shared/models/Login';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  login:Login=new Login();
  constructor(private loginSevice:LoginService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmitData(userForm:any){
    console.log(userForm)
   // this.rout.navigate(['home']);
}

loginto(){
  this.loginSevice.UserRegistration(this.login).subscribe((data)=>{
    alert('successfully inserted');
   
  });
  this.route.navigateByUrl('/menu');
}
}
