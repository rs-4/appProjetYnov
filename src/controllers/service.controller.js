const Mission = require("../models/mission.model");
const Entreprise = require("../models/entreprise.model");
const bcrypt = require("bcrypt");
const Freelance = require("../models/freelance.model");
const User = require("../models/user.model");
const nodemailer = require('nodemailer');
const Proposition = require("../models/proposition.model");

exports.acceptMission = async (req, res) => {

   const idMission = req.params.mission;
   const idFreelance = req.params.freelance;
   console.log(idMission,idFreelance);

    Mission.findById(idMission).then(mission => {
         if(idFreelance == mission._idFreelance){
           Entreprise.findByIdAndUpdate(mission._idSociety, { $push: { _idFreelance: idFreelance } })
Mission.deleteOne({_id:idMission})
return res.send("you accepted the mission")
         }
         return res.send("link false")
})

  }
  


exports.refuseMission = async (req, res) => {
    const idMission = req.params.mission;
    const idFreelance = req.params.freelance;
    Mission.findByIdAndUpdate(idMission, { $pull: { _idFreelance: 0 } })
  }
  