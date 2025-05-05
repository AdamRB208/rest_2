import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { ValueSchema } from '../models/Value.js'
import { RatSchema } from '../models/Rat.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Rat = mongoose.model('Rat', RatSchema);
}

export const dbContext = new DbContext()
