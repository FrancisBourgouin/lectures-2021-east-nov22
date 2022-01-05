const dbHelperGenerator = (client) => {
  const fetchAllJokes = () => {
    return client
      .query("SELECT * FROM jokes JOIN authors ON authors.id = jokes.author_id")
      .then((dbRes) => {
        return dbRes.rows;
      });
  };

  const fetchASingleJoke = (jokeId) => {
    return client
      .query(
        "SELECT * FROM jokes JOIN authors ON authors.id = jokes.author_id WHERE jokes.id = $1",
        [jokeId]
      )
      .then((dbRes) => {
        console.log(dbRes);
        return dbRes.rows[0];
      });
  };

  const addAuthorToDatabase = (name, funny, description) => {
    return client
      .query(
        "INSERT INTO authors (name, funny, description) VALUES ($1, $2, $3) RETURNING *",
        [name, funny, description]
      )
      .then((dbRes) => dbRes.rows[0]);
  };

  return { fetchAllJokes, fetchASingleJoke, addAuthorToDatabase };
};

module.exports = dbHelperGenerator;

const bob = (someParam) => {
  const bobby = 1;
};
