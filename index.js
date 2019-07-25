const express = require("express");
const port = 3000;
const app = express();
app.use(express.json());

const data = require("./users");
const { hello } = require("./hello");

app.get("/", async (req, res) => {
  if (data.users.length) {
    res.status(200).json(data.users);
  } else {
    res.status(404).json("no users");
  }
});
app.get("/:id", async (req, res) => {
  if (req.params.id) {
    if (data.users[req.params.id]) {
      res.json(data.users[req.params.id]);
    } else {
      res.status(404).json("user could not be found");
    }
  } else {
    res.status(400).json("please provide a id");
  }
});
app.get("/hello/:id", async (req, res) => {
  if (req.params.id) {
    if (data.users[req.params.id].name) {
      let welcome = await hello(data.users[req.params.id].name);
      res.json(welcome);
    } else {
      res.status(404).json("user could not be found");
    }
  } else {
    res.status(400).json("please provide a id");
  }
});
app.post("/", async (req, res) => {
  if (req.body) {
    data.users.push(req.body);
    res.status(201).json(data.users[data.users.length - 1]);
  } else {
    res.status(400).json("please provide a body");
  }
});

app.delete("/:id", async (req, res) => {
  if (req.params.id) {
    if (data.users[req.params.id]) {
      data.users.splice(req.params.id, 1);
      res.status(204).json("Successfully deleted");
    } else {
      res.status(404).json("user could not be found");
    }
  } else {
    res.status(400).json("please provide a id");
  }
});

app.listen(port, () => console.log(`WE ARE ON PORT ${port}`));

module.exports = app;
