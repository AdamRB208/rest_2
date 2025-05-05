import { Schema } from "mongoose";

export const LocationsSchema = new Schema({
  country: { type: String, minLength: 1, maxLength: 100, required: true },
  area: { type: String, minLength: 1, maxLength: 100, required: true },
  labels: [{ type: String, minLength: 1, maxLength: 100, required: true }]
},
  {
    timestamps: true,
    toJSON: { virtuals: true }
  })