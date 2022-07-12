let mongoose = require("mongoose");
const Schema = mongoose.Schema;

let postSchema = new Schema(
  {
    title: String,
    caption: String, 
    image: String,
    userName: String,
    userId: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);