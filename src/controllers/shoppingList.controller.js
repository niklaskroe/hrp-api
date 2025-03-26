import shoppingListService from '../services/shoppingList.service.js';
import express from 'express';
import itemService from "../services/item.service.js";
import mqttPublisher from "../mqtt/mqtt.publisher.js";

const shoppingListController = express.Router();

shoppingListController.get('/shopping-lists', async (req, res) => {
    try {
        let data = null;
        if (req.query.search) {
            data = await shoppingListService.search(req.query.search);
        } else {
            data = await shoppingListService.getAll();
        }

        if (!data || data.length === 0) {
            res.status(404).send('No shopping lists found.');
            return;
        }

        res.json(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

shoppingListController.get('/shopping-lists/:id', async (req, res) => {
    try {
        const data = await shoppingListService.getById(req.params.id);

        if (!data) {
            res.status(404).send(`Shopping list with id ${req.params.id} not found.`);
            return;
        }

        res.json(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

shoppingListController.post('/shopping-lists', async (req, res) => {
    try {
        const newShoppingList = await shoppingListService.create(req.body);

        mqttPublisher.publishAsync("shopping-lists", "post", req.body.url, JSON.stringify(newShoppingList));

        res.status(201).json(newShoppingList);
    } catch (error) {
        res.status(400).send('Bad Request: ' + error.message);
    }
});

shoppingListController.patch('/shopping-lists/:id', async (req, res) => {
    try {
        const updatedShoppingList = await shoppingListService.update(req.params.id, req.body);

        if (!updatedShoppingList) {
            return res.status(404).send(`Shopping list with id ${req.params.id} not found.`);
        }

        mqttPublisher.publish('shopping-lists', 'patch', req.body.url, JSON.stringify(updatedShoppingList));

        res.json(updatedShoppingList);
    } catch (error) {
        res.status(400).send('Bad Request: ' + error.message);
    }
});

shoppingListController.delete('/shopping-lists/:id', async (req, res) => {
    try {
        const deletedShoppingList = await shoppingListService.deleteById(req.params.id);

        if (!deletedShoppingList) {
            return res.status(404).send(`Shopping list with id ${req.params.id} not found.`);
        }

        // remove storage from all items
        await itemService.removeShoppingListFromItems(req.params.id);

        mqttPublisher.publish('shopping-lists', 'delete', req.body.url, JSON.stringify(deletedShoppingList));

        res.json(deletedShoppingList);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

shoppingListController.get('/shopping-lists/:id/items', async (req, res) => {
    try {
        const data = await shoppingListService.getItems(req.params.id);

        if (!data || data.length === 0) {
            res.status(404).send(`No items found for shopping list with id ${req.params.id}.`);
            return;
        }

        res.json(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

export default shoppingListController;