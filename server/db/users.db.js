// Solo obtener y visualizar la DB
let users = [];
let admins = [
  {

  }
];

const getAllUsers = async () => {
  return users;
};

const getAllAdmins = async () => {
  return admins;
};

const createUser = async (user) => {
  users.push(user);
};

module.exports = {
  getAllUsers,
  getAllAdmins,
  createUser,
};
