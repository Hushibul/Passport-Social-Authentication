import passport from "passport";

export const googleAuthenticate = passport.authenticate("google", {
  scope: ["profile", "email"],
});

export const googleSuccessRedirect = (req, res) => {
  // Successful authentication, redirect home.
  res.redirect("/success");
};

export const googleCallback = passport.authenticate("google", {
  failureRedirect: "/login",
});
