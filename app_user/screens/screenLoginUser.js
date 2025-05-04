import { makeRequest, navigateTo } from "../app.js";

function loadCSS(href) {
  const existingLink = document.querySelector(`link[href="${href}"]`);
  if (!existingLink) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }
}

export default function renderScreenUserLogin1() {
  const app = document.getElementById("app");

    // 👇 Carga el CSS al renderizar esta pantalla
    loadCSS("/app_user/styles/screenLoginUser.css");

    app.innerHTML = `
<div id="login-wrapper">
  <div id="logo-container">
    <img src="/app_user/assets/logo-king.png" alt="Logo" id="logo">
  </div>

  <div id="login-container">
    <button id="backBTN">Back</button>
    <h1>LOG IN</h1>
    <p>Welcome back!</p>

    <div class="input-group">
      <img src="/app_user/assets/user-icon.png" alt="userIcon">
      <input type="email" id="email" placeholder="Email">
    </div>

    <div class="input-group password-wrapper">
      <img src="/app_user/assets/lock-icon.png" alt="lockIcon">
      <input type="password" id="password" placeholder="Password">
      <button type="button" id="togglePassword">Show</button>
    </div>

    <p>Forgot password? Remember in <a href="#">HERE</a></p>
    <button id="log-in">Log in</button>
    <p>Or sign in with</p>
    <div class="social-icons">
      <img src="/app_user/assets/facebook-icon.png" id="FacebookIcon" alt="Facebook">
      <img src="/app_user/assets/instagram-icon.png" id="igIcon" alt="Instagram">
    </div>
    <div id="sign-up-text">
  <span>Haven’t registered, What are you waiting for?</span>
  <a href="#" id="sign-up">Sign up</a>
</div>
  </div>
</div>
`;

  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");
  const backBTN = document.getElementById("backBTN");
  const sign = document.getElementById("sign-up");

  togglePassword.addEventListener("click", () => {
    const type =
      inputPassword.getAttribute("type") === "password" ? "text" : "password";
    inputPassword.setAttribute("type", type);
    togglePassword.textContent = type === "password" ? "Show" : "Hide";
  });

  document.getElementById("log-in").addEventListener("click", loginService);

  async function loginService() {
    const response = await makeRequest("/login-service", "POST", {
      inputEmail: inputEmail.value,
      inputPassword: inputPassword.value,
    });
    console.log("response", response);
    if (response.success) {
      const userName = response.currentUserData?.inputFirstName || "user";
      alert(`Welcome back, ${userName}!`);      
      navigateTo("/dashboardUser", response.currentUserData);
    } else {
      alert(response.message || "Login failed.");
    }
  }

  // function registroUsuarios ()
  // {
  //     fetch ("http://localhost:5051/registro/" ,{
  //         method: "POST",
  //         headers: {  "Content-Type": "application/json"},
  //         body: JSON.stringify({
  //           image:imageRegistroInput.value,
  //           user: userInput.value,
  //           name: nameInput.value,
  //           password: passwordInput.value })
  //         })
  //          .then((response)=> response.json())
  //          .then((data) => {
  //             alert(data.message);
  //             mostrarPantalla("inicio");
  //           })
  //           .catch((error) => console.error("Error:", error));

  // }

  sign.addEventListener("click", () => {
    console.log("click");
    navigateTo("/signUpUser1");
  });

  backBTN.addEventListener("click", () => {
    console.log("click");
    navigateTo("/");
  });
}
