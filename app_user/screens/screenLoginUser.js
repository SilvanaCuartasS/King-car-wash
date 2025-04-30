export default function renderScreenUserLogin1() {
    const app = document.getElementById("app");
    app.innerHTML = `
    
    <div id="logo-container">
    <img src="" alt="Logo" id="logo">
    </div>

    <div id="login-container">
    <h1>LOG IN</h1>
    <img src="" alt="userIcon" id="userIcon">
    <input type="email" id="email" placeholder="email">
    <img src="" alt="lockIcon" id="lockIcon">
    <input type="password" id="password" placeholder="password">
    <p>Forgot password? Remember in HERE</p>

    <button id="log-in">Log in</button>
    <p>Or sign in with</p>
    <img src="" alt="FacebookIcon" id="FacebookIcon">
    <img src="" alt="igIcon" id="igIcon">
    
    <p id="sign-up" >Haven't registered, What are you waiting for?  Sign up</p>
    </div>
      
      `;
  
    const inputEmail = document.getElementById("email")
    const inputPassword = document.getElementById("password")

    document.getElementById("log-in").addEventListener("click",);
    document.getElementById("sign-up").addEventListener("click", );
  
  }