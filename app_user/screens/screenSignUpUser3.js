export default function renderScreenUserSignUp3() {
    const app = document.getElementById("app");
    app.innerHTML = `
  
    <div id="logo-container">
    <img src="" alt="Logo" id="logo">
    </div>

    <div id="user-begin">
    <h1></h1>
    <p>Let us get to know you better</p>

    <div id="dots"></div>

    <h2>How often do you usually wash your car?</h2>

    <div id="form">
    <div id="wash-form">
    <input type="checkbox" id="biweekly" value="biweekly" />
    <label for="biweekly">Biweekly</label>

    <input type="checkbox" id="weekly" value="weekly" />
    <label for="weekly">Weekly</label>

    <input type="checkbox" id="every-other-day" value="every-other-day" />
    <label for="every-other-day">Every other day</label>

    <input type="checkbox" id="dirty" value="dirty" />
    <label for="dirty">When it's very dirty</label>
    </div>

    <div id="buttons">
        <button type="button" id="back">Back</button>
        <button type="submit" id="next">Next</button>
    </div>

    </div>
      `;
  
      const inputBiweekly = document.getElementById("biweekly")
      const inputWeekly = document.getElementById("weekly")
      const inputEveryOtherDay = document.getElementById('every-other-day')
      const inputDirty = document.getElementById('dirty')

      document.getElementById("back").addEventListener("click", );
      document.getElementById("next").addEventListener("click", );
  }