const mongoose = require('mongoose');

const expensesSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number
    },
    is_archived: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String
    },
    pic: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    creating_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('expenses', expensesSchema);