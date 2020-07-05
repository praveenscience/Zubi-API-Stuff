// Step 1: Include Express JS in your application.
const express = require("express");
// Step 2: Create an instance of an Express JS Server.
const app = express();
// Step 3: Think about a port where this needs to listen to.
const port = 3000;
// Include Morgan middleware.
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());

// Just created a user!
const user = [
  {
    UserName: "praveen",
    FullName: "Praveen Kumar"
  },
  {
    UserName: "yash",
    FullName: "Yash Sharma"
  },
  {
    UserName: "ed",
    FullName: "Eddie Jaude"
  }
];

// Step 4: Create the first initial route.
app.get("/", (req, res) => res.json("Hello Zubi!"));

// Create a users route.
app.get("/users", (req, res) => res.json(user));

// Create an individual user route.
// This route is a dynamic route.
app.get("/users/:id", (req, res) => {
  if (!!user[req.params.id]) {
    res.json(user[req.params.id]);
  } else {
    res.status(404).json("Sorry, user not found.");
  }
});

// Creating something.
app.post("/users", (req, res) => {
  if (!!req.body.UserName && !!req.body.FullName) {
    user.push(req.body);
    res.json("Success");
  } else {
    res
      .status(400)
      .json("Please send only two values with UserName and FullName!");
  }
});

// app.put(); // Updating something.

// Removing something.
app.delete("/users/:id", (req, res) => {
  if (!!user[req.params.id]) {
    res.json(user.splice(req.params.id, 1));
  } else {
    res.status(404).json("Sorry, user not found.");
  }
});

// Step 5: Listen to the port.
app.listen(port, () => console.log("Listening in port " + 3000));
