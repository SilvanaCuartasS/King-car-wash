const express = require("express");
const {
    getServices,
    serviceUser,
    createOrder,
    getOrders,
  } = require("../controllers/services.controller.js");

const router = express.Router();

router.get("/services", getServices);

router.get("/orders", getOrders);

router.post("/new-service", createOrder);

router.post("/service-user", serviceUser);

module.exports = router;