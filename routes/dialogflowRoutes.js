const express = require("express");
const router = express.Router();
const {getDate, getMessage}= require("../controllers/dialogflowController")

router.route('/webhook').post(getDate)
router.route('/').get(getMessage)

module.exports = router;