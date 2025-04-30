import renderScreenUserLogin1 from "./screens/screenLoginUser.js";
import renderScreenUserSignUp1 from "./screens/screenSignUpUser1.js";
import renderScreenUser1 from "./screens/screenUser1.js";

const socket = io("/", { path: "/real-time" });

function clearScripts() {
  document.getElementById("app").innerHTML = "";
}

let route = { path: "/", data: {} };
router();

function router() {
  switch (route.path) {
    case "/":
      // clearScripts();
      renderScreenUser1(route);
      break;

    case "/loginUser1":
      // clearScripts();
      renderScreenUserLogin1();
      break;
    
    case "/signUpUser1":
      // clearScripts();
      renderScreenUserSignUp1();
      break;

    default:
      const app = document.getElementById("app");
      app.innerHTML = `<h1>404 - Not Found</h1><p>The page you are looking for does not exist.</p>`;
  }
}

function navigateTo(path, data) {
  console.log(path); //aqui si llega
  route = { path, data };
  router();
  console.log(route);
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

export { navigateTo, socket, makeRequest };
