const express = require('express');
const { allExpenses } = require('../controllers/expensesController')
const router = express.Router();

router.get('/all-expenses', allExpenses);


module.exports = router;