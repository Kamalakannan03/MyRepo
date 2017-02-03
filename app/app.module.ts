import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {routing} from './app.router';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { HeaderComponent} from './header/header.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent} from './register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {InsertComponent} from './functions/insert/insert.component';

import {LoginService} from './login/login.service';
import {ApiService} from './shared/api.service';


@NgModule({
  imports:      [ BrowserModule,routing,FormsModule,HttpModule],
  declarations: [ AppComponent,HeaderComponent,LoginComponent,RegisterComponent,DashboardComponent,InsertComponent],
  providers:    [ ApiService,LoginService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
