export default function renderScreenUserSignUp4(data) {
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

    <h2>Do you have any fragrance preferences for your car?</h2>

    <div id="form">
    <div id="wash-form">
    <input type="checkbox" id="citrus" value="citrus" />
    <label for="citrus">Citrus</label>

    <input type="checkbox" id="herbal" value="herbal" />
    <label for="herbal">Herbal</label>

    <input type="checkbox" id="neutral" value="neutral" />
    <label for="neutral">Neutral/No scent</label>

    <input type="checkbox" id="sweet" value="sweet" />
    <label for="sweet">Sweet</label>
    </div>

    <div id="buttons">
        <button type="button" id="back">Back</button>
        <button type="submit" id="ready">Ready!</button>
    </div>

    </div>
      `;
  
      const inputCitrus = document.getElementById("citrus")
      const inputHerbal = document.getElementById("herbal")
      const inputNeutral = document.getElementById('neutral')
      const inputSweet = document.getElementById('sweet')

      document.getElementById("back").addEventListener("click", );
      document.getElementById("ready").addEventListener("click", );
  }