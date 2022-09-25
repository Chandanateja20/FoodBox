import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ContactComponent } from './contact/contact.component';
import { ContactsuccessComponent } from './contactsuccess/contactsuccess.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {
    path:'user',component:UserComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  // {
  //   path:'navbar',component:NavbarComponent
  // },
  {
    path:'admin',component:AdminComponent
  },
  {
    path:'search/:searchItem',component:MenuComponent
  },
  {
    path:'menu',component:MenuComponent
  },
  {
    path:'tag/:tag',component:MenuComponent
  },
  {
    path:'cart-page',component:CartPageComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'food/:id',component:FoodpageComponent
  },  
  // {
  //   path:'error',component:ErrorpageComponent
  // }
  {
    path:'payment',component:PaymentpageComponent
  },
  {
    path:'success',component:SuccessComponent
  },
  { 
    path:'aboutus',component:AboutUsComponent
  },
  {
    path:'contactsuccess',component:ContactsuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
