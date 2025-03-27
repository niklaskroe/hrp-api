import Storage from "../models/storage.model.js";
import logging from "logging";
import Item from "../models/item.model.js";

const logger = logging.default("StorageService");

/**
 * fetch all storages
 * @returns {Promise<Storage[]>}
 */
async function getAll() {
    return Storage.find({}, undefined, undefined);
}

/**
 * fetch storage by id
 * @param {String} id
 * @returns {Promise<Storage>}
 */
async function getById(id) {
    return Storage.findById(id, undefined, undefined);
}

/**
 * create a new storage
 * @param {Storage} storage
 * @returns {Promise<Storage>}
 * @throws {Error}
 */
async function create(storage) {
    try {
        return await Storage.create(storage, undefined);
    } catch (error) {
        logger.error("Error creating storage:", error);
        throw new Error(error.message);
    }
}

/**
 * update storage by id
 * @param {String} id
 * @param {Storage} storage
 * @return {Promise<Storage>}
 * @throws {Error}
 */
async function update(id, storage) {
    try {
        return await Storage.findByIdAndUpdate(id, storage, undefined);
    } catch (error) {
        logger.error("Error updating storage:", error);
        throw new Error(error.message);
    }
}

/**
 * delete storage by id
 * @param {String} id
 * @returns {Promise<Storage>}
 * @throws {Error}
 */
async function deleteById(id) {
    try {
        return await Storage.findByIdAndDelete(id, undefined);
    } catch (error) {
        logger.error("Error deleting storage:", error);
        throw new Error(error.message)
    }
}

/**
 * search for storages by name
 * @param {String} query
 * @returns {Promise<Storage[]>}
 * @throws {Error}
 */
async function search(query) {
    try {
        // regex for case-insensitive search
        return await Storage.find({name: new RegExp(`^${query}`, 'i')}, undefined, undefined);
    } catch (error) {
        logger.error("Error searching for storages:", error);
        console.error("Error searching for storages:", error);
    }
}

/**
 * fetch items from storage by id
 * @param {String} storageId
 * @returns {Promise<Item[]>}
 * @throws {Error}
 */
async function getItems(storageId) {
    try {
        return await Item.find({storage: storageId}, undefined, undefined);
    } catch (error) {
        logger.error("Error getting items by storage:", error);
        throw new Error(error.message);
    }
}

export default {getAll, getById, create, update, deleteById, search, getItems};