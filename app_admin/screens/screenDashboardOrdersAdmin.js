import { makeRequest, navigateToAdmin } from "../app.js";

export default async function renderScreenDashboardOrders(data) {
  //  Cargar estilos para barra de progreso
  const loadCSS = (href) => {
    const existing = document.querySelector(`link[href="${href}"]`);
    if (!existing) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
  };

  loadCSS("/app_admin/styles/screenDashboardOrdersAdmin.css");

  const app = document.getElementById("app");
  app.innerHTML = `
    <div id="main-container">
      <aside id="sidebar">
        <nav>
          <h2 id="menu-title">CAR MANAGEMENT</h2>
          <ul>
            <li id="logOut">LOG OUT</li>
          </ul>
        </nav>
        <div id="logo-section">
          <img src="/app_admin/assets/Logo_gris.png" alt="King Wash Track logo" />
        </div>
      </aside>

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
        <section id="card-container"></section>
      </main>
    </div>
  `;

  const logOutBTN = document.getElementById("logOut");
  const cardContainer = document.getElementById("card-container");

  const response = await makeRequest("/orders", "GET");

  const orders = response.success
    ? response.orders.map((data) => ({
        id: data.id,
        plate: data.plate || "No plate",
        serviceName: data.name || "Sin nombre",
        timeServiceInput: data.time_book || "Hora no especificada",
        status: data.status || "received"
      }))
    : [];

  orders.forEach((order) => {
    const card = document.createElement("div");
    card.classList.add("car-card");
    card.id = `order-card-${order.id}`;

    card.innerHTML = `
      <div class="card-content">
        <p><strong>Status:</strong> <span class="status-active">🟢 ${order.status}</span></p>
        <p><strong>Plate:</strong> ${order.plate}</p>
        <p><strong>Client:</strong> ${order.serviceName}</p>
        <p><strong>Arrival time:</strong> ${order.timeServiceInput}</p>

        <div class="icons-progress">
          <div class="stage-block">
            <div class="stage ${order.status === 'received' ? 'active-stage' : ''}">📨</div>
            <p class="stage-label">Received</p>
          </div>
          <div class="stage-block">
            <div class="stage ${order.status === 'wash' ? 'active-stage' : ''}">🚗</div>
            <p class="stage-label">Washing</p>
          </div>
          <div class="stage-block">
            <div class="stage ${order.status === 'touches' ? 'active-stage' : ''}">✨</div>
            <p class="stage-label">Final touches</p>
          </div>
          <div class="stage-block">
            <div class="stage ${order.status === 'set' ? 'active-stage' : ''}">✅</div>
            <p class="stage-label">All set!</p>
          </div>
        </div>

        <p><strong>Service:</strong> ${order.serviceName}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      navigateToAdmin("/editOrder", [order]);
    });

    cardContainer.appendChild(card);
  });

  logOutBTN.addEventListener("click", () => {
    localStorage.clear();
    sessionStorage.clear();
    alert("You have logged out successfully");
    navigateToAdmin("/");
  });
}
