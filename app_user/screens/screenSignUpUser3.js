import { navigateTo } from "../app.js";

export default function renderScreenUserSignUp3(data) {
  console.log(data); // Hecho

  const app = document.getElementById("app");
  app.innerHTML = `
      <div id="logo-container">
        <img src="" alt="Logo" id="logo">
      </div>
  
      <div id="user-begin">
        <h1></h1>
        <p>Let us get to know you better</p>
  
        <div id="dots"></div>
  
        <h2>How often do you usually wash your car?</h2>
  
        <div id="form">
          <div id="wash-form">
            <input type="checkbox" id="biweekly" value="biweekly" />
            <label for="biweekly">Biweekly</label>
  
            <input type="checkbox" id="weekly" value="weekly" />
            <label for="weekly">Weekly</label>
  
            <input type="checkbox" id="every-other-day" value="every-other-day" />
            <label for="every-other-day">Every other day</label>
  
            <input type="checkbox" id="dirty" value="dirty" />
            <label for="dirty">When it's very dirty</label>
          </div>
  
          <div id="buttons">
            <button type="submit" id="next">Next</button>
          </div>
        </div>
    `;

  const checkboxes = document.querySelectorAll(
    "#wash-form input[type='checkbox']"
  );
  let selectedValue = null;

  // Permitir solo uno
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
}
