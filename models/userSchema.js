const mongoose = require("mongoose");
// const session = require("express-session");
// const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const findOrCreate = require("mongoose-findorcreate");
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: String,
  displayName: String,
  // name: String,
  googleId: String,
  // secret: String,
  email: String,
  profilePicture: String,
  emailVerified: Boolean,
  donatedBloodCelss: Boolean,
  donatedBlood: Boolean,
  gender: String,
  dob: String,
  address: Object,
  formatted_address:String,
  bloodGroup: String,
  phoneNumber:String,
  aadhar:String
});

module.exports = mongoose.model("user", userSchema);
