import Item from "../models/item.model.js"
import logging from "logging";

const logger = logging.default("ItemService");

async function getAll() {
    return Item.find({}, undefined, undefined);
}

async function getById(id) {
    return Item.findById(id, undefined, undefined);
}

async function create(item) {
    try {
        return await Item.create(item, undefined);
    } catch (error) {
        logger.error("Error creating item:", error);
        throw new Error(error.message);
    }
}

async function update(id, item) {
    try {
        return await Item.findByIdAndUpdate(id, item, undefined);
    } catch (error) {
        logger.error("Error updating item:", error);
        throw new Error(error.message);
    }
}

async function deleteById(id) {
    try {
        return await Item.findByIdAndDelete(id, undefined);
    } catch (error) {
        logger.error("Error deleting item:", error);
        throw new Error(error.message)
    }
}

async function search(query) {
    try {
        // regex for case-insensitive search
        return await Item.find({name: new RegExp(`^${query}$`, 'i')}, undefined, undefined);
    } catch (error) {
        logger.error("Error searching for items:", error);
        console.error("Error searching for items:", error);
    }
}

async function removeStorageFromItems(storageId) {
    try {
        return await Item.updateMany({storage: storageId}, {storage: null});
    } catch (error) {
        logger.error("Error removing storage from items:", error);
        throw new Error(error.message);
    }
}

export default {getAll, getById, create, update, deleteById, search, removeStorageFromItems};