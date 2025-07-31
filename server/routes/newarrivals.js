const express = require('express');
const router = express.Router();
const {
    getNewArrivals,
    getBookById, 
    getBooksByCategory,
    getBooksByCategoryById
} = require('../controllers/newarrivals');

router.get('/category/:categoryName', getBooksByCategory);
router.get('/category/:categoryName/:_id',getBooksByCategoryById);
router.get('/newarrivals', getNewArrivals);
router.get('/:id',getBookById);

module.exports = router;