const express = require('express');
const { getExpenses, addExpense, getSpecificExpense, deleteExpense, updateExpense } = require('../controllers/expensesController');
const router = express.Router();

router.get('/get-expenses', getExpenses);
router.post('/add-expense', addExpense);
router.get('/get-specific-expense/:expense_id', getSpecificExpense);
router.delete('/delete-expense/:expense_id', deleteExpense);
router.put('/update-expense/:expense_id', updateExpense);


module.exports = router;