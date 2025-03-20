import ShoppingList from '../models/shoppingList.model.js';
import logging from "logging";

const logger = logging.default("ShoppingListService");

async function getAll() {
    return ShoppingList.find({}, undefined, undefined);
}

async function getById(id) {
    return ShoppingList.findById(id, undefined, undefined);
}

async function create(shoppingList) {
    try {
        return await ShoppingList.create(shoppingList, undefined);
    } catch (error) {
        logger.error("Error creating shoppingList:", error);
        throw new Error(error.message);
    }
}

async function update(id, shoppingList) {
    try {
        return await ShoppingList.findByIdAndUpdate(id, shoppingList, undefined);
    } catch (error) {
        logger.error("Error updating shoppingList:", error);
        throw new Error(error.message);
    }
}

async function deleteById(id) {
    try {
        return await ShoppingList.findByIdAndDelete(id, undefined);
    } catch (error) {
        logger.error("Error deleting shoppingList:", error);
        throw new Error(error.message);
    }
}

async function search(query) {
    try {
        // case-insensitive search
        return await ShoppingList.find({name: new RegExp(`^${query}$`, 'i')}, undefined, undefined);
    } catch (error) {
        logger.error("Error searching for shoppingLists:", error);
        throw new Error(error.message);
    }
}

async function getItems(shoppingListId) {
    try {
        return await Item.find({shoppingList: shoppingListId}, undefined, undefined);
    } catch (error) {
        logger.error("Error getting items by shoppingList:", error);
        throw new Error(error.message);
    }
}

export default {getAll, getById, create, update, deleteById, search, getItems};