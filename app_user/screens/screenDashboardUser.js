import { navigateTo, makeRequest } from "../app.js";

export default function renderScreenDashboardUser(data) {
  console.log("data que llegó del sign up: ", data);

  

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
      <div class="card-express">
        <h3 id="badge-express">Express</h3>
        <p>$15</p>
        <ul>
          <li>Exterior wash with active foam</li>
          <li>Microfiber dry</li>
          <li>Quick window cleaning</li>
          <li>Express tire shine</li>
        </ul>
        <button id="choose-express" data-id="2df221c7-ec41-43aa-b8e3-15a05e5d4f66">Choose</button>
      </div>

      <div class="card-wheel">
        <h3 id="badge-wheel">Wheel-S</h3>
        <p>$25</p>
        <ul>
          <li>Exterior wash with active foam</li>
          <li>Deep wheel cleaning</li>
          <li>Brake dust removal</li>
          <li>Tire shine & protection</li>
        </ul>
        <button id="choose-wheel" data-id="b4a48623-d689-4206-8c96-026880cbac76">Choose</button>
      </div>

      <div class="card-full">
        <h3 id="badge-full">Full Clean</h3>
        <p>$30</p>
        <ul>
          <li>Everything in the Express</li>
          <li>Interior vacuuming</li>
          <li>Dashboard and console cleaning</li>
          <li>Plastic protectant application</li>
        </ul>
        <button id="choose-full" data-id="273b8172-6015-4729-a192-eb4d59c54d13">Choose</button>
      </div>

      <div class="card-interior">
        <h3 id="badge-interior">Interior-R</h3>
        <p>$40</p>
        <ul>
          <li>Full interior vacuuming</li>
          <li>Dashboard & console cleaning</li>
          <li>Fabric or leather conditioning</li>
          <li>Odor elimination treatment</li>
        </ul>
        <button id="choose-interior" data-id="76af8541-59c7-421c-ad69-7a323bcd0c8b">Choose</button>
      </div>

      <div class="card-premium">
        <h3 id="badge-premium">Premium</h3>
        <p>$50</p>
        <ul>
          <li>Everything in the Full Clean</li>
          <li>Clay bar paint decontamination</li>
          <li>Liquid wax for shine & protection</li>
          <li>Deep wheel cleaning</li>
        </ul>
        <button id="choose-premium" data-id="cdb88716-d30a-4a11-b866-8e1e1a6ec8d6">Choose</button>
      </div>

      <div class="card-king">
        <h3 id="badge-king">King Wash</h3>
        <p>$80</p>
        <ul>
          <li>Everything in the Premium Detail</li>
          <li>Engine steam cleaning</li>
          <li>Express ceramic coating</li>
          <li>Headlight polishing & sealing</li>
        </ul>
        <button id="choose-king" data-id="369aec00-f7bc-4bec-b80f-67247da3c32f">Choose</button>
      </div>
    </div>
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
  navigateTo("/userProfile", data);
});

document.getElementById("logout").addEventListener("click", () => {
  console.log("Logout clicked");

  localStorage.clear();
  sessionStorage.clear();

  alert("You have logged out successfully");
  navigateTo("/");
});

// Modal
const modal = document.querySelector(".modal");
const closeModal = document.getElementById("modal-close");

const timeServiceInput = document.getElementById("time-user");
const dateServiceInput = document.getElementById("date-service");

const chooseButtons = document.querySelectorAll("button[id^='choose-']");

chooseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const serviceId = button.dataset.id; // Id del servicio
    const serviceDisplayName =
      button.parentElement.querySelector("h3")?.textContent || "Selected Service";

    const modalText = modal.querySelector("p");
    modalText.innerHTML = `You've selected <strong>${serviceDisplayName}</strong> at King Car Wash. Do you confirm your appointment?`;

    // Guardar el ID del servicio en el modal como un atributo data
    modal.dataset.serviceId = serviceId;

    modal.classList.add("modal--show");
  });
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal--show");
});

// Confirmación de servicio
document.getElementById("acept-service").addEventListener("click", async () => {

  const serviceDisplayName = document.querySelector(".modal p strong").textContent;
  const serviceId = modal.dataset.serviceId; // ID guardado
  const date = dateServiceInput.value;
  const time = timeServiceInput.value;
  
  if (!date || !time) {
    alert("Por favor selecciona una fecha y hora");
    return;
  }

  const serviceData = {
    id: data.id,
    id_user: data.id,
    id_service: serviceId, // UUID del servicio desde Supabase
    date_book: dateServiceInput.value,
    time_book: timeServiceInput.value,
    created_at: new Date().toISOString(),
  };

  try {
    const response = await makeRequest("/new-service", "POST", serviceData);
    
    console.log("response", response);

    if (response.success) {
      console.log("Servicio creado:", response.currentServiceData);
      alert("Service booked successfully!");
      modal.classList.remove("modal--show");
     
      navigateTo("/userProgressService", response.currentServiceData);
    } else {
      alert(response.message || "Error booking service");
    }
  } catch (error) {
    console.error(error);
    alert("Error connecting to the server.");
  }
});
}
