import ItemService from "../services/item.service.js";
import express from "express";

const itemController = express.Router();

// Controller functions
itemController.get("/items", async (req, res) => {
    res.send("GET /items");
    await ItemService.test();
});

itemController.get("/items/:id", async (req, res) => {
    res.send("GET /items/" + req.params.id);
});

itemController.post("/items", async (req, res) => {
    res.send("POST /items: " + JSON.stringify(req.body));
});

itemController.put("items/:id", async (req, res) => {
    res.send("PUT /items/" + req.params.id + ": " + JSON.stringify(req.body));
});

itemController.patch("items/:id", async (req, res) => {
    res.send("PATCH /items/" + req.params.id + ": " + JSON.stringify(req.body));
});

itemController.delete("items/:id", async (req, res) => {
    res.send("DELETE /items/" + req.params.id);
});

export default itemController;