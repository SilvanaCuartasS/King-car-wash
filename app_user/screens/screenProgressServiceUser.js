import { navigateTo, makeRequest, socket } from "../app.js";

export default function renderScreenUserProgressService(data) {
  console.log(data);

  const app = document.getElementById("app");

  //  Conectar CSS de forma modular
  function loadCSS(href) {
    const existingLink = document.querySelector(`link[href="${href}"]`);
    if (!existingLink) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
  }

  loadCSS("/app_user/styles/screenProgressServiceUser.css"); // ✅ tu ruta modular

  app.innerHTML = `
    <div id="progressService-user">
  <header id="header"> <!-- Aquí el ID correcto -->
    <img src="/app_user/assets/Logo-navbar.png" alt="Logo" id="logo">
    <div id="user-icon-container">
      <img src="/app_user/assets/user-icon.png" alt="User" id="user-icon" />
    </div>
  </header>

  <main id="progress-main">
      <section id="progress-status">
        <h1>YOUR CAR IS IN PROGRESS!</h1>
        <div id="progress-steps">
          <div class="step" id="iconReceived"><img src="/app_user/assets/Received.png" alt="Received"><p>Received</p></div>
          <div class="step" id="iconWashing"><img src="/app_user/assets/Washing.png" alt="Washing"><p>Washing</p></div>
          <div class="step" id="iconFinalTouches"><img src="/app_user/assets/Final Touches.png" alt="Final Touches"><p>Final touches</p></div>
          <div class="step" id="iconAllSet"><img src="/app_user/assets/All Set.png" alt="All Set"><p>All set!</p></div>
        </div>
        <p id="estadoMensaje"></p>
      </section>
</main>

      <section id="progress-banner">
        <div class="banner-content">
          <div class="text">
            <h3>Shine more, pay less!</h3>
            <p>This week at King Car Wash, your car gets the royal <br> treatment for less!</p>
            <h2>30% <span>OFF</span> on premium washes</h2>
            <p class="small">Because your ride deserves to shine without breaking the bank.</p>
          </div>
        </div>
      </section>

      <div id="readyModal">
        <div class="modal-content">
          <button id="closeModal">✕</button>
          <h2>THANK YOU FOR CHOOSING <br> KING CAR WASH!</h2>
          <p>Your car is ready! You can pick it up and make the payment at any of our physical locations.</p>
          <p>We'd love to hear about your experience! Help us improve by filling out this quick survey:</p>
          <div class="modal-buttons">
            <button class="white">Survey</button>
            <button class="white" id="notNow">Not now</button>
          </div>
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

  // Eventos socket
  socket.on("estadoServicio", ({ estado }) => {
    const steps = {
      wash: "iconWashing",
      touches: "iconFinalTouches",
      set: "iconAllSet"
    };

    Object.values(steps).forEach((id) => document.getElementById(id)?.classList.remove("active"));

    if (estado === "set") {
      document.getElementById(steps.set)?.classList.add("active");
      document.getElementById("readyModal").style.display = "flex";
    } else if (steps[estado]) {
      document.getElementById(steps[estado])?.classList.add("active");
    }

    document.getElementById("estadoMensaje").textContent = `Status changed to: ${estado}`;
  });

  socket.on("ordenCancelada", ({ mensaje }) => {
    const modal = document.createElement("div");
    modal.innerHTML = `
      <div class="cancel-modal">
        <div class="cancel-box">
          <h2>Order canceled</h2>
          <p>${mensaje}</p>
          <button id="closeCancel">Acept</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    document.getElementById("closeCancel").onclick = () => {
      modal.remove();
      navigateTo("/dashboardUser", data);
    };
  });

  document.getElementById("user-icon")?.addEventListener("click", () => {
    navigateTo("/userProfile", data);
  });

  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("readyModal").style.display = "none";
  });

  document.getElementById("notNow").addEventListener("click", () => {
    document.getElementById("readyModal").style.display = "none";
    navigateTo("/dashboardUser");
  });

  document.getElementById("logo").addEventListener("click", () => {
  navigateTo("/screenDashboardUser", data);
  });
}
