const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "francis",
  password: "francis",
  port: 5432,
  database: "ultrabob",
});

const name = process.argv[2];
const funny = process.argv[3];
const description = process.argv[4];

// const [, , name, funny, description] = process.argv;

const insertAuthorQuery = `
  INSERT INTO authors
  (name, funny, description)
  VALUES
  ($1, $2, $3)
  RETURNING id
  ;
`;

client.connect();

client
  .query(insertAuthorQuery, [name, funny, description])
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => client.end());
