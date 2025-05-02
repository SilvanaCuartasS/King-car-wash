const { getAllservices, createServiceDB } = require("../db/service.db.js");

const getServices = async (req, res) => {
    const service = await getAllservices();
    res.send(service);
};

const serviceUser = async (req, res) => {
    const service = await getAllservices();
    const { timeServiceInput, dateServiceInput } = req.body;
  
    if (!timeServiceInput || !dateServiceInput) {
      return res
        .status(400)
        .json({ message: "Ops, faltan datos", success: false });
    }
  
    const foundService = service.find(
      (u) => u.timeServiceInput === timeServiceInput && u.dateServiceInput === dateServiceInput
    );
  
    console.log("Servicio guardado con éxito:", foundService);
    res.json({ message: "Servicio guardado", success: true, currentUserData: foundService });
};

const createService = async (req, res) => {
    const userDataService = req.body;
  
    if (!userDataService.timeServiceInput || !userDataService.dateServiceInput) {
      return res.status(400).json({ message: "Faltan datos del servicio", success: false });
    }
  
    const newService = {
      id: Date.now(), 
      ...userDataService,
    };
  
    await createServiceDB(newService);
  
    console.log("Servicio creado y enviado a DB:", newService);
  
    res.json({
      message: "Servicio guardado",
      success: true,
      currentUserData: newService,
    });
  };
  
module.exports = {
    getServices,
    serviceUser,
    createService,
};
  