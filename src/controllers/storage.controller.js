import storageService from "../services/storage.service.js";
import express from "express";
import itemService from "../services/item.service.js";

const storageController = express.Router();

storageController.get('/storages', async (req, res) => {
    try {
        let data = null;
        if (req.query.search) {
            data = await storageService.search(req.query.search);
        } else {
            data = await storageService.getAll();
        }

        if (!data || data.length === 0) {
            res.status(404).send("No storages found.");
            return;
        }

        res.json(data);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

storageController.get('/storages/:id', async (req, res) => {
    try {
        const data = await storageService.getById(req.params.id);

        if (!data) {
            res.status(404).send(`Storage with id ${req.params.id} not found.`);
            return;
        }

        res.json(data);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

storageController.post('/storages', async (req, res) => {
    try {
        const newStorage = await storageService.create(req.body);
        res.status(201).json(newStorage);
    } catch (error) {
        res.status(400).send("Bad Request: " + error.message);
    }
});

storageController.patch('/storages/:id', async (req, res) => {
    try {
        const updatedStorage = await storageService.update(req.params.id, req.body);

        if (!updatedStorage) {
            return res.status(404).send(`Storage with id ${req.params.id} not found.`);
        }

        res.json(updatedStorage);
    } catch (error) {
        res.status(400).send("Bad Request: " + error.message);
    }
});

storageController.delete('/storages/:id', async (req, res) => {
    try {
        const deletedStorage = await storageService.deleteById(req.params.id);

        if (!deletedStorage) {
            return res.status(404).send(`Storage with id ${req.params.id} not found.`);
        }

        // remove storage from all items
        await itemService.removeStorageFromItems(req.params.id);

        res.json(deletedStorage);
    } catch (error) {
        res.status(400).send("Bad Request: " + error.message);
    }
});

storageController.get('/storages/:id/items', async (req, res) => {
    try {
        const data = await storageService.getItems(req.params.id);

        if (!data || data.length === 0) {
            res.status(404).send("No items found in this storage.");
            return;
        }

        res.json(data);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

export default storageController;