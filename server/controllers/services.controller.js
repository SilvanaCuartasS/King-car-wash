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
  try {
    const orders = await getAllOrders();

    if (!orders || !Array.isArray(orders)) {
      return res.status(500).json({
        message: "Error al obtener las órdenes",
        success: false,
        orders: [],
      });
    }

    res.json({
      message: "Enviadas todas las ordenes",
      success: true,
      orders: orders,
    });
  } catch (error) {
    console.error("Error en getOrders:", error);
    res.status(500).json({
      message: "Error interno del servidor",
      success: false,
      orders: [],
    });
  }
};

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
      u.time_book === timeServiceInput &&
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

const createOrder = async (req, res) => {
  const { id_user, id_service, date_book, time_book, created_at } = req.body;

  if (!id_user || !id_service || !time_book || !date_book) {
    return res
      .status(400)
      .json({ message: "Faltan datos del servicio", success: false });
  }

  const existingOrder = await getAllOrders();
  const foundOrder = existingOrder.find(
    (u) => u.time_book === time_book && u.date_book === date_book
  );

  if (foundOrder) {
    return res.status(400).json({
      message: "El servicio ya existe, elige otra franja horaria",
      success: false,
    });
  }

  const newOrder = {
    id: Date.now().toString(),
    id_user,
    id_service,
    date_book,
    time_book,
    created_at: created_at || new Date().toISOString(),
  };

  await createOrderDB(newOrder);

  res.json({
    message: "Servicio guardado",
    success: true,
    currentOrderData: newOrder,
  });
};

const stateSend = async (req, res) => {
  try {
    const { id, estado, data } = req.body;

    if (!id || !estado || !data) {
      return res.status(400).json({ message: "ID y estado son requeridos" });
    }

    // Simula guardado o actualización (por ejemplo en DB)
    console.log(`Orden con ID ${id} actualizada al estado: ${estado}`);

    emitEvent("estadoServicio", {
      id,
      estado,
    });

    const allOrders = await getAllOrders();
    const orderData = allOrders.find((order) => order.id === id);

    if (!orderData) {
      return res.status(404).json({ message: "Pedido no encontrado" });
    }

    let payload = {};

    payload = {
      templateId: 1,
      email: orderData.Usuario?.email,
      name: orderData.Usuario?.name,
      service: orderData.Servicio?.name,
    };

    if (estado === "wash") {
      payload = {
        templateId: 2,
        email: orderData.Usuario?.email,
        name: orderData.Usuario?.name,
        service: orderData.Servicio?.name,
      };
    } else if (estado === "touches") {
      payload = {
        templateId: 3,
        email: orderData.Usuario?.email,
        name: orderData.Usuario?.name,
        service: orderData.Servicio?.name,
      };
    } else if (estado === "set") {
      payload = {
        templateId: 4,
        email: orderData.Usuario?.email,
        name: orderData.Usuario?.name,
        service: orderData.Servicio?.name,
      };
    }

    await sendEmailWithTemplate(payload);
    console.log("Payload para enviar email:", payload);

    //Se envía al usuario
    return res.status(200).json({
      message: `Estado "${estado}" recibido correctamente para la orden ${id}`,
    });
  } catch (error) {
    console.error("Error en el controlador stateSend:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.body;
    
    if (!id) {
      return res.status(400).json({ 
        message: "ID requerido", 
        success: false 
      });
    }

    await deleteOrderDB(id);

    emitEvent("ordenCancelada", {
      id,
      mensaje: "Your order was cancelled due to non-compliance.",
    });

    return res.status(200).json({
      message: "Orden eliminada exitosamente",
      success: true,
    });
  } catch (error) {
    console.error("Error en deleteOrder:", error);
    return res.status(500).json({ 
      message: "Error interno al eliminar la orden",
      success: false,
      error: error.message 
    });
  }
};

module.exports = {
  getServices,
  getOrders,
  serviceUser,
  createOrder,
  stateSend,
  deleteOrder,
};
