const mongoose = require('mongoose');

const missionSchema = mongoose.Schema({

    _idSociety:{
    type: String,
    required: true
    },
    _idFreelance:{
      type:Array,
    },
    BenginDate:{
    type: Date,
    required: true
    },   
     EndDate:{
    type: Date,
    required: true
     },
     status:{
      type: String,
      required: true
       },
   totalAmmount: {
    type: Number,
    required: true,
    maxLength: 50,
  },
  description: {
    type: String,
    required: true,
  }, 
   titleOfMission: {
    type: String,
    required: true,
  },
  job: {
    type: mongoose.Types.ObjectId,
    ref: 'Jobs',
    
},
  skills: {
  type: [{
      type: mongoose.Types.ObjectId,
      ref: 'Skills'
  }],

},
  }
)
module.exports = mongoose.model('Mission', missionSchema);