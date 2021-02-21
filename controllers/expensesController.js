const expensesModel = require('../models/expensesModel');

/**
 * callback function
 * @param {object} req 
 * @param {object} res
 */
const allExpenses = (req, res) => {
    try {
        res.status(200).json({ data: 'NNN' });
    } catch (err) {
        res.status(400).json({ message: 'Error Occured: ' + err.message })
    }
}


module.exports = { allExpenses }