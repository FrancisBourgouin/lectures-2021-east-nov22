require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bcrypt = require("bcryptjs");
const logger = require("morgan");
const { authenticateUser, fetchUserInformation } = require("./helpers/userHelpers");

const app = express();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Process cookies
// encoded to something else
// id=5;someOthercookie='slalala';
app.use(
  cookieSession({
    name: "session",
    keys: [
      "I like potatoes and gravy and cheese",
      "I prefer filtered coffee over espresso, sometimes",
    ],
  })
);
app.use(express.static(path.join(__dirname, "public")));

const salt = bcrypt.genSaltSync(10);
console.log(process.env.USER1_PASSWORD);
const user1 = {
  name: "Dimitri Ivanovich Mendeleiv",
  email: "periodic@table.com",
  password: bcrypt.hashSync(process.env.USER1_PASSWORD, salt),
  secret: "Actually prefers biology",
};

const user2 = {
  name: "Leon Seminiovitch Tolstoi",
  email: "war@peace.com",
  password: bcrypt.hashSync(process.env.USER2_PASSWORD, salt),
  secret: "He likes vodka and didn't write for real.",
};

const userDatabaseIsh = {
  "periodic@table.com": user1,
  "war@peace.com": user2,
};

// userDatabaseIsh[email]

const userArray = [user1, user2];

// userArray.find(user => user.email === email)

app.get("/", (req, res) => {
  // console.log(req.session, req.headers);
  res.render("index");
});

app.post("/login", (req, res) => {
  // We will get email/password from form
  const email = req.body.email;
  const password = req.body.password;

  const result = authenticateUser(email, password, userDatabaseIsh);

  if (result.err) {
    console.log(result.err);
    return res.redirect("/");
  }
  // eyJlbWFpbCI6InBlcmlvZGljQHRhYmxlLmNvbSJ9 for Dimitri
  // eyJlbWFpbCI6IndhckBwZWFjZS5jb20ifQ== for Leon
  req.session.email = email;
  res.redirect("/vault");
});

app.post("/logout", (req, res) => {
  // res.clearCookie("email")
  // req.session.email = null
  delete req.session.email;

  res.redirect("/");
});

app.get("/vault", (req, res) => {
  // Fetch the value of the cookie called email
  const email = req.session.email;
  // Fetch the user information from the email from the cookie
  const currentUser = fetchUserInformation(email, userDatabaseIsh);
  // Give that to templateVars

  if (currentUser.err) {
    return res.redirect("/");
  }

  const templateVars = {
    name: currentUser.data.name,
    secret: currentUser.data.secret,
  };
  // Render the vault template with the templateVars
  return res.render("vault", templateVars);
});

app.get("/dashboard", (req, res) => {
  const email = req.session.email;

  const currentUser = fetchUserInformation(email, userDatabaseIsh);
  // Give that to templateVars

  if (currentUser.err) {
    return res.redirect("/");
  }
  res.json(userDatabaseIsh);
});

app.get("/register", (req, res) => {
  return res.render("register");
});

app.post("/register", (req, res) => {
  // Extract info / validate from the form (name, email, password, secret)
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const secret = req.body.secret;

  if (!name || !email || !password || !secret) {
    return res.redirect("/");
  }

  // Check if there is already a user with email
  const currentUser = fetchUserInformation(email, userDatabaseIsh);
  // Give that to templateVars

  if (currentUser.data) {
    return res.redirect("/");
  }
  // Create user object
  const newUser = {
    name,
    email,
    password: bcrypt.hashSync(password, salt),
    secret,
  };
  // Add user object to DB

  userDatabaseIsh[email] = newUser;

  // Add cookie for email

  req.session.email = email;

  // Redirect vault

  return res.redirect("/vault");
});

module.exports = app;
