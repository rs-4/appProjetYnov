const mongoose = require('mongoose');


const freelanceSchema = mongoose.Schema({

    _id:{
    type: mongoose.Schema.Types.ObjectId,
    required: true
    },
  priceDay: {
    type: Number,
    maxLength: 50,
  },
  yearsXp: {
    type: Number,
  },
  jobs: [
    { type: mongoose.Types.ObjectId, ref: 'Jobs' }
  ], 
  skills: [
    { type: mongoose.Types.ObjectId, ref : 'Skills' }
  ]
  }
)


module.exports = mongoose.model('Freelance', freelanceSchema);