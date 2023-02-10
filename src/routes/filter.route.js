const express = require('express');
const router = express.Router();
const filterController = require('../controllers/filter.controller');
const { checkEmail, checkIdentity, checkPassword, validation } = require('../middlewares/validator');

router.post('/filter', checkEmail,  checkIdentity, validation, filterController);


module.exports = router;