const mongoose = require('mongoose');

const expensesSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number
    },
    is_deleted: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String
    },
    pic: {
        type: String
    },
    creating_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('users', expensesSchema);