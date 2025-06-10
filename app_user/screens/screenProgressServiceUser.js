import { navigateTo, makeRequest, socket } from "../app.js";

export default function renderScreenUserProgressService(data) {
  console.log(data);

  const app = document.getElementById("app");
  app.innerHTML = `
  <div id="progressService-user">
    <div id="header">
      <img src="" alt="Logo" id="logo" />

      <div id="user-icon-container">
        <img src="" alt="User Icon" id="user-icon" />
    </div>
    

    <div id="progress">
    <h1>YOUR CAR IS IN PROGRESS!</h1>
    <img src="" alt="" id="car-image">

    <div id="icons-progress">
        <svg id="iconReceived" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"/>
        </svg>

        <svg id="iconWashing" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                <path d="M 44.99 8.943 c 0 0 -17.891 20.646 -17.891 33.409 c 0 9.87 8.03 17.9 17.9 17.9 c 9.87 0 17.9 -8.03 17.9 -17.9 C 62.9 29.59 44.99 8.943 44.99 8.943 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                <path d="M 69.196 50.623 c 8.432 1.309 23.869 6.006 20.254 17.324 c -3.992 8.87 -16.561 12.304 -25.27 14.271 c -15.634 2.902 -32.013 2.576 -47.21 -2.369 c -6.6 -2.357 -15.775 -6.354 -16.968 -14.208 c -0.472 -9.905 12.64 -13.565 20.383 -14.908 c -4.295 1.674 -8.506 3.537 -12.156 6.288 c -14.939 11.541 9.597 18.57 19.019 19.78 c 11.824 1.821 24.109 1.871 35.921 -0.064 C 87.337 72.709 97.724 61.362 69.196 50.623 L 69.196 50.623 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                <path d="M 68.502 57.049 c 3.865 0.857 6.901 4.183 3.635 7.897 c -2.381 2.577 -5.438 3.818 -8.571 4.941 c -12.774 4.003 -29.403 3.987 -41.596 -1.876 c -5.923 -2.835 -8.367 -8.799 -0.472 -10.961 c -7.352 5.576 1.109 7.313 6.117 8.358 c 5.664 1.01 11.542 1.305 17.385 1.332 c 5.843 -0.019 11.722 -0.314 17.387 -1.324 c 2.632 -0.511 5.578 -1.133 7.763 -2.561 C 72.982 61.123 70.418 58.551 68.502 57.049 L 68.502 57.049 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
            </g>
            </svg>

            <svg id="iconFinalTouches" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
            </svg>

            
            <svg id="iconAllSet" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd"/>
              </svg>
              
    </div>
    <div id="estadoMensaje" style="margin-top: 1rem; font-weight: bold; font-size: 1.2rem; color: #333;"></div>



    <div id="banner-progressSpam">
        <h3>Shine more, pay less!</h3>
        <p>This week at King Car Wash, your car gets the royal treatment for less!</p>
        <p>30% OFF on premium washes</p>
        <p>Because your ride deserves to shine without breaking the bank.</p>
    </div>
</div>

<div id="readyModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:1000; align-items:center; justify-content:center;">
  <div style="background:#4b4b4b; color:white; padding:2rem; border-radius:12px; max-width:500px; text-align:center; position:relative;">
    <button id="closeModal" style="position:absolute; top:10px; right:15px; background:none; border:none; font-size:1.2rem; color:white; cursor:pointer;">✕</button>
    <h2 style="margin-bottom:1rem;">THANK YOU FOR CHOOSING <br> KING CAR WASH!</h2>
    <p>Your car is ready! You can pick it up and make the payment at any of our physical locations.</p>
    <p>We'd love to hear about your experience! Help us improve by filling out this quick survey:</p>
    <div style="margin-top:1.5rem;">
      <button style="padding:0.5rem 1.5rem; margin-right:1rem; background:white; color:#4b4b4b; border-radius:20px; border:none; font-weight:bold; cursor:pointer;">Survey</button>
      <button id="notNow" style="padding:0.5rem 1.5rem; background:white; color:#4b4b4b; border-radius:20px; border:none; font-weight:bold; cursor:pointer;">Not now</button>
    </div>
  </div>
</div>



    <footer>
        <div id="social&king">
           <img src="" alt="" id="kingIcon">
           <img src="" alt="" id="facebookIcon">
           <img src="" alt="" id="igIcon">
           <img src="" alt="" id="pinterestIcon">
        </div>

        <div id="workingHours">
            <h3>Working Hours:</h3>
            <p>Mon-Sat: 08:30 - 17:00</p>
            <p>Sun: 09:00 - 17:00</p>
        </div>

        <div id="adress">
            <h3>Address::</h3>
            <p>Caney, Cra.83c #25-15, Cali, Valle del Cauca, Colombia</p>
        </div>

        <div id="hitsUp">
            <h3>Hits Up:</h3>
            <p>+57 313 123 4567</p>
            <p>KingWashTrack@gmail.com</p>
        </div>

        <hr>

        <img src="" alt="" id="footerIcon">
        <p>KingWashTrack.com.au. All rights reserved  | designed by ChontaduroGroup</p>
      </footer>
    
    </div>
    
  </section>
`;

  socket.on("estadoServicio", ({ estado }) => { // aquí
    
    console.log("Estado recibido del servidor:", estado);

    // Primero, limpiar cualquier estado activo anterior
    const iconIds = [
      "iconReceived",
      "iconWashing",
      "iconFinalTouches",
      "iconAllSet",
    ];
    iconIds.forEach((id) => {
      const icon = document.getElementById(id);
      if (icon) icon.classList.remove("icon-active");
    });

    const estadoMensaje = document.getElementById("estadoMensaje");
    if (estadoMensaje) {
      let texto = "";
      switch (estado) {
        case "wash":
          texto = "Status changed to: Washed";
          break;
        case "touches":
          texto = "Status changed to: Finishing Touches";
          break;
        case "set":
          document.getElementById("iconAllSet")?.classList.add("icon-active");

          // Mostrar modal
          const modal = document.getElementById("readyModal");
          if (modal) modal.style.display = "flex";
          break;

        default:
          texto = "Unknown status";
      }
      estadoMensaje.textContent = texto;
    }
  });

  document.getElementById("closeModal")?.addEventListener("click", () => {
    document.getElementById("readyModal").style.display = "none";
  });

  document.getElementById("notNow")?.addEventListener("click", () => {
    document.getElementById("readyModal").style.display = "none";
  });

  document.getElementById("notNow")?.addEventListener("click", () => {
    navigateTo("/dashboardUser");
  });

  socket.on("ordenCancelada", (data) => {
    const modal = document.createElement("div");
    modal.innerHTML = `
      <div style="
        position: fixed;
        top: 0; left: 0;
        width: 100vw; height: 100vh;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
      ">
        <div style="background: white; padding: 2rem; border-radius: 8px; max-width: 400px; text-align: center;">
          <h2 style="margin-bottom: 1rem;">Order canceled</h2>
          <p>${data.mensaje}</p>
          <button id="closeModalDash" style="margin-top: 1.5rem; padding: 0.5rem 1rem;">Acept</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById("closeModalDash").onclick = () => {
      modal.remove();
      navigateTo("/dashboardUser");
    };
  });
}
