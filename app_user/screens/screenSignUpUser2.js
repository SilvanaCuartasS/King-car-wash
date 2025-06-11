import { navigateTo } from "../app.js";

export default function renderScreenUserSignUp2(data) {
  console.log(data);

  const app = document.getElementById("app");

  // 👉 Cargar el CSS específico de esta pantalla
  function loadCSS(href) {
    const existingLink = document.querySelector(`link[href="${href}"]`);
    if (!existingLink) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
  }

  loadCSS("/app_user/styles/screenSignUpUser2.css");

  // 👉 Estructura HTML
  app.innerHTML = `
    <div id="signup2-screen">
      <div id="logo-container">
        <img src="/app_user/assets/Logo_gris.png" alt="Logo" id="logo">
      </div>

      <div id="user-begin">
        <h1 id="currentName"></h1>
        <p>Let us get to know you better</p>
        <div id="dots"></div>

        <h2>Details of your vehicle</h2>

        <div id="form">
          <select id="vehicles" name="vehicle" required>
            <option value="" disabled selected>Select vehicle</option>
            <option value="car">Car</option>
            <option value="truck">Truck</option>
          </select>

          <select id="brand" name="brand" required>
            <option value="" disabled selected>Select brand</option>
            <option value="toyota">Toyota</option>
            <option value="renault">Renault</option>
            <option value="kia">KIA</option>
            <option value="chevrolet">Chevrolet</option>
            <option value="mazda">Mazda</option>
          </select>

          <select id="colors" name="color" required>
            <option value="" disabled selected>Select color</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="gray">Gray</option>
            <option value="silver">Silver</option>
            <option value="red">Red</option>
          </select>

          <div id="inputs">
            <input id="year" type="text" name="year" placeholder="Year" required />
            <input id="license" type="text" name="license_plate" placeholder="License plate" required />
          </div>

          <div id="buttons">
            <button type="submit" id="backBTN">Back</button>
            <button type="submit" id="next">Next</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // 👉 Lógica funcional
  const inputYear = document.getElementById("year");
  const inputLicense = document.getElementById("license");
  const selectElementVehicles = document.getElementById("vehicles");
  const selectElementBrand = document.getElementById("brand");
  const selectElementColors = document.getElementById("colors");
  const currentName = document.getElementById("currentName");
  currentName.innerHTML = `Hi ${data.inputFirstName.toUpperCase()}!`;

  inputLicense.addEventListener("input", () => {
    inputLicense.value = inputLicense.value.toUpperCase();
  });

  document.getElementById("next").addEventListener("click", signUpUser2);

  function signUpUser2() {
    if (
      inputYear.value === "" ||
      inputLicense.value === "" ||
      selectElementVehicles.value === "" ||
      selectElementBrand.value === "" ||
      selectElementColors.value === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    navigateTo("/signUpUser3", {
      ...data,
      inputYear: inputYear.value,
      inputLicense: inputLicense.value,
      selectElementVehicles: selectElementVehicles.value,
      selectElementBrand: selectElementBrand.value,
      selectElementColors: selectElementColors.value,
    });
  }

  document.getElementById("backBTN").addEventListener("click", () => {
    navigateTo("/signUpUser1");
  });
}
