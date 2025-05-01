//Lógica de cada método REST
const { getAllAdmins } = require("../db/admins.db");

const getAdmins = async (req, res) => {
  const admins = await getAllAdmins();
  res.send(admins);
};

const loginAdmin = async (req, res) => {
  const admins = await getAllAdmins();
  // comparar si el usuario que se logueo existe en la BD
  const { inputEmail, inputPassword, inputAdminCode } = req.body;

  if (!inputEmail || !inputPassword || !inputAdminCode) {
    return res
      .status(400)
      .json({ message: "Ops, faltan datos", success: false });
  }

  const foundAdmin = admins.find(
    (u) =>
      u.email === inputEmail &&
      u.password === inputPassword &&
      u.adminCode === inputAdminCode
  );

  if (!foundAdmin) {
    return res.status(401).json({
      message: "Usuario no existe o contraseña incorrecta",
      success: false,
    });
  }

  console.log("Inicio de sesión exitoso:", foundAdmin);
  res.json({
    message: "Inicio de sesión exitoso",
    success: true,
    currentAdmin: foundAdmin,
  });
};

module.exports = {
  getAdmins,
  loginAdmin,
};