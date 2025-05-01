export default function renderScreenAdminLogin() {
    const app = document.getElementById("app");
    app.innerHTML = `
  
      <div id="container">
      <h1>LOG IN ADMIN</h1>
      <h3>Welcome back!</h3>

      <img src="" alt="adminIcon" id="adminIcon">
      <input type="email" id="email-admin" placeholder="email">

      <img src="" alt="passwordIcon" id="passwordIcon">
      <input type="password" id="password-admin" placeholder="Password">

      <img src="" alt="adminCodeIcon" id="code-icon">
      <input type="text" id="code-admin" placeholder="Admin code">

      <button id="logInAdmin">Log in</button>
      </div>
      `;
  
  }
  