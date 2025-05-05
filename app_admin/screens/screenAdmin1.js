import { navigateTo } from "../../app_user/app.js";
import { navigateToAdmin } from "../app.js";

// 👉 Esta función inserta el <link> de CSS en el <head>
function loadCSS(file) {
  const existingLink = document.querySelector(`link[href="${file}"]`);
  if (!existingLink) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = file;
    document.head.appendChild(link);
  }
}

export default function renderScreenAdmin1() {
  // 👇 Carga el CSS al renderizar esta pantalla
  loadCSS("/app_admin/styles/screenAdmin1.css");

  const app = document.getElementById("app");

  app.innerHTML = `
    <nav>
      <div class="hamburger" id="menuToggle">&#9776;</div>

      <div class="nav-links">
        <a href="">SERVICES</a>
        <a href="">WASH INSURE</a>
      </div>

      <img src="/app_admin/assets/Logo-user.png" alt="KingCarWashLogo" class="logo" />

      <div class="nav-links">
        <a href="">EXPERIENCES</a>
        <a href="">WASH TRACK</a>
      </div>
    </nav>

    <div class="sidebar" id="sidebar">
      <div class="close-sidebar" id="sidebarClose">&#9776;</div>
      <a href="">SERVICES</a>
      <a href="">WASH INSURE</a>
      <a href="">EXPERIENCES</a>
      <a href="">WASH TRACK</a>
    </div>

    <div id="container">
      <h3>Welcome to</h3>
      <h1>KING WASH TRACK</h1>
      <h4>Get the control of your washing</h4>
      <div class="button-group">
        <button id="clientBTN">Client</button>
        <button id="adminBTN">Admin</button>
      </div>
    </div>

      <footer>
        <div id="social&king">
           <img src="" alt="" id="kingIcon">
           <img src="" alt="" id="facebookIcon">
           <img src="" alt="" id="igIcon">
           <img src="" alt="" id="pinterestIcon">
        </div>

        <div id="workingHours">
            <h3>Working Hours:</h3>
            <p>Mon-Sat: 08:30 - 17:00</p>
            <p>Sun: 09:00 - 17:00</p>
        </div>

        <div id="adress">
            <h3>Address::</h3>
            <p>Caney, Cra.83c #25-15, Cali, Valle del Cauca, Colombia</p>
        </div>

        <div id="hitsUp">
            <h3>Hits Up:</h3>
            <p>+57 313 123 4567</p>
            <p>KingWashTrack@gmail.com</p>
        </div>

        <hr>

        <img src="" alt="" id="footerIcon">
        <p>KingWashTrack.com.au. All rights reserved  | designed by ChontaduroGroup</p>
      </footer>
      `;
    <footer>
      <div class="footer-content">
        <div class="logo-column">
          <img src="/app_admin/assets/logo-user.png" alt="KingWashTrack logo" />
          <div class="social-icons">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-pinterest-p"></i>
          </div>
        </div>

        <div class="info-column">
          <h4>Working Hours:</h4>
          <p>Mon-Sat: 08:30 - 17:00</p>
          <p>Sun: 09:00 - 17:00</p>
        </div>

        <div class="info-column">
          <h4>Address:</h4>
          <p>Caney, Cra.83c #25-15,</p>
          <p>Cali, Valle del Cauca, Colombia</p>
        </div>

        <div class="info-column">
          <h4>Hits Up:</h4>
          <p>+57 313 123 4567</p>
          <p>KingWashTrack@gmail.com</p>
        </div>
      </div>

      <div class="copyright">
        © KingWashTrack.com.au. All rights reserved | designed by ChontaduroGroup
      </div>
    </footer>
  `;

  // 👉 Lógica de botones y sidebar
  const clientBTN = document.getElementById("clientBTN");
  const adminBTN = document.getElementById("adminBTN");
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const sidebarClose = document.getElementById("sidebarClose");

  adminBTN.addEventListener("click", () => {
    console.log("click");
    navigateToAdmin("/loginAdmin");
  });

  clientBTN.addEventListener("click", () => {
    console.log("click");
    navigateTo("/loginUser1");
  });

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  sidebarClose.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
}
