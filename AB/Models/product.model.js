const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    price: { type: Number, require: true },
    quantity: { type: Number, require: true },
    masp: { type: Number, require: true }
  },
  {
    timestamps: true,
  }
);
const Products = mongoose.model("Products", productSchema);
module.exports = Products;
