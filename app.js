require("dotenv").config();
const express = require("express");
const app = express();
const cookieSession = require("cookie-session");
const passportSetup = require("./passport");
const passport = require("passport");
const cors = require("cors");
const authRoutes = require("./routes/auth");
// const https = require("https");
// const fs = require("fs");
// const path = require("path");

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SESSION_PRIVATE_KEY],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "OPTIONS, GET, POST, PUT, PATCH, DELETE",
    allowedHeaders: "origin, Content-Type, Authorization",
    credentials: true,
  })
);

app.use("/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server is running");
});

// const privateKey = fs.readFileSync(path.join(__dirname, "server.key"));
// const certificate = fs.readFileSync(path.join(__dirname, "server.cert"));

// https
//   .createServer({ key: privateKey, cert: certificate }, app)
//   .listen(process.env.PORT || 5000, () =>
//     console.log(`server running on 5000`)
//   );
