//Lógica de cada método REST
const { getAllUsers } = require("../db/users.db");

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
    return res
      .status(401)
      .json({
        message: "Usuario no existe o contraseña incorrecta",
        success: false,
      });
  }

  console.log("Inicio de sesión exitoso:", foundUser);
  res.json({ message: "Inicio de sesión exitoso", success: true });
  res.send(users); //Envio al cliente lo que tenga users
};

const createUser = async (req, res) => {
  const { id, name } = req.body;
  const response = await createUser({ id, name });
  res.send(response);
};

module.exports = {
  getUsers,
  loginService,
  createUser,
};
