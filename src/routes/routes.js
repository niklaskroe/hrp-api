import express from 'express';
import ShoppingListController from '../controllers/shoppingList.controller.js';
import ItemController from '../controllers/item.controller.js'

const router = express.Router();

// TODO: UI with endpoint overview

// shopping-list management
router.get('/shopping-list', ShoppingListController.getAll);
// router.get('/shopping-list/:id', ShoppingListController.getOne);
// router.get('/shopping-list/:id/items', ShoppingListController.getOne);
// router.post('/shopping-list/:id/items');
// router.get('shopping-list/:listId/items/:itemId');
// router.put('/shopping-list/:listId/items/:itemId');
// router.patch('/shopping-list/:listId/items/:itemId');
// router.post('/shopping-list', ShoppingListController.create);
// router.put('/shopping-list/:id', ShoppingListController.update);
// router.delete('/shopping-list/:id', ShoppingListController.delete);

// item management
router.get('/item', ItemController.getAll);
// router.get('/item/:id');
// router.get('/item/:id/shopping-list');
// router.patch('/item/:id/shopping-list');
// router.put('/item/:id/shopping-list');
// router.delete('/item/:id/shopping-list');
// router.post('/item', ItemController.create);
// router.put('/item/:id');
// router.patch('/item/:id');
// router.delete('item/:id', ItemController.delete);

export default router;