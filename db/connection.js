var mongoose      = require("mongoose");

var ProductSchema = {
  name: String


}

mongoose.model("Product", ProductSchema);


mongoose.connect("mongodb://localhost/sushiAvenue")


module.exports = mongoose;
