import { navigateTo } from "../app.js";

export default function renderScreenUserSignUp1() {
  const app = document.getElementById("app");

  //  Cargar CSS específico
  function loadCSS(href) {
    const existingLink = document.querySelector(`link[href="${href}"]`);
    if (!existingLink) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
  }

  loadCSS("/app_user/styles/screenSignUpUser1.css");

  //  HTML de la pantalla
  app.innerHTML = `
    <div id="signup-user-screen">
      <div id="logo-container">
        <img src="/app_user/assets/logo_gris.png" alt="Logo" id="logo">
      </div>

      <div id="user-begin">
        <button id="backBTN">Back</button>
        <h1>LET'S BEGGIN!</h1>
        <p>With your basic data</p>

        <div class="name-row">
          <input type="text" id="firts-name" placeholder="First Name">
          <input type="text" id="last-name" placeholder="Last Name">
        </div>

        <input type="email" id="email" placeholder="email">

        <div class="password-wrapper">
          <input type="password" id="password" placeholder="password">
          <button type="button" id="togglePassword">Show</button>
        </div>
        <p>Make sure you create it with more than 6 characters*</p>
        <p id="message1"></p>

        <div class="password-wrapper">
          <input type="password" id="confirm-password" placeholder="Confirm Password">
          <button type="button" id="toggleConfirmPassword">Show</button>
        </div>
        <p id="message2"></p>

        <button id="sign-up">Sign up</button>
        </div>

      <div id="modal">
  <div class="modal-content">
    <span class="close" id="close-modal">&times;</span>
    <h2>Hey!</h2>
    <p><strong>Something important to tell you</strong></p>
    <p>We'll notify you about your vehicle via WhatsApp and Gmail</p>
    <p>No spam, we promise! 🥰</p>
    <div class="modal-buttons">
      <button id="modal-ok-1">Ok 👍🏽</button>
      <button id="modal-ok-2">Ok 🤔</button>
    </div>
  </div>
</div>
    </div>
  `;

  //  Variables de campos
  const modal = document.getElementById("modal");
  modal.style.display = "none";

  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  const inputConfirmPassword = document.getElementById("confirm-password");
  const inputFirstName = document.getElementById("firts-name");
  const inputLastName = document.getElementById("last-name");
  const message1 = document.getElementById("message1");
  const message2 = document.getElementById("message2");

  //  Listeners
  document.getElementById("sign-up").addEventListener("click", signUpUser);

  document.getElementById("togglePassword").addEventListener("click", () => {
    const type = inputPassword.type === "password" ? "text" : "password";
    inputPassword.type = type;
    togglePassword.textContent = type === "password" ? "Show" : "Hide";
  });

  document.getElementById("toggleConfirmPassword").addEventListener("click", () => {
    const type = inputConfirmPassword.type === "password" ? "text" : "password";
    inputConfirmPassword.type = type;
    toggleConfirmPassword.textContent = type === "password" ? "Show" : "Hide";
  });

  inputPassword.addEventListener("input", () => {
    if (inputPassword.value.length < 6) {
      message1.textContent = "The password must be at least 6 characters long";
      message1.style.color = "red";
    } else {
      message1.textContent = "Ready!";
      message1.style.color = "green";
    }
  });

  inputConfirmPassword.addEventListener("input", () => {
    if (inputPassword.value === inputConfirmPassword.value) {
      message2.textContent = "The passwords are the same";
      message2.style.color = "green";
    } else {
      message2.textContent = "Passwords don't match";
      message2.style.color = "red";
    }
  });

  // 👉 Función de validación + navegación
  function signUpUser() {
    if (
      inputFirstName.value.trim() === "" ||
      inputLastName.value.trim() === "" ||
      inputEmail.value.trim() === "" ||
      inputPassword.value.trim() === "" ||
      inputConfirmPassword.value.trim() === ""
    ) {
      alert("Please fill in all the fields before signing up.");
      return;
    }

    if (inputPassword.value.length < 6) {
      alert("The password must be at least 6 characters long.");
      return;
    }

    if (inputPassword.value !== inputConfirmPassword.value) {
      alert("Passwords do not match.");
      return;
    }

    modal.style.display = "block";

    const closeModal = document.getElementById("close-modal");
    const okBtn1 = document.getElementById("modal-ok-1");
    const okBtn2 = document.getElementById("modal-ok-2");

    closeModal.onclick = () => {
      modal.style.display = "none";
    };

    okBtn1.onclick = okBtn2.onclick = () => {
      navigateTo("/signUpUser2", {
        inputEmail: inputEmail.value,
        inputPassword: inputPassword.value,
        inputFirstName: inputFirstName.value,
        inputLastName: inputLastName.value,
      });
    };
  }

  document.getElementById("backBTN").addEventListener("click", () => {
    navigateTo("/loginUser1");
  });
}
