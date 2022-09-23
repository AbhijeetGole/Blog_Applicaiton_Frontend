import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'username' : new FormControl(''),
      'firtsname' : new FormControl(''),
      'lastname' : new FormControl(''),
      'email' : new FormControl(''),
      'password' : new FormControl(''),
    })
  }

}
