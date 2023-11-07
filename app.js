const express = require("express");
const cors = require("cors");
const coffeesController = require("./controllers/coffeesController.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/coffees", coffeesController)

app.get("/", (req,res) => {
    res.send("Welcome to the Roast☕️ App")
});

app.get("*", (req,res) => {
    res.status(404).send("Page not found");
});

module.exports = app;