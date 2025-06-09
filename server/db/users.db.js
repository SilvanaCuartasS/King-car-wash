const supabaseCli = require("../services/supabase.service");

// const getAllUsers = async () => {
//   return users;
// };

const getAllUsers = async () => {
  const { data, error } = await supabaseCli.from("Usuario").select();
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

const createUserDB = async (user) => {
  const { data, error } = await supabaseCli
    .from("Usuario")
    .insert([user])
    .select();

  if (error) {
    console.error(error);
    return error;
  }

  return data;
};

// const createUserDB = async (user) => {
//   users.push(user);
//   return user;
// };

module.exports = {
  getAllUsers,
  createUserDB,
};
