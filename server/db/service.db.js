let services = [];

const getAllservices = async () => {
  return services;
};

const createServiceDB = async (payload) => {
  services.push(payload);
};

module.exports = {
    getAllservices,
    createServiceDB,
  };