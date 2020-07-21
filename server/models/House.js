const { Schema } = require("mongoose");


const House = new Schema({
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  imgUrl: { type: String, required: true },
  floors: { type: Number, required: true },

},
  { timestamps: true, toJSON: { virtuals: true } })

export default House
