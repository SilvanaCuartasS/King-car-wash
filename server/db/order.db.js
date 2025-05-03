let orders = [];

const getAllOrders = async () => {
  return orders;
};

const createOrderDB = async (payload) => {
  orders.push(payload);
  return payload
};

module.exports = {
    getAllOrders,
    createOrderDB,
  };