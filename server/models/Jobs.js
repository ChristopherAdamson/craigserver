const { Schema } = require("mongoose")


const Jobs = new Schema({
  company: { type: String, required: true },
  jobTitle: { type: String, required: true },
  description: { type: String, },
  wage: { type: Number, required: true }
})

export default Jobs