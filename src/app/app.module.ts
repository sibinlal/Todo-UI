import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetworkErrorComponent } from './components/others/network-error/network-error.component';
import { NotfoundComponent } from './components/others/notfound/notfound.component';
import { TodoformComponent } from './components/todo/todoform/todoform.component';
import { TodoitemsComponent } from './components/todo/todoitems/todoitems.component';
import { TodolistComponent } from './components/todo/todolist/todolist.component';
import { LoginComponent } from './components/user/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NetworkErrorComponent,
    NotfoundComponent,
    TodoformComponent,
    TodoitemsComponent,
    TodolistComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
