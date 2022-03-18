const express = require('express');
const { getTransactionData, addTransaction, getSpecificTransactionData, deleteTransaction, updateTransaction } = require('../controllers/accountController');
const { getAllKhatas, addKhata, getSpecificKhata, deleteKhata, updateKhata } = require('../controllers/khataController');
const { signupUser, signinUser } = require('../controllers/authController');
const { getExpenses, addExpense, getSpecificExpense, deleteExpense, updateExpense } = require('../controllers/expensesController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { getKhataTransactions, addKhataTransaction, getSpecificKhataTransaction, deleteKhataTransaction, updateKhataTransaction } = require('../controllers/khataTransactionController');
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

// Khata
router.get('/get-all-khatas', authMiddleware, getAllKhatas);
router.post('/add-khata', authMiddleware, addKhata);
router.get('/get-specific-khata/:khata_id', authMiddleware, getSpecificKhata);
router.delete('/delete-khata/:khata_id', authMiddleware, deleteKhata);
router.put('/update-khata/:khata_id', authMiddleware, updateKhata);

// Khata Transactions
router.get('/get-khata-transactions/:khata_id', authMiddleware, getKhataTransactions);
router.post('/add-khata-transaction', authMiddleware, addKhataTransaction);
router.get('/get-specific-khata-transaction/:transaction_id', authMiddleware, getSpecificKhataTransaction);
router.delete('/delete-khata-transaction/:transaction_id', authMiddleware, deleteKhataTransaction);
router.put('/update-khata-transaction/:transaction_id', authMiddleware, updateKhataTransaction);

module.exports = router;