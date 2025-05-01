//Lógica de cada método REST
const { getAllUsers, createUserDB } = require("../db/users.db");

const getUsers = async (req, res) => {
  const users = await getAllUsers();
  res.send(users);
};

const loginService = async (req, res) => {
  const users = await getAllUsers();
  // comparar si el usuario que se logueo existe en la BD
  const { inputEmail, inputPassword } = req.body;

  if (!inputEmail || !inputPassword) {
    return res
      .status(400)
      .json({ message: "Ops, faltan datos", success: false });
  }

  const foundUser = users.find(
    (u) => u.email === inputEmail && u.password === inputPassword
  );

  if (!foundUser) {
    return res.status(401).json({
      message: "Usuario no existe o contraseña incorrecta",
      success: false,
    });
  }

  console.log("Inicio de sesión exitoso:", foundUser);
  res.json({ message: "Inicio de sesión exitoso", success: true });
  res.send(users); //Envio al cliente lo que tenga users
};

const createUser = async (req, res) => {
  const users = await getAllUsers();
  const userData = req.body;

  console.log(userData);

  const hasEmptyField = Object.values(userData).some(
    (value) => value === undefined || value === null || value === ""
  );

  if (hasEmptyField) {
    return res.status(400).json({
      message: "Ops, faltan datos",
      success: false,
    });
  }

  const currentUserData = { id: users.length + 1, ...userData };

  createUserDB(currentUserData);
  console.log("Usuario creado y enviado a DB:", currentUserData);

  console.log("Inicio de sesión exitoso:", currentUserData);
  res.json({
    message: "Inicio de sesión exitoso",
    success: true,
    currentUserData: currentUserData,
  });
};

module.exports = {
  getUsers,
  loginService,
  createUser,
};
