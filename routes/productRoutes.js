const express = require("express");
const { getAll, create } = require("../controllers/productController");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", getAll);
router.post("/", auth, create); // only logged users

module.exports = router;
