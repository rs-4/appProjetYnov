const mongoose = require('mongoose');

const propositionSchema = mongoose.Schema({

   _idSociety:{
    type: String,
    required: true
    },  
    _idMission:{
      type: String,
      required: true
      },
    _idFreelance:{
      type: Array,
    },
    status:{
    type: String,
    required: true
    },   
     hashLink:{
    type: String,
    required: true
     },

  }
)
module.exports = mongoose.model('Proposition', propositionSchema);