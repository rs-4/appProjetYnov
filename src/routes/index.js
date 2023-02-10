const express = require('express');
const router = express.Router();
const authRouter = require("./auth.route");
const userRouter = require('./user.route');
const missionRouter  = require("./mission.route")
const competenceRouter = require("./competences.route")


router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/mission",missionRouter)
router.use("/competence",competenceRouter)


module.exports = router;