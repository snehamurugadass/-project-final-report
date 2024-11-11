const express = require('express');
const { createOrUpdateGroceryList, shareGroceryList } = require('../controllers/groceryController');
const router = express.Router();

router.post('/', createOrUpdateGroceryList);
router.post('/share', shareGroceryList);

module.exports = router;
