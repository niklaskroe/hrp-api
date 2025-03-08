import express from 'express';
import mongoose from 'mongoose';

import ItemController from "../controllers/item.controller.js";

/** storages routes */

// router.get('/storages/:id/items', StorageController.getItems);
// router.post('/storages/:id/items', StorageController.createItem);
// router.get('/storages/1/items/:id', StorageController.getItem);
// router.put('/storages/1/items/:id', StorageController.updateItem);
// router.patch('/storages/1/items/:id', StorageController.patchItem);
// router.delete('/storages/1/items/:id', StorageController.deleteItem)

/** items routes */
//router.get('/items', ItemController.getAll());

// router.get('/items/:id');
//router.post('/items', ItemController.create);
// router.put('/items/:id');
// router.patch('/items/:id');
// router.delete('items/:id', ItemController.delete);

/** shopping-lists routes */
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




export default router;