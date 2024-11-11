const Recipe = require('../models/Recipe');

// Create a new recipe (only admin can approve it)
exports.createRecipe = async (req, res) => {
  try {
    const { name, ingredients, dietaryPreference } = req.body;
    const recipe = new Recipe({
      name,
      ingredients,
      dietaryPreference,
      createdBy: req.user.id,
      approved: req.user.isAdmin // Auto-approve if admin
    });
    await recipe.save();
    res.status(201).json({msg: 'recipe sucessful'});
  } catch (error) {
    res.status(400).json({ error: 'Failed to create recipe' });
  }
};

// Get all recipes (only approved for non-admin users)
exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find(req.user.isAdmin ? {} : { approved: true });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
};

// Approve a recipe (admin only)
exports.approveRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

    recipe.approved = true;
    await recipe.save();
    res.json({ message: 'Recipe approved' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to approve recipe' });
  }
};
