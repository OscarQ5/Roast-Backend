const db = require("../db/dbConfig.js");

const getAllCoffees = async () => {
    try {
        const allCoffees = await db.any("SELECT * FROM coffees");
        return allCoffees;
    } catch (error) {
        return error;
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
        const newCoffee = await db.one("INSERT INTO coffees (name, is_favorite) VALUES ($1, $2) RETURNING *",
            [coffee.name, coffee.is_favorite]
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
            "UPDATE coffees SET name=$1, is_favorite=$2 where id=$3 RETURNING *",
            [coffee.name, coffee.is_favorite, id]
        );
        return updatedCoffee;
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAllCoffees,
    getCoffee,
    createCoffee,
    deleteCoffee,
    updateCoffee
};