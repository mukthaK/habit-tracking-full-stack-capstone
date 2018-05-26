"use strict";

const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

const notesSchema = new mongoose.Schema({
    notesContent: {
        type: String,
        required: false
    },
    habitName: {
        type: String,
        required: false
    },
    loggedinUser: {
        type: String,
        required: false
    }
});

const Notes = mongoose.model('Notes', notesSchema);

module.exports = Notes;
