import ItemService from "../services/item.service.js";
import express from "express";
import mongoose from "mongoose";

const itemController = express.Router();

// Controller functions
itemController.get("/items", async (req, res) => {
    res.send("GET /items");
});

itemController.get("/items/:id", async (req, res) => {
    res.send("GET /items/" + req.params.id);
});

export default itemController;