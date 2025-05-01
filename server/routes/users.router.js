//Métodos REST

const express = require("express");
const {
  loginService,
  getUsers,
  createUser,
} = require("../controllers/users.controller.js");

const router = express.Router();

router.get("/users", getUsers);

router.post("/signup-user", createUser);

router.post("/login-service", loginService);

module.exports = router;