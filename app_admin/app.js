import renderScreenAdmin1 from "./screens/screenAdmin1.js";
import renderScreenEditOrder from "./screens/screenChangeStatusAdmin.js";
import renderScreenAdminDashboard from "./screens/screenDashboardAdmin.js";
import renderScreenDashboardOrders from "./screens/screenDashboardOrdersAdmin.js";
import renderScreenAdminLogin from "./screens/screenLoginAdmin.js";

const socket = io("/", { path: "/real-time" });

function clearScripts() {
  document.getElementById("app").innerHTML = "";
}

let route = { path: "/", data: {} };
renderRoute(route);

async function renderRoute(route) {
  switch (route?.path) {
    case "/":
      clearScripts();
      renderScreenAdmin1();
      break;
    case "/loginAdmin":
      clearScripts();
      renderScreenAdminLogin();
      break;
    case "/dashboardAdmin":
      clearScripts();
      renderScreenAdminDashboard(route.data);
      break;
    case "/dashboardOrdersAdmin":
      clearScripts();
      renderScreenDashboardOrders();
      break;
    case "/editOrder":
      clearScripts();
      renderScreenEditOrder(route.data);
      break;
    default:
      const app = document.getElementById("app");
      app.innerHTML = `<h1>404 - Not Found</h1><p>The page you are looking for does not exist.</p>`;
  }
}

function navigateToAdmin(path, data) {
  route = { path, data };
  renderRoute(route);
}

async function makeRequest(url, method, body) {
  //bien
  console.log(url);
  console.log(method);
  console.log(body);

  const BASE_URL = "http://localhost:5057";
  let response = await fetch(`${BASE_URL}${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : null,
  });

  response = await response.json();
  return response;
}

export { navigateToAdmin, socket, makeRequest };
