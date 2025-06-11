import { navigateToAdmin } from "../../app_admin/app.js";
import { navigateTo } from "../app.js";

export default function renderScreenUser1() {
  const app = document.getElementById("app");

  // 👉 Cargar el CSS específico de esta pantalla
  function loadCSS(href) {
    const existingLink = document.querySelector(`link[href="${href}"]`);
    if (!existingLink) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
  }

  loadCSS("/app_user/styles/screenUser1.css");

  // 👉 Estructura HTML aislada con ID para evitar conflictos
  app.innerHTML = `
    <div id="user1-screen">

      <nav>
  <div class="nav-links">
    <a href="#">SERVICES</a>
    <a href="#">WASH INSURE</a>
  </div>

  <img src="/app_user/assets/Logo-navbar.png" alt="KingCarWashLogo" id="logoForClick" />

  <div class="nav-links">
    <a href="#">EXPERIENCES</a>
    <a href="#">WASH TRACK</a>
  </div>
</nav>

      <div id="container">
        <h3>Welcome to</h3>
        <h1>KING WASH TRACK</h1>
        <h4>Get the control of your washing</h4>
        <div id="button-row">
        <button id="clientBTN">Client</button>
        <button id="adminBTN">Admin</button>
        </div>

      </div>

      <footer>
  <div class="footer-content">
    <div id="social&king">
      <img src="/app_user/assets/logo-king.png" alt="Logo" id="footer-logo">
      <div id="social-icons">
        <img src="/app_user/assets/facebook-icon.png" alt="Facebook">
        <img src="/app_user/assets/instagram-icon.png" alt="Instagram">
        <img src="/app_user/assets/pinterest-icon.png" alt="Pinterest">
      </div>
    </div>

    <div class="footer-section">
      <h3>Working Hours:</h3>
      <p>Mon-Sat: 08:30 - 17:00</p>
      <p>Sun: 09:00 - 17:00</p>
    </div>

    <div class="footer-section">
      <h3>Address:</h3>
      <p>Caney, Cra.83c #25-15,<br>Cali, Valle del Cauca, Colombia</p>
    </div>

    <div class="footer-section">
      <h3>Hits Up:</h3>
      <p>+57 313 123 4567</p>
      <p>KingWashTrack@gmail.com</p>
    </div>
  </div>

  <hr>
  <div class="footer-bottom">
    © KingWashTrack.com.au. All rights reserved | designed by ChontaduroGroup
  </div>
</footer>
    </div>
  `;

  // 👉 Acciones de los botones
  document.getElementById("logoForClick").addEventListener("click", () => {
    navigateTo("/landingPage");
  });

  document.getElementById("adminBTN").addEventListener("click", () => {
    navigateToAdmin("/loginAdmin");
  });

  document.getElementById("clientBTN").addEventListener("click", () => {
    navigateTo("/loginUser1");
  });
}
