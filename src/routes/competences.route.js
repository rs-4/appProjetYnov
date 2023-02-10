const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobs.controller');
const skillController = require('../controllers/skills.controller');
const verifyIsAdmin = require('../middlewares/verifyIsAdmin');
const verifyToken = require('../middlewares/verifyToken');


router.get('/skills', verifyToken, verifyIsAdmin,  skillController.getSkills);
router.get('/jobs', verifyToken, verifyIsAdmin,  jobController.getJobs);
router.post('/addJobs', verifyToken,verifyIsAdmin, jobController.addJob);
router.post('/addSkills', verifyToken,verifyIsAdmin, skillController.addSkill);
router.post('/delJobs', verifyToken,verifyIsAdmin,  jobController.delJob);
router.post('/delSkills',verifyToken, verifyIsAdmin,  skillController.delSkill);
router.post('/upJobs', verifyToken,verifyIsAdmin, jobController.upJob);
router.post('/upSkills', verifyToken, verifyIsAdmin,  skillController.upSkill);
router.post('/upSkillsFreelance', verifyToken, verifyIsAdmin,  skillController.updateFreelanceSkill);

module.exports = router;