import mongoose from "mongoose";

const storageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
})

export default mongoose.model("Storage", storageSchema);