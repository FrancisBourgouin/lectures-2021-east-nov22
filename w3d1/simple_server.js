const http = require("http");

const names = ["Monica", "Dymika", "Bita", "Madiha"];
const grades = [99, 50, 77, 88, 0, -1];

// bob.com/names/3
// bob.com/grades/0

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  const category = req.url.split("/")[1];
  const index = req.url.split("/")[2];

  console.log(req.url.split("/"));

  if (category === "names") {
    const message = `<h1 style="color:green;">Hello ${names[index]}</h1>`;
    return res.end(message);
  }

  if (category === "grades") {
    const message = `<h1 style="color:green;">You got ${grades[index]}</h1>`;
    return res.end(message);
  }

  return res.end("You're asking for something that is there, maybe for now.");
});
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });

//   const urlSplit = req.url.split("/");
//   const nameIndex = req.url.split("/")[1];

//   res.end(`<h1 style="color:green;">Hello ${names[nameIndex]}</h1>`);
// });

server.on("clientError", (err, socket) => {
  socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
});

server.listen(8000);
