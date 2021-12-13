exports.loginFailed = (req, res) => {
  res.status(401).json({ success: false, message: "Authentication failed!" });
};

exports.loginSucceed = (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "Authentication Succeeded!",
      user: req.user,
      //   cookies: req.cookies,
      //   token:

      // We can also send token like jwt here when user gets logged in
    });
  }
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
};
