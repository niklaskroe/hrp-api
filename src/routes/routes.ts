import express from 'express';
import mongoose from 'mongoose';
import { ItemController } from "../controllers/item.controller.js";

const router = express.Router();

// TODO: UI with endpoint overview
router.get('/', (req, res) => {
    res.send("imagine some UI here")
})

/** storages routes */
// router.get('/storages', StorageController.getAll);
// router.get('/storages/:id', StorageController.getById);

// router.post('/storages', StorageController.create);
// router.put('/storages/:id', StorageController.update);
// router.patch('/storages/:id', StorageController.patch);
// router.delete('/storages/:id', StorageController.delete);

// router.get('/storages/:id/items', StorageController.getItems);
// router.post('/storages/:id/items', StorageController.createItem);
// router.get('/storages/1/items/:id', StorageController.getItem);
// router.put('/storages/1/items/:id', StorageController.updateItem);
// router.patch('/storages/1/items/:id', StorageController.patchItem);
// router.delete('/storages/1/items/:id', StorageController.deleteItem)

/** items routes */
router.get('/items', ItemController.getAllItems);

// router.get('/items/:id');
router.post('/items', ItemController.create);
// router.put('/items/:id');
// router.patch('/items/:id');
// router.delete('items/:id', ItemController.delete);

/** shopping-lists routes */
// router.get('/shopping-lists', ShoppingListController.getAll);

// router.get('/shopping-lists/:id', ShoppingListController.getOne);
// router.post('/shopping-lists', ShoppingListController.create);
// router.put('/shopping-lists/:id', ShoppingListController.put);
// router.patch('/shopping-lists/:id', ShoppingListController.patch);
// router.delete('/shopping-lists/:id', ShoppingListController.delete);

// router.get('/shopping-lists/:id/items', ShoppingListController.getOne);

// router.post('/shopping-lists/:id/items');
// router.get('shopping-lists/:listId/items/:itemsId');
// router.put('/shopping-lists/:listId/items/:itemsId');
// router.patch('/shopping-lists/:listId/items/:itemsId');

/**
 * optional relationships - view p.2 under "REST-Webservice"
 * */
/** storages items relationship */
// router.get('/items/:id/storages', ItemController.getStorage);
// router.patch('/items/:id/storages', ItemController.patchStorage);
// router.put('/items/:id/storages', ItemController.putStorage);
// router.delete('/items/:id/storages', ItemController.deleteStorage);

/** items shopping-lists relationship */
// router.get('/items/:id/shopping-lists');
// router.patch('/items/:id/shopping-lists');
// router.put('/items/:id/shopping-lists');
// router.delete('/items/:id/shopping-lists');


router.get("/status", async (req, res) => {
    const mongoState = mongoose.connection.readyState; // 1 = connected, 0 = disconnected
  
    return res.json({
      status: mongoState === 1 ? "✅ Connected to MongoDB" : "❌ Not Connected",
      mongoState
    });
});

export default router;