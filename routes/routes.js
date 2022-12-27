const express = require('express')
const router = express.Router()
const { ge, generateImage } = require("../controllers/generateImageController");

router.post("/generateImage", generateImage);

module.exports = router;