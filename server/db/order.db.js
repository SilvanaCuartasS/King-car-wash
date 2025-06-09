const supabaseCli = require("../services/supabase.service");

// let orders = [];

// const getAllOrders = async () => {
//   return orders;
// };

const getAllOrders = async () => {
  const { data, error } = await supabaseCli.from("Pedido").select();
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

const createOrderDB = async (user) => {
  const { data, error } = await supabaseCli
    .from("order")
    .insert([user])
    .select();

  if (error) {
    console.error(error);
    return error;
  }

  return data;
};

// const createOrderDB = async (payload) => {
//   orders.push(payload);
//   return payload;
// };

// const deleteOrderDB = async (id) => {
//   orders = orders.filter((order) => order.idOrder !== id);
//   return true;
// };

// const deleteOrderDB = async (id) => {
//   const { error } = await supabaseCli.from("Pedido").delete().eq("idUser", id); // usa "id" si ese es el nombre de tu columna clave primaria

//   if (error) {
//     console.error(error);
//     return error;
//   }

//   return true;
// };

const deleteOrderDB = async (userId) => {
  const { data, error } = await supabaseCli
    .from("Pedido")
    .delete()
    .eq("idUser", userId)
    .select();

  if (error) {
    console.error(error);
  }

  return true;
};

module.exports = {
  getAllOrders,
  createOrderDB,
  deleteOrderDB,
};
