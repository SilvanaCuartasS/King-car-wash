const supabaseCli = require("../services/supabase.service");

// const getAllAdmins = async () => {
//   return admins;
// };

const getAllAdmins = async () => {
  const { data, error } = await supabaseCli.from("Admin").select();
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};



module.exports = {
  getAllAdmins,
};
