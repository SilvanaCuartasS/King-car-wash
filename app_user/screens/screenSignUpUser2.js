export default function renderScreenUserSignUp2(data) {
  console.log(data); // Hecho

  const app = document.getElementById("app");
  app.innerHTML = `
  
    <div id="logo-container">
    <img src="" alt="Logo" id="logo">
    </div>

    <div id="user-begin">
    <h1></h1>
    <p>Let us get to know you better</p>

    <div id="dots"></div>

    <h2>Details of your vehicle</h2>

    <div id="form">
   
        <select id="vehicles" name="vehicle" required>
          <option value="car">Car</option>
          <option value="truck">Truck</option>
        </select>

 
      <select id="brand" name="brand" required>
          <option value="toyota">Toyota</option>
          <option value="renault">Renault</option>
          <option value="kia">KIA</option>
          <option value="chevrolet">Chevrolet</option>
          <option value="mazda">Mazda</option>
          </select>
   

        <select id="colors" name="color" required>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="gray">Gray</option>
          <option value="silver">Silver</option>
          <option value="red">Red</option>
        </select>

      <div id="inputs">
      <input id="year" type="text" name="year" placeholder="Year" required />
      <input id="license" type="text" name="license_plate" placeholder="License plate" required />
      </div>
      
      <div id="buttons">
        <button type="button" id="back">Back</button>
        <button type="submit" id="next">Next</button>
      </div>
    </div>
      `;

  const inputYear = document.getElementById("year");
  const inputLicense = document.getElementById("license");
  const selectElementVehicles = document.getElementById("vehicles");
  const selectElementBrand = document.getElementById("brand");
  const selectElementColors = document.getElementById("colors");

  document.getElementById("back").addEventListener("click");
  document.getElementById("next").addEventListener("click");

  function signUpUser2() {
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
}
