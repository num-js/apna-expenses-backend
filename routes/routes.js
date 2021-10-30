const express = require('express');
const { signupUser, signinUser } = require('../controllers/authController');
const { getExpenses, addExpense, getSpecificExpense, deleteExpense, updateExpense } = require('../controllers/expensesController');
const router = express.Router();

// Auth Routers
router.post('/signup', signupUser);
router.post('/signin', signinUser);

// Expenses Routers
router.get('/get-expenses', getExpenses);
router.post('/add-expense', addExpense);
router.get('/get-specific-expense/:expense_id', getSpecificExpense);
router.delete('/delete-expense/:expense_id', deleteExpense);
router.put('/update-expense/:expense_id', updateExpense);


module.exports = router;