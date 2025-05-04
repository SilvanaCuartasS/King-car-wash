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
export default function renderScreenEditOrder(data) {
  console.log(data); // hecho

    // 👇 Carga el CSS al renderizar esta pantalla
    loadCSS("/app_admin/styles/screenChangeStatusAdmin.css");

  const app = document.getElementById("app");
  app.innerHTML = `
  <div id="main-container">
    <!-- Sidebar amarillo -->
    <aside id="sidebar">
      <nav>
        <h2 id="menu-title">CAR MANAGEMENT</h2>
        <ul>
          <li id="logOut">LOG OUT</li>
        </ul>
      </nav>
      <div id="logo-section">
        <img src="" alt="King Wash Track logo" />
        <p><strong>KING</strong><br />WASH·TRACK</p>
      </div>
    </aside>

    <!-- Contenido principal -->
    <main id="content">
      <header id="header">
        <h1 id="page-title">EDIT</h1>
      </header>

      <!-- Contenedor de tarjetas dinámicas -->
      <section id="card-container"></section>

      <div id="buttonsEdit">
      <button id="confirm">Confirm</button>
      <button id="back">Back</button>
      </div>
      <button id="deleteOrder">Delete Order</button>
  `;
  const confirm = document.getElementById("confirm");
  const back = document.getElementById("back");
  const deleteOrder = document.getElementById("deleteOrder");
  const logOutBTN = document.getElementById("logOut");
  const cardContainer = document.getElementById("card-container");

  data.forEach((order) => {
    const card = document.createElement("div");
    card.classList.add("car-card");
    card.id = ("order-card-" + order.id).toLowerCase();

    card.innerHTML = `
      <div class="card-content">
        <p><strong>Status:</strong> <span class="status-active">🟢 Active</span></p>
        <p><strong>Plate:</strong> ${order.plate}</p>
        <p><strong>Client:</strong> ${order.nameClient}</p>
        <p><strong>Arrival time:</strong> ${order.timeServiceInput}</p>

        <div class="progress">
          <span class="active-stage">Received</span>
          <span>Washing</span>
          <span>Final touches</span>
          <span>All set!</span>
        </div>

        <p><strong>Service:</strong> ${order.serviceName}</p>
      </div>
    `;

    cardContainer.appendChild(card);
  });

  back.addEventListener("click", () => {
    navigateToAdmin("/dashboardOrdersAdmin");
  });

  logOutBTN.addEventListener("click", () => {
    localStorage.clear();
    sessionStorage.clear();
    alert("You have logged out successfully");
    navigateToAdmin("/");
  });
}
