const mongoose = require('mongoose');
const skillsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50,
        lowercase: true,
        unique: true
    },

  }
)
module.exports = mongoose.model('Skills', skillsSchema);