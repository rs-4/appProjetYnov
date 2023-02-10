const Mission = require("../models/mission.model");
const Entreprise = require("../models/entreprise.model");
const Freelance = require("../models/freelance.model");
const User = require("../models/user.model");
const Jobs = require("../models/jobs.model");


exports.getJobs = async (req, res) => {
    Jobs.find()
    .then(jobs =>
        res.send(jobs))
    .catch(err => res.status(400).send(err));
}
exports.addJob = async (req, res) => {
    const jobs = new Jobs(req.body)
    jobs.save().then(jobs => {
      res.send(jobs)
    }).catch(err => res.status(400).send(err))

}
exports.upJob = async (req, res) => {
    Jobs.findByIdAndUpdate(req.headers.id, req.body)
    .then(jobs => {
      if (!jobs) {
        return res.status(404).send({
          message: "jobs not found"
        })}
      res.send(jobs)
    }).catch(err => res.status(400).send(err))

}
exports.delJob = async (req, res) => {
    Jobs.findByIdAndDelete(req.headers.id).then(jobs => {
        res.send(jobs)
      }).catch(err=>res.status(400).send(err))

}

