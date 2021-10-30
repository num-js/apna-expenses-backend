const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('User', usersSchema);