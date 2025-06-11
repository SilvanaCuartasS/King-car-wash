import { makeRequest } from "../../app_user/app.js";
import { navigateToAdmin } from "../app.js";

export default function renderScreenAdminLogin() {
  const app = document.getElementById("app");

  // 👉 Cargar CSS específico de esta pantalla
  function loadCSS(href) {
    const existingLink = document.querySelector(`link[href="${href}"]`);
    if (!existingLink) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
  }

  loadCSS("/app_admin/styles/screenLoginAdmin.css");

  // 👉 HTML aislado dentro de #login-screen
  app.innerHTML = `
    <div id="login-screen">
      <div id="logo-container">
        <img src="/app_admin/assets/logo-king.png" alt="Logo" id="logo">
      </div>

      <div id="login-container">
        <h1>LOG IN ADMIN</h1>
        <p>Welcome back!</p>

        <div id="email-container">
          <img src="/app_admin/assets/user-icon.png" alt="userIcon" id="userIcon">
          <input type="email" id="email" placeholder="Email">
        </div>

        <div id="password-container">
          <img src="/app_admin/assets/lock-icon.png" alt="lockIcon" id="lockIcon">
          <input type="password" id="password" placeholder="Password">
          <button type="button" id="togglePassword">Show</button>
        </div>

        <div id="admincode-container">
          <img src="/app_admin/assets/lock-icon.png" alt="lockIcon2" id="lockIcon2">
          <input type="password" id="adminCode" placeholder="Admin code">
          <button type="button" id="toggleAdminCode">Show</button>
        </div>

        <button id="log-in">Log in</button>
      </div>
    </div>
  `;

  // 👇 Lógica funcional
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

  document.getElementById("log-in").addEventListener("click", loginAdminREQ);


  // ✅ NUEVO: Click en logo = volver a screenAdmin1
  const logo = document.getElementById("logo");
  logo.addEventListener("click", () => {
    navigateToAdmin("/");
  });

  async function loginAdminREQ() {
    const response = await makeRequest("/login-admin", "POST", {
      inputEmail: inputEmail.value,
      inputPassword: inputPassword.value,
      inputAdminCode: inputAdminCode.value,
    });

    if (response.success) {
      const adminName = response.currentAdmin?.name || "admin";
      alert(`Welcome back, ${adminName}!`);
      navigateToAdmin("/dashboardAdmin", response.currentAdmin);
    } else {
      alert(response.message || "Error al iniciar sesión");
    }
  }
}
