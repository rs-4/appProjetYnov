const Mission = require("../models/mission.model");
const Entreprise = require("../models/entreprise.model");
const bcrypt = require("bcrypt");
const Freelance = require("../models/freelance.model");
const User = require("../models/user.model");
const nodemailer = require('nodemailer');
const Proposition = require("../models/proposition.model");

exports.createMission = async (req, res) => {
   
    const newMission = new Mission({
        _idSociety: req.userToken.id,
        BenginDate: req.body.BenginDate,
        EndDate: req.body.EndDate,
        status: req.body.status,
        totalAmmount: req.body.totalAmmount,
        description: req.body.description,
        titleOfMission: req.body.titleOfMission,
      });
      try{
         const newMissiontosave = await newMission.save();
         res.send(newMissiontosave)
      }  catch(err) {
        res.status(400).send(err)
      }
  }

  exports.deleteMission = async (req, res) => {
    Mission.findByIdAndDelete(req.headers.id).then(mission => {
      res.send(mission)
    }).catch(err=>res.status(400).send(err))
  }

  exports.updateMission = async (req, res) => {
    Mission.findByIdAndUpdate(req.headers.id, req.body)
    .then(mission => {
      if (!mission) {
        return res.status(404).send({
          message: "mission not found"
        })}
      res.send(mission)
    }).catch(err => res.status(400).send(err))

  } 

  exports.addFreelance = async (req , res ) => {

   console.log(req.userToken);

    const idArray = req.body.idFreelance;
   
    if (idArray.length > 3) {
      return res.status(400).send("Array has more than 3 elements");
  }

    const missionId = Mission.findById(req.body.idMission)
  
    arrayMail = await User.find({ _id: { $in: idArray } }).then((list) => {
      let re = [];
      list.map((aray) => {
        re.push(aray.email);

        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "appvaultdev@gmail.com",
            pass: "aqhxcvlcizxxgbwq",
          },
          tls: {
            rejeectUnauthorized: false,
          },
        }); 
        var mailOpitons = {
          from: ` <appvaultdev@gmail.com>`,
          to: re,
          subject: "Mission has been find for u ",
          html: `<h2> ${aray.firstName} we have find mission for u !</h2>
                 <a>Mission Spec :
                  mission title : ${missionId.titleOfMission}
                  mission description : ${missionId.description}
                  mission total ammount : ${missionId.totalAmmount}
                  mission begin date : ${missionId.BenginDate}
                  mission end date : ${missionId.EndDate}
                 </a>
                 <a>if u want to accept this mission please click on this link : http://localhost:3000/service/acceptMission/${re}/${missionId._id}</a> 
                 <a style={color:red}>if u want to refuse this mission please click on this link : http://localhost:3000/service/refuseMission/${re}/${missionId._id}</a>
                 
                 
                 `,};   
     transporter.sendMail(mailOpitons, function (error, info) {
                  if (error) {
                    console.log(error);
                  } else {
                    console.log(" email sent");
                  }
                });
      });

    });

const hash="http://localhost:3000/service/acceptMission"
const pending=  "pending"
    const newProposition = new Proposition({
      _idSociety: req.userToken.id,
      status: pending,
      hashLink: hash,
    });  
    try{
      const newPropositiontoSave = await newProposition.save();
      res.send(newMissiontosave)
   }  catch(err) {
     res.status(400).send(err)
   }

    res.send(arrayMail);
}
  