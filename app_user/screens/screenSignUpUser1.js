import { navigateTo } from "../app.js";

export default function renderScreenUserSignUp1() {
  const app = document.getElementById("app");
  app.innerHTML = `

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

    <div id="logo-container">
    <img src="" alt="Logo" id="logo">
    </div>

    <div id="user-begin">
    <button id="backBTN">Back</button>
    <h1>Let's beggin!</h1>
    <p>With your basic data</p>

    <input type="text" id="firts-name" placeholder="First Name">
    <input type="text" id="last-name" placeholder="Last Name">
    <input type="email" id="email" placeholder="email">
    <input type="password" id="password" placeholder="password">
    <p>Make sure you create it with more than 6 characters*</p>
    <p id="message1"></p>
    <input type="password" id="confirm-password" placeholder="Confirm Password">
    <p id="message2"></p>

    <button id="sign-up">Sign up</button>
    <p>Or sign in with</p>
    <img src="" alt="FacebookIcon" id="FacebookIcon">
    <img src="" alt="igIcon" id="igIcon">
    </div>
      `;

  const modal = document.getElementById("modal");
  modal.style.display = "none";

  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  const inputConfirmPassword = document.getElementById("confirm-password");
  const inputFirstName = document.getElementById("firts-name");
  const inputLastName = document.getElementById("last-name");
  const message1 = document.getElementById("message1");
  const message2 = document.getElementById("message2");

  const backBTN = document.getElementById("backBTN");
  const signUpBTN = document
    .getElementById("sign-up")
    .addEventListener("click", signUpUser);

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

  function signUpUser() {
  // Validación: verificar si algún campo está vacío
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

  backBTN.addEventListener("click", () => {
    console.log("click");
    navigateTo("/loginUser1");
  });
}
