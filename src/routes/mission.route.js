const express = require('express');
const router = express.Router();
const missionController = require('../controllers/mission.controller');
const verifyToken = require('../middlewares/verifyToken');
const verifyIsEntreprise = require('../middlewares/verifyIsEntreprise')
const verifyEntrepriseCreated = require('../middlewares/verifyEntrepriseCreated')

router.post("/create", verifyToken, verifyIsEntreprise, missionController.createMission);
router.delete("/delete", verifyToken, verifyIsEntreprise,verifyEntrepriseCreated, missionController.deleteMission);
router.post(`/update`, verifyToken,verifyIsEntreprise,verifyEntrepriseCreated ,missionController.updateMission);
router.post(`/addfreelance`, verifyToken,verifyEntrepriseCreated ,missionController.addFreelance);

module.exports = router;