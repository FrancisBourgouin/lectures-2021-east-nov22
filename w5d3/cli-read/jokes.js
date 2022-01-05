const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "francis",
  password: "francis",
  port: 5432,
  database: "ultrabob",
});

client.connect();

const basicQuery = "SELECT * FROM jokes";
const joinedQuery =
  "SELECT *, jokes.id AS joke_id FROM jokes JOIN authors ON authors.id = jokes.author_id";
const joinedQueryWithLimit = `
SELECT *, jokes.id AS joke_id 
FROM jokes JOIN authors ON authors.id = jokes.author_id 
LIMIT $1`;

// client.query(joinedQuery).then((result) => parseAllJokes(result.rows));
client
  .query(joinedQueryWithLimit, [process.argv[2]])
  .then((result) => parseAllJokes(result.rows));

// {
//   id: 10,
//   question: 'What do you call a fly without wings?',
//   answer: 'A walk',
//   rating: 5,
//   author_id: 9
// },

const parseAllJokes = (jokes) => {
  for (const joke of jokes) {
    parseJoke(joke);
  }
};

const parseJoke = (joke) => {
  console.log(`---------------${joke.id}---------------`);
  console.log(`${joke.question}`);
  console.log(`${joke.answer}`);
  console.log(`----------------By ${joke.name}---------------- \n \n`);
};
