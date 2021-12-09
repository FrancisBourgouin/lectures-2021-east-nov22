const authenticateUser = (email, password, db) => {
  const potentialUser = db[email];

  // const {email, password} = req.body // Fancy destructuring
  // Validate the existence of the user in "DB"

  if (!potentialUser) {
    return { err: "No user found", data: null };
  }

  // Validate if the passwords match

  if (potentialUser.password !== password) {
    return { err: "Bad password", data: null };
  }

  return { err: null, data: potentialUser };
};

const fetchUserInformation = (email, db) => {
  const currentUser = db[email];

  if (!currentUser) {
    console.log("no user");
    return { err: "no user found", data: null };
  }

  return { err: null, data: currentUser };
};

module.exports = { authenticateUser, fetchUserInformation };
