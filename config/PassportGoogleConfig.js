import { config } from "dotenv";
import { Strategy } from "passport-google-oauth20";

const braincraftEmails = ["hushibul@braincraftapps.com"];

config();

const PassportGoogleConfig = (passport) => {
  passport.use(
    new Strategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
      },
      function (accessToken, refreshToken, profile, cb) {
        if (braincraftEmails.includes(profile.emails[0].value)) {
          console.log("Success");
          cb(null, profile);
        } else {
          console.log("Failure");
          cb(null, false);
        }
      }
    )
  );

  passport.serializeUser(function (user, cb) {
    cb(null, user);
  });

  passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
  });
};

export default PassportGoogleConfig;
