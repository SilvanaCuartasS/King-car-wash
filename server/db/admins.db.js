const supabaseCli = require("../services/supabase.service");

const getAllAdmins = async () => {
  const { data, error } = await supabaseCli.from("Admin").select();
  if (error) {
    console.error(error);
     return new Error(error.message);
  }
  return data;
};



module.exports = {
  getAllAdmins,
};
