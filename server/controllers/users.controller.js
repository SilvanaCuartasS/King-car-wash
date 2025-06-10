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

  try {
    // 1. preguntas
    const preguntasData = {
      fragance: userData.fragrancePreference || userData.inputFragrancePreference,
      car_wash: userData.washFrequency, 
    };
    console.log("preguntasData:", preguntasData);
    const preguntasResult = await createUserDB('Preferencias_Preguntas', preguntasData);
    if (preguntasResult instanceof Error) throw preguntasResult;
    if (!preguntasResult || !preguntasResult[0]) {
    throw new Error("No se pudo insertar en la tabla 'Preferencias_Preguntas'");
    }

    const preguntaId = preguntasResult[0].id;

    console.log("preguntaId:", preguntaId);

    // 2. vehiculo
    const vehiculoData = {
      plate: userData.inputLicense || userData.inputlicense,
      preferences_id: preguntaId,
      type: userData.selectElementVehicles,
      brand: userData.selectElementBrand,
      color: userData.selectElementColors,
      year: userData.inputYear, 
    };
    console.log("vehiculoData:", vehiculoData);
    const vehiculoResult = await createUserDB('Datos_Vehiculo', vehiculoData);
    if (vehiculoResult instanceof Error) throw vehiculoResult;
    if (!vehiculoResult || !vehiculoResult[0]) {
    throw new Error("No se pudo insertar en la tabla 'Datos_Vehiculo'");
    }

    const vehiculoId = vehiculoResult[0].id;

    console.log("vehiculoId:", vehiculoId);

    // 3. usuario
    const usuarioData = {
      email: userData.inputEmail,
      vehicle_data_id: vehiculoId,
      name: userData.inputFirstName,
      apellido: userData.inputLastName,
      password: userData.inputPassword,
    };
    console.log("usuarioData:", usuarioData);
    const usuarioResult = await createUserDB('Usuario', usuarioData);
    if (usuarioResult instanceof Error) throw usuarioResult;

    if (!usuarioResult || !usuarioResult[0]) {
    throw new Error("No se pudo insertar en la tabla 'Usuario'");
    }
    const newUser = usuarioResult[0];


    console.log("Usuario creado y enviado a DB:", newUser);

    res.json({
      message: "Inicio de sesión exitoso",
      success: true,
      currentUserData: newUser,
    });

    console.log("Resultado preguntas:", preguntasResult);

  } catch (error) {
    console.error("Error al crear usuario:", error.message || error);
    res.status(500).json({
      message: "Error al crear usuario",
      success: false,
      error: error.message || "Internal Server Error",
    });
  }
};

module.exports = {
  getUsers,
  loginService,
  createUser,
};
