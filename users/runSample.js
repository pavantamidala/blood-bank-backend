const path = require("path");
const { google } = require("googleapis");

var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2();

// oauth2Client.setCredentials({
//   access_token: token,
//   scope: "https://www.googleapis.com/auth/user.gender.read",
// });

// var oauth2 = google.oauth2({
//   auth: oauth2Client,
//   version: "v2",
// });

// oauth2.userinfo.get(function (err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res.data);
//   }
// });
function getGenderInfo(token) {
  oauth2Client.setCredentials({
    access_token: token,
  });
  const service = google.people({ version: "v2", auth: oauth2Client });
  service.people.get(
    {
      resourceName: "people/me",
      personFields: "genders,birthdays",
    },
    (err, res) => {
      // Do your thing
    }
  );
}
module.exports = getGenderInfo;
