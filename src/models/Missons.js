import { Schema } from "mongoose";

export const MissionsSchema = new Schema({
  codename: { type: String, minLength: 1, maxLength: 100, required: true },
  objective: { type: String, minLength: 1, maxLength: 100, required: true },
  year: { type: String, minLength: 1, maxLength: 100, required: true },
  locationId: { type: Schema.ObjectId, ref: 'location', required: true },
  ratId: { type: Schema.ObjectId, ref: 'rat', required: true },
  completed: { type: Boolean, required: true, default: false },
},
  {
    timestamps: true,
    toJSON: { virtuals: true }
  })

MissionsSchema.virtual('location', {
  localField: 'locationId',
  foreignField: '_id',
  justOne: true,
  ref: 'Location'
})

MissionsSchema.virtual('rat', {
  localField: 'ratId',
  foreignField: '_id',
  justOne: true,
  ref: 'Rat'
})