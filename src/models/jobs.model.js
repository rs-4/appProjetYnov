const mongoose = require('mongoose');
const jobsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50,
        lowercase: true,
        unique: true
    },
    skills: [{
        type: mongoose.Types.ObjectId,
        ref: 'Skills'
    }]
  }
)
module.exports = mongoose.model('Jobs', jobsSchema);