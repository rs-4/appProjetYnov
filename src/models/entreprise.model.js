const mongoose = require('mongoose');

const entrepriseSchema = mongoose.Schema({

    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
        },

         name:{
    type: String,
    required: true
    },
   statusSociety: {
    type: String,
    required: true,
    maxLength: 50,
  },
  siret: {
    type: Number,
    required: true,
  }, 
   headOffice: {
    type: String,
    required: true,
  },
  
  missions: [{
    type: mongoose.Types.ObjectId,
    ref: 'Mission'
}]
}
)
module.exports = mongoose.model('Entreprise', entrepriseSchema);