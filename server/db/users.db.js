const supabaseCli = require("../services/supabase.service");

const getAllUsers = async () => {
  const { data, error } = await supabaseCli.from("Usuario").select();
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

const createUserDB = async (table, data) => {
  const { data: result, error } = await supabaseCli
    .from(table)
    .insert([data])
    .select();

  if (error) {
    console.error(error);
    return new Error(error.message);
  }

  return result;
};


module.exports = {
  getAllUsers,
  createUserDB,
};
