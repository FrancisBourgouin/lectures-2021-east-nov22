const { Client } = require("pg");
const fs = require("fs");

const client = new Client({
  host: "localhost",
  user: "francis",
  password: "francis",
  port: 5432,
  database: "ultrabob",
});

client.connect();

const joinedQueryWithLimit = `
SELECT *, jokes.id AS joke_id 
FROM jokes JOIN authors 
ON authors.id = jokes.author_id 
LIMIT $1`;

client
  .query(joinedQueryWithLimit, [process.argv[2]])
  .then((result) => writeToJSONFile(result.rows));

const writeToJSONFile = (data) => {
  const stringifiedData = JSON.stringify(data);

  fs.writeFileSync("./jokes.json", stringifiedData);
};
