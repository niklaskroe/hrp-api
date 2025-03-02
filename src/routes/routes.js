import express from 'express';
import mongoose from 'mongoose';

import ShoppingListController from '../controllers/shoppingList.controller.js';
import ItemController from '../controllers/item.controller.js'

const router = express.Router();

// TODO: UI with endpoint overview

/** storage routes */
router.get('/storage', StorageController.getAll);
// router.get('/storage/:id', StorageController.getById);

// router.post('/storage', StorageController.create);
// router.put('/storage/:id', StorageController.update);
// router.patch('/storage/:id', StorageController.patch);
// router.delete('/storage/:id', StorageController.delete);

// router.get('/storage/:id/items', StorageController.getItems);
// router.post('/storage/:id/items', StorageController.createItem);
// router.get('/storage/1/items/:id', StorageController.getItem);
// router.put('/storage/1/items/:id', StorageController.updateItem);
// router.patch('/storage/1/items/:id', StorageController.patchItem);
// router.delete('/storage/1/items/:id', StorageController.deleteItem)

/** item routes */
router.get('/item', ItemController.getAll);

// router.get('/item/:id');
// router.post('/item', ItemController.create);
// router.put('/item/:id');
// router.patch('/item/:id');
// router.delete('item/:id', ItemController.delete);

/** shopping-list routes */
router.get('/shopping-list', ShoppingListController.getAll);

// router.get('/shopping-list/:id', ShoppingListController.getOne);
// router.post('/shopping-list', ShoppingListController.create);
// router.put('/shopping-list/:id', ShoppingListController.put);
// router.patch('/shopping-list/:id', ShoppingListController.patch);
// router.delete('/shopping-list/:id', ShoppingListController.delete);

// router.get('/shopping-list/:id/items', ShoppingListController.getOne);

// router.post('/shopping-list/:id/items');
// router.get('shopping-list/:listId/items/:itemId');
// router.put('/shopping-list/:listId/items/:itemId');
// router.patch('/shopping-list/:listId/items/:itemId');

/** storage item relationship */
// router.get('/item/:id/storage', ItemController.getStorage);
// router.patch('/item/:id/storage', ItemController.patchStorage);
// router.put('/item/:id/storage', ItemController.putStorage);
// router.delete('/item/:id/storage', ItemController.deleteStorage);

/** item shopping-list relationship */
// router.get('/item/:id/shopping-list');
// router.patch('/item/:id/shopping-list');
// router.put('/item/:id/shopping-list');
// router.delete('/item/:id/shopping-list');


router.get("/status", async (req, res) => {
    const mongoState = mongoose.connection.readyState; // 1 = connected, 0 = disconnected
  
    return res.json({
      status: mongoState === 1 ? "✅ Connected to MongoDB" : "❌ Not Connected",
      mongoState
    });
});

export default router;