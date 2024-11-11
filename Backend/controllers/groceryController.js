const GroceryList = require('../models/GroceryList');

// Create or update grocery list for the user
exports.createOrUpdateGroceryList = async (req, res) => {
  try {
    const { items } = req.body;
    let groceryList = await GroceryList.findOne({ userId: req.user.id });

    if (groceryList) {
      groceryList.items = items;
      await groceryList.save();
    } else {
      groceryList = new GroceryList({ userId: req.user.id, items });
      await groceryList.save();
    }
    res.status(201).json(groceryList);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create/update grocery list' });
  }
};

// Share grocery list via email
exports.shareGroceryList = async (req, res) => {
  try {
    const { email } = req.body;
    const groceryList = await GroceryList.findOne({ userId: req.user.id });
    
    if (!groceryList) return res.status(404).json({ message: 'Grocery list not found' });

    // Dummy email sending logic
    console.log(`Sending grocery list to ${email}...`);

    res.json({ message: `Grocery list shared with ${email}` });
  } catch (error) {
    res.status(500).json({ error: 'Failed to share grocery list' });
  }
};
