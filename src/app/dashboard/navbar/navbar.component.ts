import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginForm: any;
  title: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
   ) { }
  ngOnInit(): void {
  this.title = 'Administrator Login';
  this.createForm();
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
