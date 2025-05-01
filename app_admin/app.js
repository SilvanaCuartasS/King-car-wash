import renderScreenAdmin1 from "./screens/screenAdmin1.js";
import renderScreenAdminDashboard from "./screens/screenDashboardAdmin.js";
import renderScreenAdminLogin from "./screens/screenLoginAdmin.js";

const socket = io("/", { path: "/real-time" });

function clearScripts() {
  document.getElementById("app").innerHTML = "";
}

let route = { path: "/", data: {} };
renderRoute(route);

function renderRoute(route) {
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
      renderScreenAdminDashboard();
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

export { navigateToAdmin, socket };
