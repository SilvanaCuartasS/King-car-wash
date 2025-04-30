// Solo obtener y visualizar la DB
let admins = [
  {
    id: 1,
    name: "David",
    adminCode: "1",
    email: "d",
    password:"2",
  },
  {
    id: 1,
    name: "David",
    adminCode: "A4123",
    email: "davidAdmin@gmail.com",
    password:"13579",
  },
  {
    id: 2,
    name: "Luis",
    adminCode: "A5823",
    email: "luisAdmin@gmail.com",
    password:"24680",
  },
 { 
    id: 3,
    name: "Juan",
    adminCode: "A6089",
    email: "juanAdmin@gmail.com",
    password:"654321",
  }
];

const getAllAdmins = async () => {
  return admins;
};

module.exports = {
  getAllAdmins,
};
