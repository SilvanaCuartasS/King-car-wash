import { makeRequest } from "../../app_user/app.js";
import { navigateToAdmin } from "../app.js";

export default async function renderScreenDashboardOrders(data) {
  console.log(data); // hecho

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
        <h1 id="page-title">CAR MANAGEMENT</h1>
        <div id="filters">
          <button id="filter-active">🟢 Active</button>
          <button id="filter-finalized">🟡 Finalized</button>
          <button id="filter-notarrive">⚫ Not Arrive</button>
          <input type="date" id="date-filter" value="2024-04-24" />
          <input type="text" id="search-bar" placeholder="Search" />
        </div>
      </header>

      <!-- Contenedor de tarjetas dinámicas -->
      <section id="card-container"></section>
  `;

  const logOutBTN = document.getElementById("logOut");
  const cardContainer = document.getElementById("card-container");

  async function orderGetDB() {
    const response = await makeRequest("/orders", "GET");

    if (response.success) {
      console.log("response:", response.orders);

      return response.orders;
    } else {
      alert(response.message || "Error al obtener la orden");
      return [];
    }
  }

  const orderDB = await orderGetDB();
  console.log("orderDB:", orderDB);

  orderDB.forEach((order) => {
    const card = document.createElement("div");
    card.classList.add("car-card");

    card.innerHTML = `
      <div class="card-content">
        <p><strong>Status:</strong> <span class="status-active">🟢 Active</span></p>
        <p><strong>Plate:</strong> ${order.plate}</p>
        <p><strong>Client:</strong> ${order.nameClient}</p>
        <p><strong>Arrival time:</strong> ${order.timeServiceInput}</p>

        <div id="edit-service">
          <span class="active-stage">Received</span>
          <span>Washing</span>
          <span>Final touches</span>
          <span>All set!</span>
        </div>

        <p><strong>Service:</strong> ${order.serviceName}</p>

        <svg id="edit-service" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"/>
        </svg>

      </div>
    `;

    cardContainer.appendChild(card);
  });

  logOutBTN.addEventListener("click", () => {
    localStorage.clear();
    sessionStorage.clear();
    alert("You have logged out successfully");
    navigateToAdmin("/");
  });

}
