import Item from "../models/item.model.js"
import logging from "logging";

const logger = logging.default("ItemService");

/**
 * fetch all items
 * @returns {Promise<Item[]>}
 */
async function getAll() {
    return Item.find({}, undefined, undefined);
}

/**
 * fetch item by id
 * @param {String} id
 * @returns {Promise<Item>}
 */
async function getById(id) {
    return Item.findById(id, undefined, undefined);
}

/**
 * create a new item
 * @param {Item} item
 * @returns {Promise<Item>}
 * @throws {Error}
 */
async function create(item) {
    try {
        return await Item.create(item, undefined);
    } catch (error) {
        logger.error("Error creating item:", error);
        throw new Error(error.message);
    }
}

/**
 * update an item
 * @param {String} id
 * @param {Item} item
 * @returns {Promise<Item>}
 * @throws {Error}
 */
async function update(id, item) {
    try {
        return await Item.findByIdAndUpdate(id, item, undefined);
    } catch (error) {
        logger.error("Error updating item:", error);
        throw new Error(error.message);
    }
}

/**
 * delete an item by id
 * @param {String} id
 * @returns {Promise<Item>}
 * @throws {Error}
 */
async function deleteById(id) {
    try {
        return await Item.findByIdAndDelete(id, undefined);
    } catch (error) {
        logger.error("Error deleting item:", error);
        throw new Error(error.message)
    }
}

/**
 * search for items by name
 * @param {String} query
 * @returns {Promise<Item[]>}
 * @throws {Error}
 */
async function search(query) {
    try {
        // regex for case-insensitive search
        return await Item.find({name: new RegExp(`^${query}$`, 'i')}, undefined, undefined);
    } catch (error) {
        logger.error("Error searching for items:", error);
        throw new Error(error.message);
    }
}

/**
 * remove storage from items
 * @param {String} storageId
 * @returns {Promise<Query>}
 * @throws {Error}
 */
async function removeStorageFromItems(storageId) {
    try {
        return await Item.updateMany({storage: storageId}, {storage: null});
    } catch (error) {
        logger.error("Error removing storage from items:", error);
        throw new Error(error.message);
    }
}

/**
 * remove shopping list from items
 * @param {String} shoppingListId
 * @returns {Promise<Query>}
 * @throws {Error}
 */
async function removeShoppingListFromItems(shoppingListId) {
    try {
        return await Item.updateMany({shoppingList: shoppingListId}, {shoppingList: null});
    } catch (error) {
        logger.error("Error removing shopping list from items:", error);
        throw new Error(error.message);
    }
}

export default {getAll, getById, create, update, deleteById, search, removeStorageFromItems, removeShoppingListFromItems};