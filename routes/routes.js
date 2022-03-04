const express = require('express');
const { getTransactionData, addTransaction, getSpecificTransactionData, deleteTransaction, updateTransaction } = require('../controllers/accountController');
const { getExpenses, addExpense, getSpecificExpense, deleteExpense, updateExpense } = require('../controllers/expensesController');
const router = express.Router();

// Expenses
router.get('/get-expenses', getExpenses);
router.post('/add-expense', addExpense);
router.get('/get-specific-expense/:expense_id', getSpecificExpense);
router.delete('/delete-expense/:expense_id', deleteExpense);
router.put('/update-expense/:expense_id', updateExpense);

// Account/Money (Transactions)
router.get('/get-transactions', getTransactionData);
router.post('/add-transaction', addTransaction);
router.get('/get-specific-transaction/:transaction_id', getSpecificTransactionData);
router.delete('/delete-transaction/:transaction_id', deleteTransaction);
router.put('/update-transaction/:transaction_id', updateTransaction);

module.exports = router;