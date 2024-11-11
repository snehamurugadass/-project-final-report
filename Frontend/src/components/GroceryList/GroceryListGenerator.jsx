import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GroceryListGenerator = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [groceryList, setGroceryList] = useState([]);

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

  const generateGroceryList = async () => {
    const items = selectedRecipes.flatMap((recipeId) => {
      const recipe = recipes.find((r) => r._id === recipeId);
      return recipe ? recipe.ingredients : [];
    });
    try {
      const res = await axios.post('/api/grocery-list', { items });
      setGroceryList(res.data.items);
      alert('Grocery list generated');
    } catch (error) {
      console.error('Failed to generate grocery list', error);
    }
  };

  return (
    <div>
      <h2>Grocery List Generator</h2>
      <select multiple onChange={(e) => setSelectedRecipes(Array.from(e.target.selectedOptions, option => option.value))}>
        {recipes.map((recipe) => (
          <option key={recipe._id} value={recipe._id}>{recipe.name}</option>
        ))}
      </select>
      <button onClick={generateGroceryList}>Generate Grocery List</button>
      <ul>
        {groceryList.map((item, index) => (
          <li key={index}>{item.name} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryListGenerator;
