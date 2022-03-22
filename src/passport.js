const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();
// const runSample = require("../users/runSample");
// const getGenderInfo = require("../users/getUserDetails");
// const getUserDetails = require("../users/getUserDetails");
const userSchema = require("../models/userSchema");
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, cb) {
      // getUserDetails(accessToken);
      // runSample();
      // getGenderInfo(accessToken);
      // userName: String,
      // displayName:String ,
      // name: String,
      // googleId: String,
      // secret: String,
      // email:String,
      // profilePicture:String,
      // emailVerified:Boolean
      // userSchema.
      const user = new userSchema();
      user.userName = profile.name.givenName;
      user.displayName = profile.displayName;
      user.googleId = profile.id;
      user.email = profile.emails[0].value;
      user.emailVerified = profile.emails[0].verified;
      user.profilePicture = profile.photos[0].value;
      // user.userName = profile.displayName
      user
        .save()
        .then((val) => {
          console.log(val);
          profile.recordId = val._id;
          console.log("after val");
          return cb(null, profile);
        })
        .catch((er) => {
          console.log(er);
        });
      console.log(profile);
    }
  )
);
