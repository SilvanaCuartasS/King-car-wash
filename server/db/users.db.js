// Solo obtener y visualizar la DB
let users = [];

const getAllUsers = async () => {
  return users;
};

const createUserDB = async (user) => {
  users.push(user);
  return user;
};

module.exports = {
  getAllUsers,
  createUserDB,
};
