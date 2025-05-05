let orders = [];

const getAllOrders = async () => {
  return orders;
};

const createOrderDB = async (payload) => {
  orders.push(payload);
  return payload
};

const deleteOrderDB = async (id) => {
  orders = orders.filter((order) => order.idOrder !== id);
  return true;
};

module.exports = {
    getAllOrders,
    createOrderDB,
    deleteOrderDB
  };