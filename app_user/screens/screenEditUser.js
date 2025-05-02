import { navigateTo } from "../app.js";

export default function renderScreenProfile(data) {
  console.log(data); // hecho

  const app = document.getElementById("app");
  app.innerHTML = `
<div id="profile-screen">
  <div id="sidebar">
    <p id="sidebar-profile">PROFILE</p>
    <p id="logout">LOG OUT</p>
    <img src="logo.png" alt="King Wash Track Logo" id="sidebar-logo">
  </div>

  <div id="profile-content">
    <h1 id="currentName"></h1>
    <p id="profile-subtitle">Edit your profile</p>

    <div id="form-container">
      <div id="form-left">
        <label for="first-name">First Name</label>
        <input type="text" id="first-name">

        <label for="last-name">Last Name</label>
        <input type="text" id="last-name">

        <label for="email">Email</label>
        <input type="email" id="email">
      </div>

      <div id="form-right">
        <label for="vehicle">Vehicle</label>
        <select id="vehicle">
          <option value="" disabled>Select vehicle</option>
          <option value="car">Car</option>
          <option value="truck">Truck</option>
        </select>

        <label for="brand">Brand</label>
        <select id="brand">
          <option value="" disabled>Select brand</option>
          <option value="toyota">Toyota</option>
          <option value="renault">Renault</option>
          <option value="kia">KIA</option>
          <option value="chevrolet">Chevrolet</option>
          <option value="mazda">Mazda</option>
        </select>

        <label for="color">Color</label>
        <select id="color">
          <option value="" disabled>Select color</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="gray">Gray</option>
          <option value="silver">Silver</option>
          <option value="red">Red</option>
        </select>

        <label for="year">Year</label>
        <input type="text" id="year">

        <label for="license">License Plate</label>
        <input type="text" id="license">
      </div>
    </div>

    <button id="save-profile">Save Change</button>
  </div>
</div>
`;

  const currentName = document.getElementById("currentName");

  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const vehicle = document.getElementById("vehicle");
  const color = document.getElementById("color");
  const brand = document.getElementById("brand");
  const year = document.getElementById("year");
  const license = document.getElementById("license");

  // Asignación de valores
  firstName.value = data.inputFirstName;
  lastName.value = data.inputLastName;
  email.value = data.inputEmail;
  license.value = data.inputLicense;
  year.value = data.inputYear;

  // Helper para seleccionar valor
  function setSelectValue(selectElement, value) {
    const match = Array.from(selectElement.options).find(
      (option) => option.value.toLowerCase() === value?.toLowerCase()
    );
    if (match) selectElement.value = match.value;
  }

  setSelectValue(vehicle, data.selectElementVehicles);
  setSelectValue(color, data.selectElementColors);
  setSelectValue(brand, data.selectElementBrand);

  currentName.innerHTML = `HI, ${data.inputFirstName}!`;

  document.getElementById("logout").addEventListener("click", () => {
    console.log("Logout clicked");

    localStorage.clear();
    sessionStorage.clear();

    alert("You have logged out successfully");
    navigateTo("/");
  });
}
