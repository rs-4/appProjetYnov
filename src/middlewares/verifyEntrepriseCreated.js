
const Mission = require("../models/mission.model");

function verifyEntrepriseCreated(req, res, next) {

  Mission.findById(req.headers.id).then(mission => {

    if (req.userToken.id = mission.idSociety ) {
      return res.status('401').send({
        auth: false,
        message: "you are not proprietaire"
      })
    }
    next();
  
  })
}
  
  module.exports = verifyEntrepriseCreated;