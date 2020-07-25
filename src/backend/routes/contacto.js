const { Router } = require("express");
const router = Router();
const  Controller = require("../controllers/");

router.post("/", Controller);
module.exports = router;
