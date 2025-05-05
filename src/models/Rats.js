import { Schema } from "mongoose";

export const RatsSchema = new Schema({
  name: { type: String, minLength: 1, maxLength: 100, required: true },
  callsign: { type: String, minLength: 1, maxLength: 100, required: true },
  picture: { type: String, minLength: 1, maxLength: 100, required: true },
  specialties: { type: String, minLength: 1, maxLength: 100, required: true }
},
  {
    timestamps: true,
    toJSON: { virtuals: true }
  })
