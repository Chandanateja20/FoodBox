import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { RouterModule } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { SuccessComponent } from './success/success.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactsuccessComponent } from './contactsuccess/contactsuccess.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    RegisterComponent,
    ErrorpageComponent,
    ContactComponent,
    HomeComponent,
    MenuComponent,
    SearchComponent,
    TagsComponent,

    NavbarComponent,
    CartPageComponent,
    FoodpageComponent,
    PaymentpageComponent,
    SuccessComponent,
    Navbar1Component,
    AboutUsComponent,
    ContactsuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
