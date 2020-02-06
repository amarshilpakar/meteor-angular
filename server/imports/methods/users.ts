import { Meteor } from 'meteor/meteor';

import { Users } from '../../../imports/collections/users';

Meteor.methods({
  addUser(fname: string, lname: string, email: string, password: string) {
    Users.insert({
      fname,
      lname,
      email,
      password
    });
  }
})