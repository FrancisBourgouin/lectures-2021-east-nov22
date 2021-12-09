const bcrypt = require("bcryptjs");

const authenticateUser = (email, password, db) => {
  const potentialUser = db[email];
  // Check if user exists, if not eject
  if (!potentialUser) {
    return { err: "No user with that email", data: null };
  }
  // Check if password matches, if not eject
  const passwordMatching = bcrypt.compareSync(password, potentialUser.password);
  if (!passwordMatching) {
    return { err: "Password not matching", data: null };
  }

  return { err: null, data: potentialUser };
};

const createUser = (email, name, password, secret, db) => {
  // Check if user already exists, eject if exists
  if (db[email]) {
    return { err: "user already exists", data: null };
  }
  // Check for fields
  if (!email || !name || !password || !secret) {
    return { err: "invalid field", data: null };
  }
  // Create user object (hashing)
  const newUser = {
    name,
    email,
    password: bcrypt.hashSync(password, salt),
    secret,
  };
  // Add object to DB
  db[email] = newUser;

  return { err: null, data: newUser };
};

module.exports = { authenticateUser, createUser };
