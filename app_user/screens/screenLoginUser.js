import { makeRequest, navigateTo } from "../app.js";

export default function renderScreenUserLogin1() {
  const app = document.getElementById("app");
  app.innerHTML = `
    
    <div id="logo-container">
    <img src="" alt="Logo" id="logo">
    </div>

    <div id="login-container">
    <button id="backBTN">Back</button>
    <h1>LOG IN</h1>
    <img src="" alt="userIcon" id="userIcon">
    <input type="email" id="email" placeholder="email">
    <img src="" alt="lockIcon" id="lockIcon">

      <div class="password-wrapper">
        <input type="password" id="password" placeholder="password">
        <button type="button" id="togglePassword">Show</button>
      </div>
    <p>Forgot password? Remember in HERE</p>

    <button id="log-in">Log in</button>
    <p>Or sign in with</p>
    <img src="" alt="FacebookIcon" id="FacebookIcon">
    <img src="" alt="igIcon" id="igIcon">
    
    <a href="#" id="sign-up" >Haven't registered, What are you waiting for?  Sign up</a>
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
