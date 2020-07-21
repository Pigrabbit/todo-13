const express = require("express");
const router = express.Router();

const cardRouter = require('./cardRouter');
const activityRouter = require("./activity-router");

router.use("/card", cardRouter);
router.use("/activity", activityRouter);

module.exports = router;
