var google = require("googleapis").google;
const fs = require("fs");

const content = "Some content!";
getUserDetails = function (token) {
  var OAuth2 = google.auth.OAuth2;
  var oauth2Client = new OAuth2();
  oauth2Client.setCredentials({ access_token: token });
  var oauth2 = google.oauth2({
    auth: oauth2Client,
    version: "v2",
  });
  //   oauth2.userinfo.get(function (err, res) {
  //     if (err) {
  //       console.log(err + "err");
  //     } else {
  //       console.log("respnse");
  //       console.log(res);
  //     }
  //   });
  const service = google.people({ version: "v1", auth: oauth2Client });
  service.people.get(
    {
      resourceName: "people/me",
      personFields: [
        // "birthdays",
        // "addresses",
        // "ageRanges",
        // "locations",
        // "events",
        // "genders",
        // "interests",
        // 'names'
        "addresses",
        "ageRanges",
        "biographies",
        "birthdays",
        "calendarUrls",
        "clientData",
        "coverPhotos",
        "emailAddresses",
        "events",
        "externalIds",
        "genders",
        "imClients",
        "interests",
        "locales",
        "locations",
        "memberships",
        "metadata",
        "miscKeywords",
        "names",
        "nicknames",
        "occupations",
        "organizations",
        "phoneNumbers",
        "photos",
        "relations",
        "sipAddresses",
        "skills",
        "urls",
        "userDefined",
      ],
    },
    (err, res) => {
      // Do your thing
      console.dir(res.data);

      fs.writeFile("./test.txt", JSON.stringify(res.data), (err) => {
        if (err) {
          console.error(err);
          return;
        }
        //file written successfully
      });

      console.dir(res.data.ageRanges);
    }
  );
};

module.exports = getUserDetails;
