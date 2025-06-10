const { getAllOrders, createOrderDB } = require("../db/order.db.js");
const { getAllservices } = require("../db/services.db.js");
const { emitEvent } = require("../services/socket.service.js");
const { deleteOrderDB } = require("../db/order.db.js");
const { sendEmailWithTemplate } = require("../services/brevo.service");

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

const stateSend = async (req, res) => {
  try {
    const { id, estado } = req.body;

    if (!id || !estado) {
      return res.status(400).json({ message: "ID y estado son requeridos" });
    }

    // Simula guardado o actualización (por ejemplo en DB)
    console.log(`Orden con ID ${id} actualizada al estado: ${estado}`);

    emitEvent("estadoServicio", {
      id,
      estado,
    });

    const payload = {
      templateId: 1, // Replace with your actual template ID
      email: "mariajose.rosascuellar@gmail.com",
      name: "Majo", // Replace with actual user data
      service: "Express", // Replace with the actual service selected
    };

    if (estado === "set") {
      payload = {
        templateId: 2, // Replace with your actual template ID
        email: "mariajose.rosascuellar@gmail.com",
        name: "Majo", // Replace with actual user data
        service: "Express", // Replace with the actual service selected
      };
    } else if (estado === "wash") {
      payload = {
        templateId: 3, // Replace with your actual template ID
        email: "mariajose.rosascuellar@gmail.com",
        name: "Majo", // Replace with actual user data
        service: "Express", // Replace with the actual service selected
      };
    } else if (estado === "touches") {
      payload = {
        templateId: 4, // Replace with your actual template ID
        email: "mariajose.rosascuellar@gmail.com",
        name: "Majo", // Replace with actual user data
        service: "Express", // Replace with the actual service selected
      };
    }

    await sendEmailWithTemplate(payload);

    return res.status(200).json({
      message: `Estado "${estado}" recibido correctamente para la orden ${id}`,
    });
  } catch (error) {
    console.error("Error en el controlador stateSend:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

const deleteOrder = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "ID requerido", success: false });
  }

  await deleteOrderDB(id);

  // Emitimos evento al cliente indicando que fue cancelado
  emitEvent("ordenCancelada", {
    id,
    mensaje: "Your order was cancelled due to non-compliance.",
  });

  console.log(`Orden con ID ${id} eliminada`);

  return res.status(200).json({
    message: "Orden eliminada exitosamente",
    success: true,
  });
};

module.exports = {
  getServices,
  getOrders,
  serviceUser,
  createOrder,
  stateSend,
  deleteOrder,
};
