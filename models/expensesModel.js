const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const expensesSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
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

module.exports = mongoose.model('expenses', expensesSchema);