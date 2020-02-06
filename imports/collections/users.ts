import { MongoObservable } from 'meteor-rxjs';

import { User } from '../models/users';

export const Users = new MongoObservable.Collection<User>('users');
