import { makeRequest } from "../../app_user/app.js";
import { navigateToAdmin } from "../app.js";

// 👉 Función para cargar el CSS dinámicamente
function loadCSS(href) {
  const existingLink = document.querySelector(`link[href="${href}"]`);
  if (!existingLink) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }
}
export default function renderScreenAdminLogin() {
  const app = document.getElementById("app");

    // 👇 Carga el CSS al renderizar esta pantalla
    loadCSS("/app_admin/styles/screenLoginAdmin.css");
    
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

      <div id="password-container">
        <img src="" alt="lockIcon" id="lockIcon">
        <input type="password" id="password" placeholder="password">
        <button type="button" id="togglePassword">Show</button>
      </div>

      <div id="admincode-container">
        <img src="" alt="lockIcon2" id="lockIcon2">
        <input type="password" id="adminCode" placeholder="Admin code">
        <button type="button" id="toggleAdminCode">Show</button>
      </div>

      <button id="log-in">Log in</button>
    </div>
  `;

  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  const inputAdminCode = document.getElementById("adminCode");
  const togglePassword = document.getElementById("togglePassword");
  const toggleAdminCode = document.getElementById("toggleAdminCode");

  togglePassword.addEventListener("click", () => {
    const type = inputPassword.getAttribute("type") === "password" ? "text" : "password";
    inputPassword.setAttribute("type", type);
    togglePassword.textContent = type === "password" ? "Show" : "Hide";
  });

  toggleAdminCode.addEventListener("click", () => {
    const type = inputAdminCode.getAttribute("type") === "password" ? "text" : "password";
    inputAdminCode.setAttribute("type", type);
    toggleAdminCode.textContent = type === "password" ? "Show" : "Hide";
  });

  inputAdminCode.addEventListener("input", () => {
    inputAdminCode.value = inputAdminCode.value.toUpperCase();
  });
  
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
      const adminName = response.currentAdmin?.name || "admin";
      alert(`Welcome back, ${adminName}!`);  
      navigateToAdmin("/dashboardAdmin",response.currentAdmin);
    } else {
      alert(response.message || "Error al iniciar sesión");
    }
  }
}
