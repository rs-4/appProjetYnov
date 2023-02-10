const express = require('express');
const router = express.Router();
const authRouter = require("./auth.route");
const userRouter = require('./user.route');
const missionRouter  = require("./mission.route")
const competenceRouter = require("./competences.route")
const serviceRouter = require("./service.route")

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/mission",missionRouter)
router.use("/competence",competenceRouter)
router.use("/service",serviceRouter)


module.exports = router;