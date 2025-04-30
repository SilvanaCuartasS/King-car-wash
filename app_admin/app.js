import renderScreen1 from "./screens/screen1.js";
import renderScreen2 from "./screens/screen2.js";

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
      renderScreen1(route?.data);
      break;
    case "/screen2":
      clearScripts();
      renderScreen2(route?.data);
      break;
    default:
      const app = document.getElementById("app");
      app.innerHTML = `<h1>404 - Not Found</h1><p>The page you are looking for does not exist.</p>`;
  }
}

function navigateTo(path, data) {
  route = { path, data };
  renderRoute(route);
}

export { navigateTo, socket };
