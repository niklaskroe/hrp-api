import express from 'express';
import ShoppingListController from '../controller/shoppingList.controller.js';
import ItemController from '../controller/item.controller.js'

const router = express.Router();

router.get('/', ShoppingListController.getAll);
router.get('/:id', ShoppingListController.getOne);
router.post('/', ShoppingListController.create);
router.put('/:id', ShoppingListController.update);
router.delete('/:id', ShoppingListController.delete);

// Item management
router.post('/:id/items', ShoppingListController.addItem);
router.delete('/:listId/items/:itemId', ShoppingListController.removeItem);

export default router;