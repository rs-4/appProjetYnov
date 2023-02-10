const User = require("../models/user.model");
const Freelance = require("../models/freelance.model");
const Entreprise = require("../models/entreprise.model");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
require('dotenv').config();
const nodemailer = require('nodemailer');

exports.register = async (req, res) => {

  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    addres: req.body.addres,
    city: req.body.city,
    zipcode: req.body.zipcode,
    phoneNumber: req.body.phoneNumber,
    statusAccount: req.body.statusAccount,
    email: req.body.email
  });
  
  try {
    const newUserToSave = await newUser.save();
    if(newUser.statusAccount == "freelance"){


      const newFreelance = new Freelance({
        _id: newUserToSave._id,
        priceDay: req.body.priceDay,
        yearsXp: req.body.yearsXp,
      });  
   const newFreelanceToSave = await newFreelance.save();
    }
    if(newUser.statusAccount == "entreprise"){
      const newEntreprise = new Entreprise({
        _id: newUserToSave._id,
        name: req.body.name,
        statusSociety: req.body.statusSociety,
        siret: req.body.siret,
        headOffice: req.body.headOffice
      });  
      const newEntrepriseToSave = await newEntreprise.save();
    }
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
      from: `Account create  <appvaultdev@gmail.com>`,
      to: newUser.email,
      cc: "rayanselmi100@gmail.com",
      subject: "Your account has been created !",
      html: `<h2>Thank you ${newUser.firstName}!</h2>
             <a">Thank you for inscription</a> `,};
    transporter.sendMail(mailOpitons, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Verif email sent");
      }
    });
    return res.send(newUser);
  }

  catch(err) {
    res.status(400).send(err)
  }


}

exports.login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message:"user not found"
        })
      }
      let passwordValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordValid) {
        return res.status(401).send({
          message: "password not valid",
          auth: false
        })
      }
      let userToken = jwt.sign({
        id: user._id,
        isAdmin:user.isAdmin,
        statusAccount:user.statusAccount
        },"test"
       
      ) 
      res.send({
        message: "User logged",
        auth: true,
        token:userToken
      })
    })
  .catch(err=>res.status(401).send(err))
}