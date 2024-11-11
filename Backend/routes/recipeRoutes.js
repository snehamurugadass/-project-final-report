const express = require('express');
const { createRecipe, getRecipes, approveRecipe } = require('../controllers/recipeController');
const router = express.Router();

router.post('/', createRecipe);
router.get('/', getRecipes);
router.patch('/:id/approve', approveRecipe); // Admin-only

module.exports = router;
