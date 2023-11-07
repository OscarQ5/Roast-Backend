const express = require("express");
const coffees = express.Router();
const { getAllCoffees, getCoffee, createCoffee, deleteCoffee, updateCoffee } = require("../queries/coffee.js");
const { checkName, checkBoolean } = require("../validations/checkCoffee.js")

coffees.get("/", async (req, res) => {
  const allcoffees = await getAllCoffees();
  if (allcoffees[0]) {
    res.status(200).json(allcoffees);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

coffees.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneCoffee = await getCoffee(id);
  if (oneCoffee) {
    res.json(oneCoffee);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

coffees.post("/", checkName, checkBoolean, async (req, res) => {
  const coffee = await createCoffee(req.body);
  res.status(200).json(coffee);
});

coffees.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedCoffee = await deleteCoffee(id);
  if (deletedCoffee.id) {
    res.status(200).json(deletedCoffee);
  } else {
    res.status(404).json({ error: "Coffee not found" });
  }
});

coffees.put("/:id", checkName, checkBoolean, async (req, res) => {
  const { id } = req.params;
  const updatedCoffee = await updateCoffee(id, req.body);
  if (updatedCoffee.id) {
    res.status(200).json(updatedCoffee);
  } else {
    res.status(404).json({ error: "Coffee not found" });
  }
});

module.exports = coffees;