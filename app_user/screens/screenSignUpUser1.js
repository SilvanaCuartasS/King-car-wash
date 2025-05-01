import { navigateTo } from "../app.js";

export default function renderScreenUserSignUp1() {
  const app = document.getElementById("app");
  app.innerHTML = `
  
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
    <input type="password" id="confirm-password" placeholder="Confirm Password">
    <p id="message"></p>

    <button id="sign-up">Sign up</button>
    <p>Or sign in with</p>
    <img src="" alt="FacebookIcon" id="FacebookIcon">
    <img src="" alt="igIcon" id="igIcon">
    </div>
      `;

  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  const inputConfirmPassword = document.getElementById("confirm-password");
  const inputFirstName = document.getElementById("firts-name");
  const inputLastName = document.getElementById("last-name");
  const message = document.getElementById("message");

  const backBTN = document.getElementById("backBTN");
  const signUpBTN = document
    .getElementById("sign-up")
    .addEventListener("click", signUpUser);

  inputConfirmPassword.addEventListener("input", () => {
    if (inputPassword.value === inputConfirmPassword.value) {
      message.textContent = "Las contraseñas son iguales";
      message.style.color = "green";
    } else {
      message.textContent = "Las contraseñas no coinciden";
      message.style.color = "red";
    }
  });
  
  function signUpUser() {
    if (inputPassword.value !== inputConfirmPassword.value) {
      alert("Las contraseñas no coinciden");
      return;
    }
    navigateTo("/signUpUser2", {
      inputEmail: inputEmail.value,
      inputPassword: inputPassword.value,
      inputFirstName: inputFirstName.value,
      inputLastName: inputLastName.value,
    });
  }

  // async function signUpUser() {
  //   const response = await makeRequest("/login-admin", "POST", {
  //     inputEmail: inputEmail.value,
  //     inputPassword: inputPassword.value,
  //     inputAdminCode: inputAdminCode.value,
  //   });
  //   console.log("response", response);

  //   if (response.success) {
  //     console.log("Login exitoso");
  //     localStorage.setItem("currentAdmin", JSON.stringify(response.currentAdmin)); // Guarda el admin
  //     navigateToAdmin("/dashboardAdmin");
  //   } else {
  //     alert(response.message || "Error al iniciar sesión");
  //   }
  // }

  backBTN.addEventListener("click", () => {
    console.log("click");
    navigateTo("/loginUser1");
  });
}
