const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/service.controller');


router.post('/acceptMission/:freelance/:mission', serviceController.acceptMission);
router.delete('/refuseMission/:idfreelance/:idmission', serviceController.refuseMission);


module.exports = router;