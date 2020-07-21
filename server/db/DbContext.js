import ValueSchema from "../models/Value";
import mongoose from "mongoose";
import HouseSchema from "../models/House"
import JobSchema from "../models/Jobs"
import CarSchema from "../models/Cars"

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Houses = mongoose.model("Houses", HouseSchema)

  Jobs = mongoose.model("Jobs", JobSchema)

  Cars = mongoose.model("Cars", CarSchema)
}

export const dbContext = new DbContext();
