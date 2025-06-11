import { navigateToAdmin, makeRequest } from "../app.js";

export default function renderScreenEditOrder(data) {
  const app = document.getElementById("app");

  const loadCSS = (href) => {
    const existing = document.querySelector(`link[href="${href}"]`);
    if (!existing) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
  };

  loadCSS("/app_admin/styles/screenChangeStatusAdmin.css");

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
          <h1 id="page-title">EDIT</h1>
        </header>

        <section id="card-container"></section>

        <div id="buttonsEdit">
          <button id="back">Back</button>
        </div>
        <button id="deleteOrder">Delete Order</button>

        <div id="deleteModal" class="modal hidden">
          <div class="modal-content">
            <p><strong>Delete Order</strong></p>
            <p>Are you really sure you want to delete this service?</p>
            <div class="modal-actions">
              <button id="cancelDelete">Cancel</button>
              <button id="confirmDelete">Delete</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  `;

  const back = document.getElementById("back");
  const deleteOrder = document.getElementById("deleteOrder");
  const logOutBTN = document.getElementById("logOut");
  const cardContainer = document.getElementById("card-container");

  data.forEach((order) => {
    const card = document.createElement("div");
    card.classList.add("car-card");
    card.id = ("order-card-" + order.idOrder).toLowerCase();

    card.innerHTML = `
      <div class="card-content">
        <p><strong>Status:</strong> <span class="status-active">🟢 Active</span></p>
        <p><strong>Plate:</strong> ${order.plate}</p>
        <p><strong>Client:</strong> ${order.nameClient}</p>
        <p><strong>Arrival time:</strong> ${order.timeServiceInput}</p>

        <div class="icons-progress">
          <div class="stage-block">
            <div class="stage" id="received-${order.idOrder}">📨</div>
            <p class="stage-label">Received</p>
          </div>
          <div class="stage-block">
            <div class="stage" id="wash-${order.idOrder}">🚗</div>
            <p class="stage-label">Washing</p>
          </div>
          <div class="stage-block">
            <div class="stage" id="touches-${order.idOrder}">✨</div>
            <p class="stage-label">Final touches</p>
          </div>
          <div class="stage-block">
            <div class="stage" id="set-${order.idOrder}">✅</div>
            <p class="stage-label">All set!</p>
          </div>
        </div>

        <p><strong>Service:</strong> ${order.serviceName}</p>
      </div>
    `;

    cardContainer.appendChild(card);

    // Eventos para cada ícono de estado
    ["received", "wash", "touches", "set"].forEach((estado) => {
      const icon = document.getElementById(`${estado}-${order.idOrder}`);
      if (icon) {
        icon.addEventListener("click", () => enviarEstado(order.idOrder, estado));
      }
    });
  });

  async function enviarEstado(id, estadoSeleccionado) {
    document.querySelectorAll(`#order-card-${id} .stage`).forEach(el =>
      el.classList.remove("active-stage")
    );

    const selected = document.getElementById(`${estadoSeleccionado}-${id}`);
    if (selected) {
      selected.classList.add("active-stage");
    }

    try {
      const body = { id, estado: estadoSeleccionado };
      const response = await makeRequest("/enviar-estado", "POST", body);
      console.log("Respuesta del servidor:", response.message);
    } catch (error) {
      console.error("Error al enviar el estado:", error);
    }
  }

  back.addEventListener("click", () => {
    navigateToAdmin("/dashboardOrdersAdmin");
  });

  logOutBTN.addEventListener("click", () => {
    localStorage.clear();
    sessionStorage.clear();
    alert("You have logged out successfully");
    navigateToAdmin("/");
  });

  const modal = document.getElementById("deleteModal");
  const cancelDelete = document.getElementById("cancelDelete");
  const confirmDelete = document.getElementById("confirmDelete");

  deleteOrder.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  cancelDelete.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  confirmDelete.addEventListener("click", async () => {
    try {
      const response = await makeRequest("/delete-order", "POST", {
        id: data[0].idOrder,
      });
      console.log("Orden eliminada:", response.message);
      alert("Order deleted successfully");
      navigateToAdmin("/dashboardOrdersAdmin");
    } catch (err) {
      console.error("Error deleting order:", err);
      alert("Error deleting the order.");
    }
  });
}
