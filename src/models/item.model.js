import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  expiration_date: { type: Date, required: false },
  storage: { type: mongoose.Schema.Types.ObjectId, ref: "Storage" },
  shoppingList: { type: mongoose.Schema.Types.ObjectId, ref: "ShoppingList" }
});

export default mongoose.model("Item", itemSchema);