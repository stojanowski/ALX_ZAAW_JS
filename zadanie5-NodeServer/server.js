import http from "http";
import fs from "fs";

const fsp = fs.promises;
fsp
  .readFile("./data/cars.json", "utf-8")
  .then((jsonFile) => {
    console.log(jsonFile);
  })
  .catch((err) => {
    console.error("Błąd", err);
  });

const server = http.createServer((request, response) => {
  // console.log(request.url);
  if (request.url === "/cars") {
    if (request.method === "GET") {
      return fsp
        .readFile("./data/cars.json", "utf-8")
        .then((jsonFile) => {
          console.log(jsonFile);
        })
        .catch((err) => {
          console.error("Błąd", err);
        });
    }
  }
  response.writeHead(404, { contentType: "application/json" });
  response.write(JSON.stringify({ message: "Not found" }));
  response.end();
});

server.listen(3005);
console.log("Node web server is runningo on port 3005 ");
