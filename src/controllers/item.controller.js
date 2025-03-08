import itemService from "../services/item.service.js";
import express from "express";

const itemController = express.Router();

itemController.get("/items", async (req, res) => {
    try {
        let data = null;
        if (req.query.search) {
            data = await itemService.search(req.query.search);
        } else {
            data = await itemService.getAll();
        }

        if (!data || data.length === 0) {
            res.status(404).send("No items found.");
            return;
        }

        res.json(data);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

itemController.get("/items/:id", async (req, res) => {
    try {
        const data = await itemService.getById(req.params.id);

        if (!data) {
            res.status(404).send(`Item with id ${req.params.id} not found.`);
            return;
        }

        res.json(data);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

itemController.post("/items", async (req, res, next) => {
    try {
        const newItem = await itemService.create(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).send("Bad Request: " + error.message);
    }
});

itemController.patch("/items/:id", async (req, res) => {
    try {
        const updatedItem = await itemService.update(req.params.id, req.body);

        if (!updatedItem) {
            return res.status(404).send(`Item with id ${req.params.id} not found.`);
        }

        res.json(updatedItem);
    } catch (error) {
        res.status(400).send("Bad Request: " + error.message);
    }
});

itemController.delete("/items/:id", async (req, res) => {
    try {
        const deletedItem = await itemService.deleteById(req.params.id);
        if (!deletedItem) {
            return res.status(404).send(`Item with id ${req.params.id} not found.`);
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

export default itemController;