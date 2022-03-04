const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    amount: {
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

module.exports = mongoose.model('account', accountSchema);