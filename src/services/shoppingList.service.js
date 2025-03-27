import ShoppingList from '../models/shoppingList.model.js';
import logging from "logging";
import Item from "../models/item.model.js";

const logger = logging.default("ShoppingListService");

/**
 * fetch all shoppingLists
 * @returns {Promise<ShoppingList[]>}
 */
async function getAll() {
    return ShoppingList.find({}, undefined, undefined);
}

/**
 * fetch shopping-list by id
 * @param {String} id
 * @returns {Promise<ShoppingList>}
 * */
async function getById(id) {
    return ShoppingList.findById(id, undefined, undefined);
}

/**
 * create a new shopping-list
 * @param {ShoppingList} shoppingList
 * @returns {Promise<ShoppingList>}
 * @throws {Error}
 */
async function create(shoppingList) {
    try {
        return await ShoppingList.create(shoppingList, undefined);
    } catch (error) {
        logger.error("Error creating shoppingList:", error);
        throw new Error(error.message);
    }
}

/**
 * update shopping-list by id
 * @param {String} id
 * @param {ShoppingList} shoppingList
 * @return {Promise<ShoppingList>}
 * @throws {Error}
 */
async function update(id, shoppingList) {
    try {
        return await ShoppingList.findByIdAndUpdate(id, shoppingList, undefined);
    } catch (error) {
        logger.error("Error updating shoppingList:", error);
        throw new Error(error.message);
    }
}

/**
 * delete shopping-list by id
 * @param {String} id
 * @returns {Promise<ShoppingList>}
 * @throws {Error}
 */
async function deleteById(id) {
    try {
        return await ShoppingList.findByIdAndDelete(id, undefined);
    } catch (error) {
        logger.error("Error deleting shoppingList:", error);
        throw new Error(error.message);
    }
}

/**
 * search for shopping-list by name
 * @param {String} query
 * @returns {Promise<ShoppingList[]>}
 * @throws {Error}
 */
async function search(query) {
    try {
        // case-insensitive search
        return await ShoppingList.find({name: new RegExp(`^${query}`, 'i')}, undefined, undefined);
    } catch (error) {
        logger.error("Error searching for shoppingLists:", error);
        throw new Error(error.message);
    }
}

/**
 * fetch items from shopping-list by id
 * @param {String} shoppingListId
 * @returns {Promise<Item[]>}
 * @throws {Error}
 */
async function getItems(shoppingListId) {
    try {
        return await Item.find({shoppingList: shoppingListId}, undefined, undefined);
    } catch (error) {
        logger.error("Error getting items by shoppingList:", error);
        throw new Error(error.message);
    }
}

export default {getAll, getById, create, update, deleteById, search, getItems};