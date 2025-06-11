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
