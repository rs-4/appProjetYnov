function verifyIsEntreprise(req, res, next) {
    console.log(req.userToken);
    if (req.userToken.statusAccount == "freelance") {
    return res.status('401').send({
        auth: false,
        message: "you must be a society"
      })
    }
    if(req.userToken.statusAccount == 'entreprise'){
     
      next();  
    }
  }
  
  module.exports = verifyIsEntreprise;