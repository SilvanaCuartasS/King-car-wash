import { navigateToAdmin } from "../app.js";

export default function renderScreenAdminDashboard() {
  const app = document.getElementById("app");
  app.innerHTML = `
    
    <div id="logo-container">
    <img src="" alt="Logo" id="logo">
    </div>

    <div id="login-container">
    <button id="backBTN">Back</button>
    <h1>Welcome</h1>
    <p id="currentName"></p>

    <button id="carManage">Car Management</button>
    <button id="logOut">Log Out</button>
    </div>
      `;

  const carManageBTN = document.getElementById("carManage");
  const logOutBTN = document.getElementById("logOut");
  const currentName = document.getElementById("currentName");

  const currentAdmin = JSON.parse(localStorage.getItem("currentAdmin"));

  if (currentAdmin) {
    currentName.textContent = currentAdmin.name;
  } else {
    currentName.textContent = "Unknown Admin";
  }
  

  const backBTN = document.getElementById("backBTN");

  backBTN.addEventListener("click", () => {
    console.log("click");
    navigateToAdmin("/");
  });
    
  logOutBTN.addEventListener("click", () => {
    localStorage.removeItem("currentAdmin");
    navigateToAdmin("/");
  });
  

  // function registroUsuarios ()
  // {
  //     fetch ("http://localhost:5051/registro/" ,{
  //         method: "POST",
  //         headers: {  "Content-Type": "application/json"},
  //         body: JSON.stringify({
  //           image:imageRegistroInput.value,
  //           user: userInput.value,
  //           name: nameInput.value,
  //           password: passwordInput.value })
  //         })
  //          .then((response)=> response.json())
  //          .then((data) => {
  //             alert(data.message);
  //             mostrarPantalla("inicio");
  //           })
  //           .catch((error) => console.error("Error:", error));

  // }
}
