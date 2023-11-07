const db = require("../db/dbConfig.js");

const getAllCoffees = async () => {
    try {
        const allCoffees = await db.any("SELECT * FROM coffees");
        return allCoffees;
    } catch (err) {
        return err;
    }
};

const getCoffee = async (id) => {
    try {
        const oneCoffee = await db.one("SELECT * FROM coffees WHERE id=$1", id);
        return oneCoffee;
    } catch (err) {
        return err;
    }
};

const createCoffee = async (coffee) => {
    try {
        const newCoffee = await db.one("INSERT INTO coffees (name, origin, roast, note, grind, price, is_favorite) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [coffee.name, coffee.origin, coffee.roast, coffee.note, coffee.grind, coffee.price, coffee.is_favorite]
        );
        return newCoffee;
    } catch (err) {
        return err;
    }
};

const deleteCoffee = async (id) => {
    try {
        const deletedCoffee = await db.one(
            "DELETE FROM coffees WHERE id=$1 RETURNING *",
            id
        );
        return deletedCoffee;
    } catch (err) {
        return err;
    }
};

const updateCoffee = async (id, coffee) => {
    try {
        const updatedCoffee = await db.one(
            "UPDATE coffees SET name=$1, origin=$2, roast=$3, note=$4, grind=$5, price=$6, is_favorite=$7 where id=$8 RETURNING *",
            [coffee.name, coffee.origin, coffee.roast, coffee.note, coffee.grind, coffee.price, coffee.is_favorite, id]
        );
        return updatedCoffee;
    } catch (err) {
        return err;
    }
};

module.exports = {
    getAllCoffees,
    getCoffee,
    createCoffee,
    deleteCoffee,
    updateCoffee
};