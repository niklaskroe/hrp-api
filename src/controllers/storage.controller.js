import storageService from '../services/storage.service.js';
import express from "express";

const storageController = express.Router();

storageController.get('/storages', async (req, res) => {
    res.send("GET /storages");
    await storageService.test();
});

storageController.get('/storages/:id', async (req, res) => {
    res.send("GET /storages/" + req.params.id);
});

storageController.post('/storages', async (req, res) => {
    res.send("POST /storages: " + JSON.stringify(req.body));
});

storageController.put('/storages/:id', async (req, res) => {
    res.send("PUT /storages/" + req.params.id + ": " + JSON.stringify(req.body));
});

storageController.patch('/storages/:id', async (req, res) => {
    res.send("PATCH /storages/" + req.params.id + ": " + JSON.stringify(req.body));
});

storageController.delete('/storages/:id', async (req, res) => {
    res.send("DELETE /storages/" + req.params.id);
});

export default storageController;