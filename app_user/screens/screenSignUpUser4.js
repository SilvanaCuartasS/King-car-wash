import { makeRequest, navigateTo } from "../app.js";

export default function renderScreenUserSignUp4(data) {
  console.log(data);

  const app = document.getElementById("app");

  // 👉 Cargar CSS específico
  function loadCSS(href) {
    const existingLink = document.querySelector(`link[href="${href}"]`);
    if (!existingLink) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
  }

  loadCSS("/app_user/styles/screenSignUpUser4.css");

  app.innerHTML = `
    <div id="signup4-screen">
      <div id="logo-container">
        <img src="/app_user/assets/Logo_gris.png" alt="Logo" id="logo">
      </div>

      <div id="user-begin">
        <h1 id="currentName"></h1>
        <p>Let us get to know you better</p>
        <div id="dots">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot active"></div>
        </div>

        <h2>Do you have any fragrance preferences for your car?</h2>

        <div id="form">
          <div id="fragance-form">
            <input type="checkbox" id="citrus" value="Citrus" />
            <label for="citrus">🍋 Citrus</label>

            <input type="checkbox" id="herbal" value="Herbal" />
            <label for="herbal">🌿 Herbal</label>

            <input type="checkbox" id="neutral" value="Neutral/No scent" />
            <label for="neutral">🌫️ Neutral/No scent</label>

            <input type="checkbox" id="sweet" value="Sweet" />
            <label for="sweet">🌸 Sweet</label>
          </div>

          <div id="buttons">
            <button id="backBTN">Back</button>
            <button type="submit" id="ready">Ready!</button>
          </div>
        </div>
      </div>
    </div>
  `;

  const currentName = document.getElementById("currentName");
  currentName.innerHTML = `Hi ${data.inputFirstName.toUpperCase()}!`;

  const checkboxes = document.querySelectorAll("#fragance-form input[type='checkbox']");
  let selectedFragrance = null;

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      checkboxes.forEach((cb) => {
        if (cb !== checkbox) cb.checked = false;
      });
      selectedFragrance = checkbox.checked ? checkbox.value : null;
    });
  });

  document.getElementById("ready").addEventListener("click", async () => {
    if (!selectedFragrance) {
      alert("Please select one fragrance preference.");
      return;
    }

    const fullData = {
      ...data,
      fragrancePreference: selectedFragrance,
    };

    try {
      const response = await makeRequest("/signup-user", "POST", fullData);
      if (response.success) {
        alert("User registered successfully!");
        navigateTo("/dashboardUser", response.currentUserData);
      } else {
        alert(response.message || "Registration failed.");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to the server.");
    }
  });

  document.getElementById("backBTN").addEventListener("click", () => {
    navigateTo("/signUpUser3", data);
  });
}
