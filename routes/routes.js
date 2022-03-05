const express = require('express');
const { getTransactionData, addTransaction, getSpecificTransactionData, deleteTransaction, updateTransaction } = require('../controllers/accountController');
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

// Account/Money (Transactions)
router.get('/get-transactions', authMiddleware, getTransactionData);
router.post('/add-transaction', authMiddleware, addTransaction);
router.get('/get-specific-transaction/:transaction_id', authMiddleware, getSpecificTransactionData);
router.delete('/delete-transaction/:transaction_id', authMiddleware, deleteTransaction);
router.put('/update-transaction/:transaction_id', authMiddleware, updateTransaction);

module.exports = router;