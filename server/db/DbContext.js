import ValueSchema from "../models/Value";
import mongoose from "mongoose";
import HouseSchema from "../models/House"
import JobSchema from "../models/Jobs"

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Houses = mongoose.model("Houses", HouseSchema)

  Jobs = mongoose.model("Jobs", JobSchema)
}

export const dbContext = new DbContext();
