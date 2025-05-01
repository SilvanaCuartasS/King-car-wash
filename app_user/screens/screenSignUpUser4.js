import { makeRequest, navigateTo } from "../app.js";

export default function renderScreenUserSignUp4(data) {
  console.log(data);

  const app = document.getElementById("app");
  app.innerHTML = `
    <div id="logo-container">
      <img src="" alt="Logo" id="logo">
    </div>

    <div id="user-begin">
    <h1 id="currentName"></h1>
      <p>Let us get to know you better</p>

      <div id="dots"></div>

      <h2>Do you have any fragrance preferences for your car?</h2>

      <div id="form">
        <div id="fragance-form">
          <input type="checkbox" id="citrus" value="citrus" />
          <label for="citrus">Citrus</label>

          <input type="checkbox" id="herbal" value="herbal" />
          <label for="herbal">Herbal</label>

          <input type="checkbox" id="neutral" value="neutral" />
          <label for="neutral">Neutral/No scent</label>

          <input type="checkbox" id="sweet" value="sweet" />
          <label for="sweet">Sweet</label>
        </div>

        <div id="buttons">
          <button type="submit" id="ready">Ready!</button>
        </div>
      </div>
  `;

  const currentName = document.getElementById("currentName");
  currentName.innerHTML = data.inputFirstName;

  //Intentar agregar le boton de back y que permita cambiar los datos colocados antes

  const checkboxes = document.querySelectorAll(
    "#fragance-form input[type='checkbox']"
  );
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
        
      console.log("response", response);

        if (response.success) {
        console.log("response", response.currentUserData);
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
}