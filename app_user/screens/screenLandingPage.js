import { navigateTo } from "../app.js";

export default function renderScreenUserLanding() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div id="landing-screen">

      <nav>
        <a href="#" id="services">Services</a>
        <a href="#" id="washInsure">Wash Insure</a>
        <img src="#" alt="KingCarWashLogo">
        <a href="#" id="experiences">Experiences</a>
        <a href="#" id="washTrack">Wash Track</a>
      </nav>

      <section id="container">
        <div id="bannerInitial">
          <img src="" alt="" id="bannerIcon">
          <h1>SHINE UP YOUR DAY</h1>
          <p>Schedule your appointment at WashTrack and make your car look brand new. </p>
          <h2>Easy, Fast, and Hassle-Free</h2>
          <button id="bookNow">Book now</button>
        </div>

        <div id="packages">
          <h2>Packages</h2>
          <p>Your car deserves the best care! At King Wash Track</p>
          <p>We offer tailored wash packages to suit your needs, from a quick refresh to a deep, luxurious clean. Select the perfect package and give your car the shine it deserves!</p>
        </div>

        <div id="services">
          <!-- Six cards -->
          ${[
            {
              title: "Express",
              price: "$15",
              desc: "A fast, effective wash to keep your car looking fresh. Includes exterior wash, chamois dry, and tire gloss.",
              features: [
                "Exterior wash with active foam",
                "Microfiber drying",
                "Quick window cleaning",
                "Express tire shine",
              ],
            },
            {
              title: "Wheel-S",
              price: "$25",
              desc: "Focused on your wheels! This package ensures deep cleaning, decontamination, and tire shine for a spotless look.",
              features: [
                "Exterior wash with active foam",
                "Deep wheel steam",
                "Brake dust removal",
                "Tire shine & protection",
              ],
            },
            {
              title: "Full Clean",
              price: "$30",
              desc: "A deeper clean inside and out! Includes interior vacuuming, dashboard cleaning, and plastic protectant.",
              features: [
                "Everything in the Express",
                "Interior vacuuming",
                "Dashboard and console cleaning",
                "Plastic protectant application",
              ],
            },
            {
              title: "Interior-R",
              price: "$40",
              desc: "Restore your car's interior with a deep clean and fresh scent, perfect for everyday maintenance.",
              features: [
                "Full interior vacuuming",
                "Dashboard & console cleaning",
                "Fabric or leather conditioning",
                "Odor elimination treatment",
              ],
            },
            {
              title: "Premium",
              price: "$50",
              desc: "Get a showroom shine! Includes clay bar treatment, premium wax, deep wheel cleaning, and interior fragrance.",
              features: [
                "Everything in the Full Clean",
                "Clay bar paint decontamination",
                "Liquid wax for shine & protection",
                "Deep wheel cleaning",
              ],
            },
            {
              title: "King Wash",
              price: "$80",
              desc: "The ultimate car care! Includes engine steam cleaning, express ceramic coating, and headlight restoration.",
              features: [
                "Everything in the Premium Detail",
                "Engine steam cleaning",
                "Express ceramic coating",
                "Headlight polishing & sealing",
              ],
            },
          ]
            .map(
              (card) => `
            <div class="card">
              <button>${card.title}</button>
              <p class="quality">100% quality assured</p>
              <p class="price">${card.price}</p>
              <p class="description">${card.desc}</p>
              <ul>
                ${card.features.map((f) => `<li>${f}</li>`).join("")}
              </ul>
            </div>
          `
            )
            .join("")}
        </div>

        <div id="banner-spam">
          <img src="" alt="" id="bannerIcon">
          <h1>UNEXPECTED RAIN?</h1>
          <p>At King Car Wash, your wash is secure. With our rain insurance.</p>
          <h3>Get a free re-wash within 48 hours</h3>
        </div>

        <div id="highlights">
          <h2>highlights</h2>
          <p>What Sets Us Apart: An Unwavering Commitment to Your Satisfaction and Your Car's Care</p>
        </div>

        <div id="kingValue">
          <div id="kingValueCard">
              <img src="" alt="" id="kingIconClean">
              <h4>Deep Clean</h4>
              <p>Impeccable interior and exterior</p>
          </div>

          <div id="kingValueCard">
              <img src="" alt="" id="kingIconRain">
              <h4>Total Peace of Mind</h4>
              <p>Rain insurance at no extra cost</p>
          </div>

          <div id="kingValueCard">
              <img src="" alt="" id="kingIconWash">
              <h4>Complete Wash</h4>
              <p>All the services your car needs</p>
          </div>

          <div id="kingValueCard">
              <img src="" alt="" id="kingIconLike">
              <h4>Worry-Free Experience</h4>
              <p>We take care of everything</p>
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
      </section>

    </div>
  `;

  // Event Listeners
  const bookBTN = document.getElementById("bookNow");
  const washTrackA = document.getElementById("washTrack");

  bookBTN.addEventListener("click", () => {
    navigateTo("/");
  });

  washTrackA.addEventListener("click", () => {
    navigateTo("/");
  });
}
