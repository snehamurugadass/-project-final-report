const mongoose = require('mongoose');

const groceryListSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{ name: String, quantity: String }],
  sharedWith: [String], // Emails to share with
});

module.exports = mongoose.model('grocerylists', groceryListSchema);
