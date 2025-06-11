import { makeRequest, navigateTo } from "../app.js";

export default function renderScreenUserLogin1() {
  const app = document.getElementById("app");

  // Cargar CSS específico de esta pantalla
  function loadCSS(href) {
    const existingLink = document.querySelector(`link[href="${href}"]`);
    if (!existingLink) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
  }

  loadCSS("/app_user/styles/screenLoginUser.css");

  // Renderizado HTML
  app.innerHTML = `
    <div id="login-user-screen">
      <div id="logo-container">
        <img src="/app_user/assets/logo-king.png" alt="Logo" id="logo" />
      </div>

      <div id="login-container">
        <h1>LOG IN</h1>
        <p>Welcome back!</p>

        <div class="input-row">
          <img src="/app_user/assets/user-icon.png" alt="userIcon" />
          <input type="email" id="email" placeholder="Email" />
        </div>

        <div class="input-row">
          <img src="/app_user/assets/lock-icon.png" alt="lockIcon" />
          <input type="password" id="password" placeholder="Password" />
        </div>

        <div class="extra-actions">
          <p>Forgot password? Remember in <span class="highlight">HERE</span></p>
        </div>

        <button id="log-in">Log In</button>

        <p class="or-sign">Or sign in with</p>
        <div class="social-icons">
          <img src="/app_user/assets/facebook-icon.png" alt="Facebook" />
          <img src="/app_user/assets/instagram-icon.png" alt="Instagram" />
        </div>

        <p class="register-msg">
          Haven’t registered, What are you waiting for?
          <span id="sign-up" class="highlight">Sign up</span>
        </p>
      </div>
    </div>
  `;

  // 👉 Lógica funcional
  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");

  document.getElementById("log-in").addEventListener("click", loginService);

  async function loginService() {
    const response = await makeRequest("/login-service", "POST", {
      inputEmail: inputEmail.value,
      inputPassword: inputPassword.value,
    });

    if (response.success) {
      const userName = response.currentUserData?.inputFirstName || "user";
      alert(`Welcome back, ${userName}!`);
      navigateTo("/dashboardUser", response.currentUserData);
    } else {
      alert(response.message || "Login failed.");
    }
  }

  document.getElementById("sign-up").addEventListener("click", () => {
    navigateTo("/signUpUser1");
  });
}
