const { body, validationResult } = require('express-validator');

exports.checkEmail = [
  body('email').isEmail().withMessage("Email format not valid")
]

exports.checkIdentity = [
  body('firstName').isAlphanumeric().withMessage('FirstName format is not valide'),
  body('lastName').isAlphanumeric().withMessage('lastName format is not valide')
]

exports.checkPassword = [
  body('password')
    .notEmpty()
   
]

exports.validation = (req, res, next) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors:errors.array()
    })
  }

  next();

}