const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const khataTransactionModel = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    amount: {
        type: Number
    },
    message: {
        type: String
    },
    pic: {
        type: String
    },
    user: {
        type: ObjectId,
        ref: "User"
    },
    khata: {
        type: ObjectId,
        ref: "Khata"
    },
    date: {
        type: Date,
        default: Date.now
    },
    creating_date: {
        type: Date,
        default: Date.now
    },
    is_archived: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('khata_transaction', khataTransactionModel);