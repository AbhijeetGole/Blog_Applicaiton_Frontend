import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  title: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    if (this.authService.isLoggedIn()) {
     this.router.navigate(['home']);
    }
  }

  ngOnInit() {
    this.title = 'Administrator Login';
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  onSubmit() {
    this.authService.login({
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }).subscribe(
      result => {
        if (result) {
          this.router.navigate(['/home']);
          console.log('logged in')
        }
      }
    )
  }

}