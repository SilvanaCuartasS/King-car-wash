import { navigateTo } from "../../app_user/app.js";
import { navigateToAdmin } from "../app.js";

// Carga el CSS de esta pantalla
function loadCSS(href) {
  const existingLink = document.querySelector(`link[href="${href}"]`);
  if (!existingLink) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }
}

export default function renderScreenAdmin1() {
  loadCSS("/app_admin/styles/screenAdmin1.css");

  const app = document.getElementById("app");

  app.innerHTML = `
    <div id="screenAdminWelcome">
      
      <!-- Lado izquierdo: logo -->
      <div id="logo-container">
        <img src="/app_admin/assets/logo-king.png" alt="KingCarWashLogo" id="logo" />
      </div>

      <!-- Lado derecho: bienvenida y botones -->
      <div id="welcome-container">
        <h3>WELCOME</h3>
        <h2>King Wash Track</h2>
        <h4>Get the control of your washing</h4>

        <div class="button-group">
          <button id="clientBTN">Client</button>
          <button id="adminBTN">Admin</button>
        </div>
      </div>

    </div>
  `;

  const clientBTN = document.getElementById("clientBTN");
  const adminBTN = document.getElementById("adminBTN");

  adminBTN.addEventListener("click", () => {
    navigateToAdmin("/loginAdmin");
  });

  clientBTN.addEventListener("click", () => {
    navigateTo("/loginUser1");
  });
}
