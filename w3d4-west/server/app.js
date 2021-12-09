const express = require("express");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bcrypt = require("bcryptjs");
const logger = require("morgan");
const { authenticateUser, createUser } = require("./helpers/userHelpers");
const userDatabaseIsh = require("./data/userData");

const app = express();
console.log(salt);
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// Middleware
// Makes cookie readable / parses
app.use(
  cookieSession({
    name: "session",
    keys: ["I like potatoes, cheese and gravy", "key"],
  })
);

// userDatabaseIsh[email]

/*
 *  GENERAL ROUTES
 */
app.get("/", (req, res) => {
  console.log(req.session, req.headers.cookie);
  return res.render("index");
});

app.get("/vault", (req, res) => {
  // Extract the email value from my cookies
  const email = req.session.email;
  // Fetch the user object
  const currentUser = userDatabaseIsh[email];
  if (!currentUser) {
    return res.redirect("/");
  }
  // Fetch the values of name and secret
  const name = currentUser.name;
  const secret = currentUser.secret;
  // Give the values to templateVars

  const templateVars = {
    name,
    secret,
  };
  // Render the vault template with the templateVars
  return res.render("vault", templateVars);
});

app.get("/dashboard", (req, res) => {
  // Extract the value of the email from session
  const email = req.session.email;
  // Is the email matching the only one, if not eject
  if (email !== "periodic@table.com") {
    return res.redirect("/");
  }

  return res.json(userDatabaseIsh);
});

/*
 *  LOGIN LOGOUT ROUTES
 */
app.post("/login", (req, res) => {
  // Fetch the values from the form (email, password)
  const email = req.body.email;
  const password = req.body.password;

  const result = authenticateUser(email, password, userDatabaseIsh);

  if (result.err) {
    console.log(result.err);
    return res.redirect("/");
  }

  // Assign an email cookie, with the value of the user email
  // res.cookie("email", email);
  req.session.email = email;
  // Redirect to the approriate page
  return res.redirect("/vault");
});

app.post("/logout", (req, res) => {
  // res.clearCookie("email")
  // req.session.email = null
  delete req.session.email;
  return res.redirect("/");
});

/*
 *  REGISTER STUFFF
 */

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  // Fetch form data (name, email, password, secret)
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  const secret = req.body.secret;

  const createdUserData = createUser(email, name, password, secret, userDatabaseIsh);

  if (createdUserData.err) {
    console.log(createdUserData.err);
    return res.redirect("/");
  }
  // Eat a cookie, give a cookie
  req.session.email = email;
  // redirect to the vault
  return res.redirect("/vault");
});

// app.post("/login", (req, res) => {
//   // Fetch the values from the form (email, password)
//   const email = req.body.email;
//   const password = req.body.password;
//   const potentialUser = userDatabaseIsh[email];

//   // const { email, password } = req.body;
//   // Check if user exists, if not eject
//   if (!potentialUser) {
//     console.log("email doesn't exist");
//     return res.redirect("/");
//   }
//   // Check if password matches, if not eject
//   if (potentialUser.password !== password) {
//     console.log("password doesn't match");
//     return res.redirect("/");
//   }
//   // Assign an email cookie, with the value of the user email
//   res.cookie("email", email);
//   // Redirect to the approriate page
//   return res.redirect("/vault");
// });

module.exports = app;
