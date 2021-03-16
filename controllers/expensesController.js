const expensesModel = require('../models/expensesModel');

/**
 * callback function - Get all Expenses
 * @param {object} req 
 * @param {object} res 
 * 
 */
const getExpenses = async (req, res) => {
    try {
        const data = await expensesModel.find();
        if (data.length > 0) {
            res.status(200).json({
                message: 'Expenses Data Fetched',
                data: data
            });
        } else {
            res.status(404).json({
                message: 'No Expenses Data'
            });
        }
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}


/**
 * callback function - Add new Expense
 * @param {object} req 
 * @param {object} res 
 * 
 */
const addExpense = async (req, res) => {
    const newExpenseData = new expensesModel(req.body);
    try {
        await newExpenseData.save();
        res.status(201).json({
            message: 'New Expense added successfully',
            data: newExpenseData
        });
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

/**
 * callback function - Get a Specific Expense's Data
 * @param {object} req 
 * @param {object} res 
 * 
 */
const getSpecificExpense = async (req, res) => {
    try {
        const specificExpense = await expensesModel.findById(req.params.expense_id);
        if (specificExpense !== null) {
            res.status(200).json({
                message: 'Fetched specific Expense data',
                data: specificExpense
            });
        } else {
            res.status(404).json({
                message: 'Expense not found'
            });
        }
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

/**
 * callback function - Delete a Specific Expense's data
 * @param {object} req 
 * @param {object} res 
 * 
 */
const deleteExpense = async (req, res) => {
    try {
        const deletedExpense = await expensesModel.findByIdAndDelete({ _id: req.params.expense_id });
        if (deletedExpense) {
            res.status(200).json({
                message: "Expense's data deleted",
                data: deletedExpense
            });
        } else {
            res.status(404).json({
                message: "Expense not Found"
            });
        }
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

/**
 * callback function - Update a Specific Expense's data
 * @param {object} req 
 * @param {object} res 
 * 
 */
const updateExpense = async (req, res) => {
    const { expense_id: _id } = req.params; //Extracting expense_id & giving a name _id at the same time
    const updateExpenseData = req.body;
    try {
        const updatedExpense = await expensesModel.findByIdAndUpdate(_id, updateExpenseData, { new: true });
        if (updatedExpense !== null) {
            res.status(200).json({
                message: "Expense's data Updated",
                data: updatedExpense
            });
        } else {
            res.status(404).json({
                message: 'Expense not Found'
            });
        }
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}


module.exports = { getExpenses, addExpense, getSpecificExpense, deleteExpense, updateExpense };