var express = require("express");
var router = express.Router();
const fs = require("fs");
const { param } = require(".");

const fsp = fs.promises;
let users = [];

/* GET users listing. */
router.get("/", function (req, res) {
  readFile();

  res.send(users);
});
/* GET users listing. */
router.get("/:userID", function (req, res) {
  fsp
    .readFile("data/users.json", "utf-8")
    .then((file) => {
      users = JSON.parse(file);
      const us = users.find((user) => user.id === parseInt(req.params.userID, 10));
      return res.status(200).send(us);
    })
    .catch((err) => console.log(err));

  // console.log(us);
  // return res.status(200).send(us);
});

/* POST users listing. */
router.post("/", function (req, res) {
  readFile(); // ten odczyt jednak trzeba zrobić w tej funkcji i dodanie w "then"
  // bo wtedy tablica jest pusta
  const newFile = [
    ...users,
    {
      id: req.body.id,
      name: req.body.name,
    },
  ];

  fsp
    .writeFile("data/users.json", JSON.stringify(newFile), "utf-8")
    .then(() => res.status(201))
    .catch((err) => console.log(err));

  console.log(newFile);

  //res.status(201);
});

function readFile() {
  fsp
    .readFile("data/users.json", "utf-8")
    .then((file) => (users = JSON.parse(file)))
    .catch((err) => console.log(err));
}

module.exports = router;
