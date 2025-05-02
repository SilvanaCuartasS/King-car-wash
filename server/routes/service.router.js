const express = require("express");
const {
    getServices,
    serviceUser,
    createService,
  } = require("../controllers/services.controller.js");

const router = express.Router();

router.get("/services", getServices);

router.post("/new-service", createService);

router.post("/service-user", serviceUser);

module.exports = router;