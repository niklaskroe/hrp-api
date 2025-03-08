import mongoose from "mongoose";

const shoppingListSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

export default mongoose.model("ShoppingList", shoppingListSchema);