import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';

import { Users } from '../../../../imports/collections/users';
import { User } from '../../../../imports/models/users';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'login',
  templateUrl: 'login.html',
  styleUrls: ['login.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  users: Observable<User[]>;
  userListSubscription: Subscription;
  loginForm: FormGroup;
  submitted: Boolean = false;
  email: String = "";
  password: String = "";
  errorMessage: String = "";
  constructor(private formBuilder: FormBuilder, private router: Router) {}
  ngOnInit() {    
    this.loginForm = this.formBuilder.group({
      password: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]]
    });
  }

  get f() { return this.loginForm.controls; }
  
  onSubmit() {
    this.submitted = true;
    this.errorMessage = "";
    if (this.loginForm.invalid) {
        return;
    }
    this.userListSubscription = MeteorObservable.subscribe('userList').subscribe(() => {
      let checkUser = Users.findOne({email: this.email, password: this.password});
      if(!checkUser || Object.keys(checkUser).length === 0) {
        this.errorMessage = "Invalid email or password";
      } else {
        this.router.navigate(['home']);
      }
    });    
  }

  ngOnDestroy() {
    if (this.userListSubscription) {
      this.userListSubscription.unsubscribe();
    }
  }
}
