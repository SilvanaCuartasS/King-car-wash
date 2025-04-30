export default function renderScreenUserSignUp1() {
    const app = document.getElementById("app");
    app.innerHTML = `
  
    <div id="logo-container">
    <img src="" alt="Logo" id="logo">
    </div>

    <div id="user-begin">
    <h1>Let's beggin!</h1>
    <p>With your basic data</p>

    <input type="text" id="firts-name" placeholder="First Name">
    <input type="text" id="last-name" placeholder="Last Name">
    <input type="email" id="email" placeholder="email">
    <input type="password" id="password" placeholder="password">
    <p>Make sure you create it with more than 6 characters*</p>
    <input type="password" id="confirm password" placeholder="Confirm Password">

    <button id="sign-up">Sign up</button>
    <p>Or sign in with</p>
    <img src="" alt="FacebookIcon" id="FacebookIcon">
    <img src="" alt="igIcon" id="igIcon">
    </div>
      `;
  
      const inputEmail = document.getElementById("email")
      const inputPassword = document.getElementById("password")
      const inputConfirmPassword = document.getElementById("confirm password")
      const inputFirstName = document.getElementById("firts-name")
      const inputLastName = document.getElementById("last-name")

      document.getElementById("sign-up").addEventListener("click", );
  }