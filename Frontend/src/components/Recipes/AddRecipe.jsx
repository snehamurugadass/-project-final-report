import React, { useState } from 'react';
import axios from 'axios';

const AddRecipe = () => {
  const [name, setName] = useState('');
  const [dietaryPreference, setDietaryPreference] = useState('');
  const [ingredients, setIngredients] = useState([{ name: '', quantity: '' }]);

  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);
  };

  const addIngredientField = () => {
    setIngredients([...ingredients, { name: '', quantity: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/recipes', { name, dietaryPreference, ingredients });
      alert('Recipe submitted for approval');
    } catch (error) {
      console.error('Failed to add recipe', error);
    }
  };

  return (
    <div>
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Recipe Name" required />
        <input type="text" value={dietaryPreference} onChange={(e) => setDietaryPreference(e.target.value)} placeholder="Dietary Preference" />
        
        {ingredients.map((ing, index) => (
          <div key={index}>
            <input type="text" value={ing.name} onChange={(e) => handleIngredientChange(index, 'name', e.target.value)} placeholder="Ingredient Name" required />
            <input type="text" value={ing.quantity} onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)} placeholder="Quantity" required />
          </div>
        ))}
        <button type="button" onClick={addIngredientField}>Add Ingredient</button>
        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
