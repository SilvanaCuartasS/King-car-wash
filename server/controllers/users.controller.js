//Lógica de cada método REST
const { getAllUsers, createUserDB } = require("../db/users.db");
const { sendEmailWithTemplate } = require("../services/brevo.service");

const getUsers = async (req, res) => {
  const users = await getAllUsers();
  res.send(users);

  const payload = {
    templateId: 4, // Replace with your actual template ID
    email: "mariajose.rosascuellar@gmail.com",
    name: "Majo", // Replace with actual user data
    service: "Express", // Replace with the actual service selected
  };
  await sendEmailWithTemplate(payload);
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
    (u) => u.inputEmail === inputEmail && u.inputPassword === inputPassword
  );

  if (!foundUser) {
    return res.status(401).json({
      message: "Usuario no existe o contraseña incorrecta",
      success: false,
    });
  }

  console.log("Inicio de sesión exitoso:", foundUser);
  res.json({
    message: "Inicio de sesión exitoso",
    success: true,
    currentUserData: foundUser,
  });
};

const createUser = async (req, res) => {
  const userData = req.body;

  console.log("esto llegó del body", userData);

  const hasEmptyField = Object.values(userData).some(
    (value) => value === undefined || value === null || value === ""
  );

  if (hasEmptyField) {
    return res.status(400).json({
      message: "Ops, faltan datos",
      success: false,
    });
  }

  const newUser = await createUserDB({ id: Date.now(), ...userData });

  console.log("Usuario creado y enviado a DB:", newUser);

  res.json({
    message: "Inicio de sesión exitoso",
    success: true,
    currentUserData: newUser,
  });
};

module.exports = {
  getUsers,
  loginService,
  createUser,
};
