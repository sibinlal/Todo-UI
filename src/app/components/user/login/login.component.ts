import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;

  loginForm: FormGroup;

  constructor(private api:UserService, private toaster: ToastrService, private router:Router) {
    this.loginForm = new FormGroup({
      email:new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)])
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {

    if(this.loginForm.valid){
        
    }

  }

}
