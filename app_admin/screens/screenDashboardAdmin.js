import { navigateToAdmin } from "../app.js";

export default function renderScreenAdminDashboard(data) {
  const app = document.getElementById("app");

  // ✅ Cargar CSS específico para esta pantalla
  function loadCSS(href) {
    const existingLink = document.querySelector(`link[href="${href}"]`);
    if (!existingLink) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
  }

  loadCSS("/app_admin/styles/screenDashboardAdmin.css");

  app.innerHTML = `
    <div id="dashboard-screen">
      <div id="logo-container">
        <img src="/app_admin/assets/logo-king.png" alt="Logo" id="logo">
      </div>

      <div id="welcome-container">
        <h1>WELCOME</h1>
        <p id="currentName">${data?.name || "Unknown Admin"}</p>

        <div class="dashboard-buttons">
          <button id="carManage">Car Management</button>
          <button id="logOut">Log Out</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("carManage").addEventListener("click", () => {
    navigateToAdmin("/dashboardOrdersAdmin");
  });

  document.getElementById("logOut").addEventListener("click", () => {
    localStorage.clear();
    sessionStorage.clear();
    alert("You have logged out successfully");
    navigateToAdmin("/");
  });

  document.getElementById("logo").addEventListener("click", () => {
    navigateToAdmin("/");
  });
}
