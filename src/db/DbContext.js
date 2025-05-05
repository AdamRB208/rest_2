import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { ValueSchema } from '../models/Value.js'
import { RatsSchema } from '../models/Rats.js';
import { LocationsSchema } from '../models/Locations.js';
import { MissionsSchema } from '../models/Missons.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Rats = mongoose.model('Rat', RatsSchema);
  Locations = mongoose.model('Location', LocationsSchema);
  Missions = mongoose.model('Mission', MissionsSchema);

}

export const dbContext = new DbContext()
