const express = require("express");
const {
    getServices,
    serviceUser,
    createOrder,
    getOrders,
    stateSend,
    deleteOrder,
  } = require("../controllers/services.controller.js");

const router = express.Router();

router.get("/services", getServices);

router.get("/orders", getOrders);

router.post("/new-service", createOrder);

router.post("/service-user", serviceUser);

router.post("/enviar-estado", stateSend);

router.post("/delete-order", deleteOrder);

module.exports = router;