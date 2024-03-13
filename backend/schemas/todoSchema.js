const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        enum: [true, false]
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = employeeSchema;