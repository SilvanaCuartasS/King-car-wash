import { navigateToAdmin } from "../../app_admin/app.js";
import { navigateTo } from "../app.js";

export default function renderScreenUser1() {
  const app = document.getElementById("app");
  app.innerHTML = `

    <nav>
    <a href="">Services</a>
    <a href="">Wash Insure</a>
    <div id="logoDiv">
        <img src="" alt="KingCarWashLogo" id="logoForClick">
    </div>
    <a href="">Experiences</a>
    <a href="">Wash Track</a>
    </nav>

    <div id="container">
    <h3>Welcome to</h3>
    <h1>KING WASH TRACK</h1>
    <h4>Get the control of your washing</h4>
    <button id="clientBTN">Client</button>
    <button id="adminBTN">Admin</button>
    </div>

    <div>Aqui va el footer</div>
    `;

  const clientBTN = document.getElementById("clientBTN");
  const adminBTN = document.getElementById("adminBTN");

  document.getElementById("logoForClick").addEventListener("click", () => {
    console.log("King icon clicked"); 
    navigateTo("/landingPage");
  });

  adminBTN.addEventListener("click", () => {
    console.log("click");
    navigateToAdmin("/loginAdmin");
  });

  clientBTN.addEventListener("click", () => {
    console.log("click");

    navigateTo("/loginUser1");
  });
}
