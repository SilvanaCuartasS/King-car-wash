import { makeRequest } from "../../app_user/app.js";
import { navigateToAdmin } from "../app.js";

export default function renderScreenAdminLogin() {
  const app = document.getElementById("app");
  app.innerHTML = `
    
    <div id="logo-container">
    <img src="" alt="Logo" id="logo">
    </div>

    <div id="login-container">
    <button id="backBTN">Back</button>
    <h1>LOG IN ADMIN</h1>
    <p>Welcome back!</p>
    <img src="" alt="userIcon" id="userIcon">
    <input type="email" id="email" placeholder="email">
    <img src="" alt="lockIcon" id="lockIcon">
    <input type="password" id="password" placeholder="password">
    <img src="" alt="lockIcon2" id="lockIcon2">
    <input type="password" id="adminCode" placeholder="Admin code">

    <button id="log-in">Log in</button>
    </div>
      
      `;

  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  const inputAdminCode = document.getElementById("adminCode");

  const log = document
    .getElementById("log-in")
    .addEventListener("click", loginAdminREQ);
  const backBTN = document.getElementById("backBTN");

  backBTN.addEventListener("click", () => {
    console.log("click");
    navigateToAdmin("/");
  });

  async function loginAdminREQ() {
    const response = await makeRequest("/login-admin", "POST", {
      inputEmail: inputEmail.value,
      inputPassword: inputPassword.value,
      inputAdminCode: inputAdminCode.value,
    });
    console.log("response", response);

    if (response.success) {
      console.log("Login exitoso");
      localStorage.setItem("currentAdmin", JSON.stringify(response.currentAdmin)); // Guarda el admin
      navigateToAdmin("/dashboardAdmin");
    } else {
      alert(response.message || "Error al iniciar sesión");
    }
  }

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
