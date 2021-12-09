const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const user1Password = "hydrogen";
const user2Password = "priviet";

const user1 = {
  name: "Dimitri Ivanovich Mendeleiv",
  email: "periodic@table.com",
  password: bcrypt.hashSync(user1Password, salt),
  secret: "Actually prefers biology",
};

const user2 = {
  name: "Leon Nikolaïevitch Tolstoi",
  email: "ilike@towrite.com",
  password: bcrypt.hashSync(user2Password, salt),
  secret: "Used ghost writers instead of actually writing",
};

const userArr = [user1, user2];

// userArr.find(user => user.email === email)

const userDatabaseIsh = {
  "periodic@table.com": user1,
  "ilike@towrite.com": user2,
};

module.exports = userDatabaseIsh;
