const { getAllOrders, createOrderDB } = require("../db/order.db.js");
const { getAllservices } = require("../db/services.db.js");

//Obtiene los servicios de la base de datos quemada
const getServices = async (req, res) => {
  const service = await getAllservices();
  res.send(service);
};

//Obtiene todas las ordenes que se van creando
const getOrders = async (req, res) => {
  const orders = await getAllOrders();

  res.json({
    message: "Enviadas todas las ordenes",
    success: true,
    orders: orders,
  });
};

//Esta aún no se está usando
const serviceUser = async (req, res) => {
  const service = await getAllservices();
  const { serviceName, timeServiceInput, dateServiceInput } = req.body;

  if (!serviceName || !timeServiceInput || !dateServiceInput) {
    return res
      .status(400)
      .json({ message: "Ops, faltan datos", success: false });
  }

  const foundService = service.find(
    (u) =>
      u.timeServiceInput === timeServiceInput &&
      u.dateServiceInput === dateServiceInput &&
      u.serviceName === serviceName
  );

  console.log("Servicio encontrado:", foundService);
  res.json({
    message: "Servicio encontrado",
    success: true,
    serviceData: foundService,
  });
};

// controllers/services.controller.js
const createOrder = async (req, res) => {
  const {
    idUser,
    nameUser,
    plateUser,
    serviceName,
    dateServiceInput,
    timeServiceInput,
  } = req.body;

  if (
    !idUser ||
    !nameUser ||
    !plateUser ||
    !serviceName ||
    !timeServiceInput ||
    !dateServiceInput
  ) {
    return res
      .status(400)
      .json({ message: "Faltan datos del servicio", success: false });
  }

  // hacer lógica para verificar si el servicio ya existe
  const existingOrder = await getAllOrders();

  const foundOrder = existingOrder.find(
    (u) => u.timeServiceInput === timeServiceInput
  );
  if (foundOrder) {
    return res.status(400).json({
      message: "El servicio ya existe, elige otra franja horaria",
      success: false,
    });
  }

  // Si no existe, crear la nueva orden

  const newOrder = {
    idOrder: Date.now(), //Esta bien porque es el id de la orden
    idUser: idUser,
    nameClient: nameUser,
    plate: plateUser,
    serviceName: serviceName,
    dateServiceInput: dateServiceInput,
    timeServiceInput: timeServiceInput,
  };

  await createOrderDB(newOrder);

  console.log("Servicio creado y enviado a DB:", newOrder);

  res.json({
    message: "Servicio guardado",
    success: true,
    currentOrderData: newOrder,
  });
};

module.exports = {
  getServices,
  getOrders,
  serviceUser,
  createOrder,
};
