const express = require('express');
const connectDB = require('./db/connection');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Route Imports
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/recipes', require('./routes/recipeRoutes'));
app.use('/api/grocery-list', require('./routes/groceryListRoutes'));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
