const Mission = require("../models/mission.model");
const Entreprise = require("../models/entreprise.model");
const Freelance = require("../models/freelance.model");
const User = require("../models/user.model");
const Skills = require("../models/skills.model");
const mongoose = require('mongoose');


exports.getSkills = async (req, res) => {
    Skills.find()
    .then(skill =>
        res.send(skill))
    .catch(err => res.status(400).send(err));
}

exports.addSkill = async (req, res) => {
    const skills = new Skills(req.body)
    skills.save().then(skills => {
      res.send(skills)
    }).catch(err => res.status(400).send(err))
}
exports.upSkill = async (req, res) => {
    Skills.findByIdAndUpdate(req.headers.id, req.body)
    .then(skills => {
      if (!skills) {
        return res.status(404).send({
          message: "Skill not found"
        })}
      res.send(skills)
    }).catch(err => res.status(400).send(err))
}

exports.delSkill = async (req, res) => {
    Skills.findByIdAndDelete(req.headers.id).then(skills => {
      res.send(skills)
    }).catch(err=>res.status(400).send(err))
}

exports.updateFreelanceSkill = (req, res) => {
  Freelance.findById(req.userToken.id).then(freelance => {
    const skills  = freelance;
    if (skills.includes(req.body.skillId)) {
      return res.send({
        message:"already your skill"
      })
    }
    freelance.skills.push(req.body.skillId);
    freelance.save().then(freelanceUpdate => {
      Freelance.findById(req.userToken.id).populate('skills')
        .then(freelance => res.send(freelance))
          .catch(err => res.status(404).send(err))
    })
  })
}