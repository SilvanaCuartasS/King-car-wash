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

export default function renderScreenAdminDashboard(data) {
  console.log(data);

    // 👇 Carga el CSS al renderizar esta pantalla
    loadCSS("/app_admin/styles/screenDashboardAdmin.css");

  const app = document.getElementById("app");
  app.innerHTML = `
    
    <div id="logo-container">
    <img src="" alt="Logo" id="logo">
    </div>

    <div id="login-container">
    <h1>Welcome</h1>
    <p id="currentName"></p>

    <button id="carManage">Car Management</button>
    <button id="logOut">Log Out</button>
    </div>
      `;

  const carManageBTN = document.getElementById("carManage");
  const logOutBTN = document.getElementById("logOut");
  const currentName = document.getElementById("currentName");

  if (data) {
    currentName.textContent = data.name;
  } else {
    currentName.textContent = "Unknown Admin";
  }
      
  logOutBTN.addEventListener("click", () => {
    console.log("Logout clicked");
  
    localStorage.clear();
    sessionStorage.clear();
  
    alert("You have logged out successfully");
    navigateToAdmin("/");
  });
  
 carManageBTN.addEventListener("click", () => {
    console.log("Car manage clicked");
    navigateToAdmin("/dashboardOrdersAdmin");
  });
}
