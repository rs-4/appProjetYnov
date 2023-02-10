
const Mission = require("../models/mission.model");

function verifyEntrepriseCreated(req, res, next) {

  Mission.findById(req.headers.id).then(mission => {
try {
   console.log(req.userToken.id,mission._idSociety);

    if (req.userToken.id != mission._idSociety ) {
      return res.status('401').send({
        addFreelance: false,
        message: "you are not proprietaire"
      })
    }
    next();
} catch (error) {
  console.log(error);
}
})}
  
  module.exports = verifyEntrepriseCreated;