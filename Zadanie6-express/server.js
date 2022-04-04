import express from "express";
import fs from "fs";

const fsp = fs.promises;

const app = express();

app.get("/", (req, res) => {
  fsp
    .readFile("./data/hello.txt", "utf-8")
    .then((file) => fsp.writeFile("./data/hello2.txt", file, "utf-8"))
    .then((resultFromPreviousPromise) => console.log("success!"))
    .catch((error) => console.log(error));
  res.send("H W !");
});

// app.get("/", (req, res) => {
//   fs.readFile("./data/hello.txt", "utf-8", (error, data) => {
//     if (error) {
//       console.log(error);
//       return;
//     }
//     fs.writeFile("./data/hello2.txt", data, "utf-8", (err, data2) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//     });
//     console.log(data);
//   });
//   res.send("H W !");
// });

app.listen(5000, () => {
  console.log("The app is running on port 5000.");
});
