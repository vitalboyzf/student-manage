var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const model = mongoose.model;
var studentSchema = new Schema({
  sno: Number,
  name: String,
  address: String,
  birthday: Number,
  phone: { type: String },
  class: Number,
  sex: "男" | "女",
  email: String,
});
module.exports = model("student", studentSchema);