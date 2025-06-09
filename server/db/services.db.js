const supabaseCli = require("../services/supabase.service");

const getAllservices = async () => {
  const { data, error } = await supabaseCli.from("Servicio").select();
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

// const getAllservices = async () => {
//   return services;
// };

module.exports = {
  getAllservices,
};
