import ShoppingListService from '../services/shoppingList.service.js';
import express from 'express';

const ShoppingListController = express.Router();

ShoppingListController.get('/shopping-lists', (req, res) => {
    res.send("GET /shopping-lists");
    ShoppingListService.getAll();
});

ShoppingListController.get('/shopping-lists/:id', (req, res) => {
    res.send("GET /shopping-lists/" + req.params.id);
    ShoppingListService.getOne();
});

ShoppingListController.post('/shopping-lists', (req, res) => {
    res.send("POST /shopping-lists: " + JSON.stringify(req.body));
    ShoppingListService.create();
});

ShoppingListController.put('/shopping-lists/:id', (req, res) => {
    res.send("PUT /shopping-lists/" + req.params.id + ": " + JSON.stringify(req.body));
    ShoppingListService.update();
});

ShoppingListController.patch('/shopping-lists/:id', (req, res) => {
    res.send("PATCH /shopping-lists/" + req.params.id + ": " + JSON.stringify(req.body));
    ShoppingListService.patch();
});

ShoppingListController.delete('/shopping-lists/:id', (req, res) => {
    res.send("DELETE /shopping-lists/" + req.params.id);
    ShoppingListService.delete();
});