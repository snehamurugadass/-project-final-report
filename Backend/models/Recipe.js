const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [{ name: String, quantity: String }],
  dietaryPreference: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  approved: { type: Boolean, default: false }, // Admin approval required
});

module.exports = mongoose.model('recipes', recipeSchema);
