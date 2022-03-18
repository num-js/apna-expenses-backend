const khataTransactionModel = require('../models/khataTransactionModel');

/**
 * callback function - Get all Account Data
 * @param {object} req 
 * @param {object} res 
 * 
 */
const getKhataTransactions = async (req, res) => {
    try {
        const data = await khataTransactionModel.find({
            user: req.user,
            khata: req.params.khata_id
        });
        // if (data.length > 0) {
        res.status(200).json({
            message: 'Khata Transactions Data Fetched',
            data: data
        });
        // } else {
        //     res.status(404).json({
        //         message: 'No Khata Transactions Data'
        //     });
        // }
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}


/**
 * callback function - Add new Transaction
 * @param {object} req 
 * @param {object} res 
 * 
 */
const addKhataTransaction = async (req, res) => {
    req.body.user = req.user;
    const newKhataData = new khataTransactionModel(req.body);
    try {
        await newKhataData.save();
        res.status(201).json({
            message: 'New Khata added successfully',
            data: newKhataData
        });
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

/**
 * callback function - Get a Specific Khata's Data
 * @param {object} req 
 * @param {object} res 
 * 
 */
const getSpecificKhataTransaction = async (req, res) => {
    try {
        const specificTransaction = await khataTransactionModel.findById(req.params.transaction_id);
        if (specificTransaction !== null) {
            res.status(200).json({
                message: 'Fetched specific Transaction data',
                data: specificTransaction
            });
        } else {
            res.status(404).json({
                message: 'Transaction not found'
            });
        }
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

/**
 * callback function - Delete a Specific Khata's Transaction data
 * @param {object} req 
 * @param {object} res 
 * 
 */
const deleteKhataTransaction = async (req, res) => {
    try {
        const deletedTransaction = await khataTransactionModel.findByIdAndDelete({ _id: req.params.transaction_id });
        if (deletedTransaction) {
            res.status(200).json({
                message: "Transaction's data deleted",
                data: deletedTransaction
            });
        } else {
            res.status(404).json({
                message: "Transaction not Found"
            });
        }
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

/**
 * callback function - Update a Specific Transaction's data
 * @param {object} req 
 * @param {object} res 
 * 
 */
const updateKhataTransaction = async (req, res) => {
    const { transaction_id: _id } = req.params; //Extracting transaction_id & giving a name _id at the same time
    const updateTransactionData = req.body;
    try {
        const updatedTransaction = await khataTransactionModel.findByIdAndUpdate(_id, updateTransactionData, { new: true });
        if (updatedTransaction !== null) {
            res.status(200).json({
                message: "Transaction's data Updated",
                data: updatedTransaction
            });
        } else {
            res.status(404).json({
                message: 'Transaction not Found'
            });
        }
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}


module.exports = { getKhataTransactions, addKhataTransaction, getSpecificKhataTransaction, deleteKhataTransaction, updateKhataTransaction };