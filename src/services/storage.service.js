import Storage from "../models/storage.model.js";
import logging from "logging";
import Item from "../models/item.model.js";

const logger = logging.default("StorageService");

async function getAll() {
    return Storage.find({}, undefined, undefined);
}

async function getById(id) {
    return Storage.findById(id, undefined, undefined);
}

async function create(storage) {
    try {
        return await Storage.create(storage, undefined);
    } catch (error) {
        logger.error("Error creating storage:", error);
        throw new Error(error.message);
    }
}

async function update(id, storage) {
    try {
        return await Storage.findByIdAndUpdate(id, storage, undefined);
    } catch (error) {
        logger.error("Error updating storage:", error);
        throw new Error(error.message);
    }
}

async function deleteById(id) {
    try {
        return await Storage.findByIdAndDelete(id, undefined);
    } catch (error) {
        logger.error("Error deleting storage:", error);
        throw new Error(error.message)
    }
}

async function search(query) {
    try {
        // regex for case-insensitive search
        return await Storage.find({name: new RegExp(`^${query}$`, 'i')}, undefined, undefined);
    } catch (error) {
        logger.error("Error searching for storages:", error);
        console.error("Error searching for storages:", error);
    }
}

export default {getAll, getById, create, update, deleteById, search};