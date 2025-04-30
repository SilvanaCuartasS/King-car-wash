//Métodos REST

const express = require("express");
const { loginAdmin, getAdmins } = require("../controllers/admin.controller.js");

const router = express.Router();

router.get("/admin", getAdmins);

router.post("/login-admin", loginAdmin);

module.exports = router;
