const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    description: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
