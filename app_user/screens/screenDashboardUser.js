import { navigateTo } from "../app.js";

export default function renderScreenDashboardUser(data) {
  console.log(data);

  const app = document.getElementById("app");
  app.innerHTML = `
  <div id="dashboard-user">
    <div id="header">
      <img src="" alt="Logo" id="logo" />

      <div id="user-welcome">
        <h2 id="currentName"></h2>
        <h1><strong>KING WASH TRACK</strong></h1>
        <p>Get the control of your washing</p>
        <div id="header-buttons">
          <button id="requestService">Request a service</button>
          <button id="logout">Log out</button>
        </div>
      </div>

      <div id="user-icon-container">
        <img src="" alt="User Icon" id="user-icon" />
      </div>

    </div>

    <div id="services">
      <div id="card-express">
        <h3 id="badge-express">Express</h3>
        <p>$15</p>
        <ul>
          <li>Exterior wash with active foam</li>
          <li>Microfiber dry</li>
          <li>Quick window cleaning</li>
          <li>Express tire shine</li>
        </ul>
        <button id="choose-express">Choose</button>
      </div>

      <div id="card-wheel">
        <h3 id="badge-wheel">Wheel-S</h3>
        <p>$25</p>
        <ul>
          <li>Exterior wash with active foam</li>
          <li>Deep wheel cleaning</li>
          <li>Brake dust removal</li>
          <li>Tire shine & protection</li>
        </ul>
        <button id="choose-wheel">Choose</button>
      </div>

      <div id="card-full">
        <h3 id="badge-full">Full Clean</h3>
        <p>$30</p>
        <ul>
          <li>Everything in the Express</li>
          <li>Interior vacuuming</li>
          <li>Dashboard and console cleaning</li>
          <li>Plastic protectant application</li>
        </ul>
        <button id="choose-full">Choose</button>
      </div>

      <div id="card-interior">
        <h3 id="badge-interior">Interior-R</h3>
        <p>$40</p>
        <ul>
          <li>Full interior vacuuming</li>
          <li>Dashboard & console cleaning</li>
          <li>Fabric or leather conditioning</li>
          <li>Odor elimination treatment</li>
        </ul>
        <button id="choose-interior">Choose</button>
      </div>

      <div id="card-premium">
        <h3 id="badge-premium">Premium</h3>
        <p>$50</p>
        <ul>
          <li>Everything in the Full Clean</li>
          <li>Clay bar paint decontamination</li>
          <li>Liquid wax for shine & protection</li>
          <li>Deep wheel cleaning</li>
        </ul>
        <button id="choose-premium">Choose</button>
      </div>

      <div id="card-king">
        <h3 id="badge-king">King Wash</h3>
        <p>$80</p>
        <ul>
          <li>Everything in the Premium Detail</li>
          <li>Engine steam cleaning</li>
          <li>Express ceramic coating</li>
          <li>Headlight polishing & sealing</li>
        </ul>
        <button id="choose-king">Choose</button>
      </div>
    </div>
  </div>

  <section class="modal">
  <div class="modal-container">
      <h1>Your Car is Ready to Shine!</h1>
      <p>You've selected Full Clean at King Car Wash. Do you confirm your appointment?</p>
      <label for="date-service">📅 Date:</label>
      <input type="date" id="date-service">
      <label for="date-service"> 🕒 Time:</label>
      <input type="time" id="time-user"> 
      <button id="acept-service">Acept</button>
      <button id="modal-close">Cancel</button>
  </div>
  </section>
`;
  const currentName = document.getElementById("currentName");
  const requestServiceUser = document.getElementById("requestService");
  currentName.innerHTML = "";
  currentName.innerHTML = `Welcome, ${data.inputFirstName}, to`;

  requestServiceUser.addEventListener("click", () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  });

  document.getElementById("user-icon").addEventListener("click", () => {
    console.log("User icon clicked");
    navigateTo("/userProfile",data);
  });

  document.getElementById("logout").addEventListener("click", () => {
    console.log("Logout clicked");

    localStorage.clear();
    sessionStorage.clear();

    alert("You have logged out successfully");
    navigateTo("/");
  });

  //Modal
  const modal = document.querySelector(".modal");
  const closeModal = document.getElementById("modal-close");

  const chooseButtons = document.querySelectorAll("button[id^='choose-']");

  chooseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const serviceName = button.id
        .replace("choose-", "")
        .replace("-", " ")
        .toUpperCase();
      const serviceDisplayName =
        button.parentElement.querySelector("h3")?.textContent || serviceName;

      const modalText = modal.querySelector("p");
      modalText.innerHTML = `You've selected <strong>${serviceDisplayName}</strong> at King Car Wash. Do you confirm your appointment?`;

      modal.classList.add("modal--show");
    });
  });

  closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("modal--show");
  });
}
