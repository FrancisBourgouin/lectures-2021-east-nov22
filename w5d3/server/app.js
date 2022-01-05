const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dbHelperGenerator = require("./helpers/dbHelpers");
const { Client } = require("pg");

const app = express();
const client = new Client({
  user: "francis",
  password: "francis",
  host: "localhost",
  port: 5432,
  database: "ultrabob",
});
client.connect();

const { fetchAllJokes, fetchASingleJoke, addAuthorToDatabase } =
  dbHelperGenerator(client);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  fetchAllJokes().then((jokes) => {
    const templateVars = { title: "Cool jokes", jokes };
    res.render("index", templateVars);
  });
});

app.get("/:joke_id", (req, res) => {
  fetchASingleJoke(req.params.joke_id).then((joke) => {
    const templateVars = { joke };
    res.render("single", templateVars);
  });
});

app.get("/authors/new", (req, res) => {
  res.render("author");
});

app.post("/authors", (req, res) => {
  const { name, description } = req.body;
  const funny = req.body.funny === "on";

  addAuthorToDatabase(name, funny, description).then((newAuthor) => {
    res.json(newAuthor);
  });
});

// app.get("/", (req, res) => {
//   client
//     .query("SELECT * FROM jokes JOIN authors ON authors.id = jokes.author_id")
//     .then((dbRes) => {
//       const templateVars = { title: "Cool jokes", jokes: dbRes.rows };
//       res.render("index", templateVars);
//     });
// });

module.exports = app;
