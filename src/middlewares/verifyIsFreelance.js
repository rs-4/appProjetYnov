function verifyIsFreelance(req, res, next) {
    console.log(req.userToken);
    if (req.userToken.statusAccount == "entreprise") {
    return res.status('401').send({
        auth: false,
        message: "you must be a freelance"
      })
    }
    if(req.userToken.statusAccount == 'freelance'){
      next();  
    }
  }
  
  module.exports = verifyIsFreelance;