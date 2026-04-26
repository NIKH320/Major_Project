const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { getCropData } = require("../controllers/cropController");

const router = express.Router();

router.get("/price", authMiddleware, getCropData);

module.exports = router;