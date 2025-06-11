import { navigateTo } from "../app.js";

export default function renderScreenUserSignUp3(data) {
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

  loadCSS("/app_user/styles/screenSignUpUser3.css");

  // 👉 Estructura HTML con ID aislado
  app.innerHTML = `
    <div id="signup3-screen">
      <div id="logo-container">
        <img src="/app_user/assets/Logo_gris.png" alt="Logo" id="logo" />
      </div>

      <div id="user-begin">
        <button id="backBTN">Back</button>
        <h1 id="currentName"></h1>
        <p>Let us get to know you better</p>

        <div id="dots">
          <span class="dot"></span>
          <span class="dot active"></span>
          <span class="dot"></span>
        </div>

        <h2>How often do you usually wash your car?</h2>

        <div id="form">
          <div id="wash-form">
            <label>
              <input type="checkbox" id="biweekly" value="biweekly" />
              Biweekly
            </label>
            <label>
              <input type="checkbox" id="weekly" value="weekly" />
              Weekly
            </label>
            <label>
              <input type="checkbox" id="every-other-day" value="every-other-day" />
              Every other day
            </label>
            <label>
              <input type="checkbox" id="dirty" value="dirty" />
              When it’s very dirty
            </label>
          </div>

          <div id="buttons">
            <button type="button" id="back">Back</button>
            <button type="submit" id="next">Next</button>
          </div>
        </div>
      </div>
    </div>
  `;

  const currentName = document.getElementById("currentName");
  currentName.textContent = `Hi ${data.inputFirstName.toUpperCase()}!`;

  const checkboxes = document.querySelectorAll("#wash-form input[type='checkbox']");
  let selectedValue = null;

  // ✅ Asegurar solo una opción seleccionada
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      checkboxes.forEach((cb) => {
        if (cb !== checkbox) cb.checked = false;
      });
      selectedValue = checkbox.checked ? checkbox.value : null;
    });
  });

  document.getElementById("next").addEventListener("click", () => {
    if (!selectedValue) {
      alert("Please select one option before continuing.");
      return;
    }

    navigateTo("/signUpUser4", {
      ...data,
      washFrequency: selectedValue,
    });
  });

  document.getElementById("back").addEventListener("click", () => {
    navigateTo("/signUpUser2", data);
  });

  document.getElementById("backBTN").addEventListener("click", () => {
    navigateTo("/signUpUser2", data);
  });
}
