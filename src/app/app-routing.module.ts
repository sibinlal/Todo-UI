import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/others/notfound/notfound.component';
import { TodolistComponent } from './components/todo/todolist/todolist.component';
import { LoginComponent } from './components/user/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { NetworkErrorComponent } from './components/others/network-error/network-error.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'**', component:NotfoundComponent},
  {path:'todo', component:TodolistComponent},
  {path:'login', component:LoginComponent},
  {path:'signUp', component:SignupComponent},
  {path:'network-error', component:NetworkErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
