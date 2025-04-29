import mongoose, { model, Schema } from "mongoose";

const carsSchema = new Schema({
  title: String,
  desc: String,
  name: String,
  image: String,
  date: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});


export default model("Products", carsSchema);