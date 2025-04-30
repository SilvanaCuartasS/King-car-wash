import { makeRequest, navigateTo } from "../app.js";

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
    
    <a href="#" id="sign-up" >Haven't registered, What are you waiting for?  Sign up</a>
    </div>
      
      `;

  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  

  const log = document.getElementById("log-in").addEventListener("click",loginService);
  const sign = document.getElementById("sign-up");

  async function loginService() {
    const response = await makeRequest("/login-service", "POST", {inputEmail: inputEmail.value, inputPassword:inputPassword.value});
    console.log("response", response);
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
}
