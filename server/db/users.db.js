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

const createUserDB = async (user) => {
  users.push(user);
};

module.exports = {
  getAllUsers,
  getAllAdmins,
  createUserDB,
};
