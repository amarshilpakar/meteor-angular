import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: 'register.html',
  styleUrls: ['register.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerForm: FormGroup;
  submitted: Boolean = false;
  fname: String = "";
  lname: String = "";
  password: String = "";
  email: String = "";
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]]
    });
  }

  get f() { return this.registerForm.controls; }
  
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    this.addUser();
  }

  ngOnDestroy() {
  }

  addUser() {
    Meteor.call('addUser', this.fname, this.lname, this.email, this.password);
  }
  
}
