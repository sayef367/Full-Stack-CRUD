const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
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