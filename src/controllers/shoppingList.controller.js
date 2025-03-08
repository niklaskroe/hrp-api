import shoppingListService from '../services/shoppingList.service.js';
import express from 'express';

const shoppingListController = express.Router();

shoppingListController.get('/shopping-lists', (req, res) => {
    res.send("GET /shopping-lists");
    shoppingListService.getAll();
});

shoppingListController.get('/shopping-lists/:id', (req, res) => {
    res.send("GET /shopping-lists/" + req.params.id);
    shoppingListService.getOne();
});

shoppingListController.post('/shopping-lists', (req, res) => {
    res.send("POST /shopping-lists: " + JSON.stringify(req.body));
    shoppingListService.create();
});

shoppingListController.put('/shopping-lists/:id', (req, res) => {
    res.send("PUT /shopping-lists/" + req.params.id + ": " + JSON.stringify(req.body));
    shoppingListService.update();
});

shoppingListController.patch('/shopping-lists/:id', (req, res) => {
    res.send("PATCH /shopping-lists/" + req.params.id + ": " + JSON.stringify(req.body));
    shoppingListService.patch();
});

shoppingListController.delete('/shopping-lists/:id', (req, res) => {
    res.send("DELETE /shopping-lists/" + req.params.id);
    shoppingListService.delete();
});

export default shoppingListController;