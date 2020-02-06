import { Meteor } from 'meteor/meteor';

import { Users } from '../../../imports/collections/users';

Meteor.publish('userList', function() {
  return Users.find({});
});
