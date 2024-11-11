import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import RecipeList from './components/Recipes/RecipeList';
import AddRecipe from './components/Recipes/AddRecipe';
import GroceryListGenerator from './components/GroceryList/GroceryListGenerator';
import ShareList from './components/GroceryList/ShareList';
import WeeklyMealPlan from './components/MealPlan/WeeklyMealPlan';
import Navbar from './components/Navbar';
import WelcomePage from './components/WelcomePage';


function App() {
  return (
   
      <div>
        <Navbar /> {/* Include the Navbar here */}
        
        <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/grocery-list" element={<GroceryListGenerator />} />
          <Route path="/share-list" element={<ShareList />} />
          <Route path="/meal-plan" element={<WeeklyMealPlan />} />
        </Routes>
      </div>
   
  );
}

export default App;
