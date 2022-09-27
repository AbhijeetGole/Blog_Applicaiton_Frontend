import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, FormControl, NgForm } from '@angular/forms';
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
    // if (this.authService.isLoggedIn()) {
    //   this.router.navigateByUrl('/home');
    // }
  }

  ngOnInit() {
    this.title = 'Administrator Login';
    this.createForm();
  }

  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    const token = this.authService.getCurrentUser();
    if (token) {
      localStorage.setItem('token',token.userName);
      console.log('Login Successful');
      this.router.navigate(['/']);
    } else {
      console.log('Login Failed');
    }
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    this.authService.login({
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }).subscribe(
      result => {
        if (result) {
          this.router.navigateByUrl('/home');
        }
      }
    )
  }

}
