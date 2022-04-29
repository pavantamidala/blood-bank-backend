const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
require("./passport");
const config = "../config/config.js";
require("dotenv").config();
const dataBaseConnection = require("../db/db");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const userSchema = require("../models/userSchema");
const getFilters = require("../routes/getFilters");
const getBaseData = require("../routes/getBaseData");
const updateUserDetails = require('../routes/updateUserDetails')
//Configure Session Storage
app.use(
  cookieSession({
    name: "session-name",
    keys: ["key1", "key2"],
  })
);

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
//Configure Passport
app.use(passport.initialize());
app.use(passport.session());
const PORT = process.env.PORT || 3000;
//Unprotected Routes
app.use(express.static(__dirname + '../public/build'));
app.use("/static", express.static('./static/'));


// Middleware - Check user is Logged in
const checkUserLoggedIn = (req, res, next) => {
  req.user ? next() : res.redirect('/auth/google');
};


app.get("/failed", (req, res) => {
  res.send("<h1>Log in Failed :(</h1>");
});


app.get("/",checkUserLoggedIn, (req, res) => {
  console.log(__dirname)
  res.sendFile(__dirname+'/build/index.html');
});
//Protected Route.
app.get("/profile", checkUserLoggedIn, (req, res) => {
  console.log(req.user);
  let data = {
    id: req["user"]["recordId"],
    displayName: req["user"]["displayName"],
    email: req["user"]["emails"][0]["value"],
    profile: req["user"]["photos"][0]["value"],
    name: req["user"]["name"],
  };
  res.json(JSON.stringify(data));
  res.end();
  // res.send(`<h1>${req.user.displayName}'s Profile Page</h1>`);
});

app.put("/user-details", checkUserLoggedIn,updateUserDetails );

app.get("/get-filters", checkUserLoggedIn, getFilters);
app.put('/get-base-data',checkUserLoggedIn,getBaseData)
// Auth Routes
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: [
      // "https://www.googleapis.com/auth/user.addresses.read",
      // "https://www.googleapis.com/auth/userinfo.profile",
      // "https://www.googleapis.com/auth/userinfo.email",
      // "https://www.googleapis.com/auth/user.phonenumbers.read",
      // "https://www.googleapis.com/auth/profile.agerange.read",
      "profile",
      "email",
    ],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    res.redirect("/");
  }
);

//Logout
app.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/");
});
dataBaseConnection(startServer);
function startServer(port) {
  app.listen(PORT, () => console.log(`App listening on port ${3000} 🚀🔥`));
}
