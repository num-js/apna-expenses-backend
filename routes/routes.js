const express = require('express');
const { signupUser, signinUser } = require('../controllers/authController');
const { getExpenses, addExpense, getSpecificExpense, deleteExpense, updateExpense } = require('../controllers/expensesController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

// Auth Routers
router.post('/signup', signupUser);
router.post('/signin', signinUser);

// Expenses Routers
router.get('/get-expenses', authMiddleware, getExpenses);
router.post('/add-expense', authMiddleware, addExpense);
router.get('/get-specific-expense/:expense_id', authMiddleware, getSpecificExpense);
router.delete('/delete-expense/:expense_id', authMiddleware, deleteExpense);
router.put('/update-expense/:expense_id', authMiddleware, updateExpense);


module.exports = router;