const { getAllservices, createServiceDB } = require("../db/service.db.js");

const getServices = async (req, res) => {
    const service = await getAllservices();
    res.send(service);
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
      (u) => u.timeServiceInput === timeServiceInput && 
             u.dateServiceInput === dateServiceInput &&
             u.serviceName === serviceName
    );
  
    console.log("Servicio encontrado:", foundService);
    res.json({ 
      message: "Servicio encontrado", 
      success: true, 
      serviceData: foundService 
    });
};

// controllers/services.controller.js
const createService = async (req, res) => {
    const { serviceName, dateServiceInput, timeServiceInput } = req.body;
  
    if (!serviceName || !timeServiceInput || !dateServiceInput) {
      return res.status(400).json({ message: "Faltan datos del servicio", success: false });
    }
  
    const newService = {
      id: Date.now(), 
      serviceName,
      dateServiceInput,
      timeServiceInput
    };
  
    await createServiceDB(newService);
  
    console.log("Servicio creado y enviado a DB:", newService);
  
    res.json({
      message: "Servicio guardado",
      success: true,
      currentServiceData: newService,
    });
};
  
module.exports = {
    getServices,
    serviceUser,
    createService,
};
  