//Métodos REST

const express = require("express");
const { loginService, getUsers } = require("../controllers/users.controller");

const router = express.Router();

router.get("/users", getUsers);

router.post("/login-service", loginService);

module.exports = router;
