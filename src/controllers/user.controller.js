const User = require("../models/user.model");
const Entreprise = require("../models/entreprise.model");
const bcrypt = require("bcrypt");
const Freelance = require("../models/freelance.model");

exports.getUser = (req, res) => {
  User.findById(req.userToken.id)
    .then(user => {
      if (!user) {
        return res.status(404).send({
        message: "user not found"
      })
    }
      res.send(user);
  })
  .catch(err => res.status(400).send(err)) 
}

exports.updateUser = (req, res) => {

  User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: "user not found"
        })}}).catch(err => res.status(400).send(err))

//Si le statusAccont de l'utilisateur est entreprise, on update le model Entreprise + user
      User.findById(req.params.id).then(user => {
        if(user.statusAccount == "entreprise"){
          Entreprise.findByIdAndUpdate(req.params.id, req.body)
          .then(entreprise => {
        }).catch(err => res.status(400).send(err))
          res.send(user)
      } else {
//Sinon on regarde si le statusAccount est freelance, on update le model Freelance + user        
        if(user.statusAccount == "freelance"){
          Freelance.findByIdAndUpdate(req.params.id, req.body)
          .then(freelance => {
        }).catch(err => res.status(400).send(err))
          res.send(user)
      }}
    }).catch(err => res.status(400).send(err))
}

exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id).then(user => {
    res.send(user)
  }).catch(err=>res.status(400).send(err))
}

exports.getUsers = (req, res) => {
  User.find()
    .then(users => res.send(users))
    .catch(err => res.status(400).send(err));
}

exports.updateUserWishlist = (req, res) => {
  User.findById(req.userToken.id).then(user => {
    const { wishlist } = user;
    if (wishlist.includes(req.body.productId)) {
      return res.send({
        message:"product already in you wishlist"
      })
    }
    user.wishlist.push(req.body.productId);
    user.save().then(userUpdate => {
      User.findById(req.userToken.id).populate('wishlist')
        .then(user => res.send(user))
          .catch(err => res.status(404).send(err))
    })
  })
}