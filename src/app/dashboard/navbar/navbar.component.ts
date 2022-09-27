import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
  })

  loginUser()
  {
    console.warn(this.loginForm.value);
  }
  get email()
  {
    return this.loginForm.get('user')
  }

  get password()
  {
    return this.loginForm.get('password')
  }

  constructor() { }

  ngOnInit(): void {

}
loggedin() {
  return localStorage.getItem('token');
}
onLogout(){
  localStorage.removeItem('token');
}
}
