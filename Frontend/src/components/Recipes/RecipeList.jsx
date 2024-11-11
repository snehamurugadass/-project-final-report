import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const res = await axios.get('/api/recipes');
      setRecipes(res.data);
    } catch (error) {
      console.error('Failed to fetch recipes', error);
    }
  };

  const approveRecipe = async (id) => {
    try {
      await axios.patch(`/api/recipes/${id}/approve`);
      fetchRecipes();
      alert('Recipe approved');
    } catch (error) {
      console.error('Failed to approve recipe', error);
    }
  };

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <strong>{recipe.name}</strong> - {recipe.dietaryPreference}
            <ul>
              {recipe.ingredients.map((ing, index) => (
                <li key={index}>{ing.name} - {ing.quantity}</li>
              ))}
            </ul>
            {!recipe.approved && (
              <button onClick={() => approveRecipe(recipe._id)}>Approve</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;

