const supabaseCli = require("../services/supabase.service");

const getAllOrders = async () => {
  const { data, error } = await supabaseCli
    .from("Pedido")
    .select(`
      id,
      created_at,
      id_user,
      id_service,
      date_book,
      time_book,
      id_vehiculo,
      Servicio (
        name
      ),
      Usuario (
        name,
        email
      ),
      Datos_Vehiculo (
        plate
      )
    `);

  console.log("Datos de Supabase:", data); // Agrega esto
  console.log("Error de Supabase:", error); // Agrega esto

  if (error) {
    console.error("Error al obtener los pedidos:", error);
    return error;
  }

  return data;
};


const createOrderDB = async (orderData) => {
  try {
    // Validación de los datos 
    if (!orderData.id_user || !orderData.id_service || !orderData.date_book || !orderData.time_book) {
      throw new Error('Faltan campos obligatorios en orderData');
    }

    const { data, error } = await supabaseCli
      .from("Pedido")
      .insert([{
        id_user: orderData.id_user,
        id_service: orderData.id_service,
        date_book: orderData.date_book,
        time_book: orderData.time_book,
        created_at: orderData.created_at || new Date().toISOString()
      }])
      .select();

    if (error) throw error;
    
    console.log('Pedido creado en Supabase:', data);
    return data[0]; // Devuelve solo el objeto insertado
  } catch (error) {
    console.error('Error en createOrderDB:', error.message);
    throw error; // Propaga el error
  }
};


const deleteOrderDB = async (orderId) => {
  const { data, error } = await supabaseCli
    .from("Pedido")
    .delete()
    .eq("id", orderId); 

  if (error) {
    console.error('Error deleting order:', error);
    throw error;
  }

  return data;
};

module.exports = {
  getAllOrders,
  createOrderDB,
  deleteOrderDB,
};
