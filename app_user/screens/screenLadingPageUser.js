import { navigateTo } from "../app.js";

export default function renderScreenUserLanding() {
  const app = document.getElementById("app");
  app.innerHTML = `

    <nav>
    <a href="">Services</a>
    <a href="">Wash Insure</a>
    <img src="" alt="KingCarWashLogo">
    <a href="">Experiences</a>
    <a href="">Wash Track</a>
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
        <div class="card">
          <button>Express</button>
          <p class="quality">100% quality assured</p>
          <p class="price">$15</p>
          <p class="description">A fast, effective wash to keep your car looking fresh. Includes exterior wash, chamois dry, and tire gloss.</p>
          <ul>
            <li>Exterior wash with active foam</li>
            <li>Microfiber drying</li>
            <li>Quick window cleaning</li>
            <li>Express tire shine</li>
          </ul>
        </div>
      
        <div class="card">
          <button>Wheel-S</button>
          <p class="quality">100% quality assured</p>
          <p class="price">$25</p>
          <p class="description">Focused on your wheels! This package ensures deep cleaning, decontamination, and tire shine for a spotless look.</p>
          <ul>
            <li>Exterior wash with active foam</li>
            <li>Deep wheel steam</li>
            <li>Brake dust removal</li>
            <li>Tire shine & protection</li>
          </ul>
        </div>
      
        <div class="card">
          <button>Full Clean</button>
          <p class="quality">100% quality assured</p>
          <p class="price">$30</p>
          <p class="description">A deeper clean inside and out! Includes interior vacuuming, dashboard cleaning, and plastic protectant.</p>
          <ul>
            <li>Everything in the Express</li>
            <li>Interior vacuuming</li>
            <li>Dashboard and console cleaning</li>
            <li>Plastic protectant application</li>
          </ul>
        </div>
      
        <div class="card">
          <button>Interior-R</button>
          <p class="quality">100% quality assured</p>
          <p class="price">$40</p>
          <p class="description">Restore your car's interior with a deep clean and fresh scent, perfect for everyday maintenance.</p>
          <ul>
            <li>Full interior vacuuming</li>
            <li>Dashboard & console cleaning</li>
            <li>Fabric or leather conditioning</li>
            <li>Odor elimination treatment</li>
          </ul>
        </div>
      
        <div class="card">
          <button>Premium</button>
          <p class="quality">100% quality assured</p>
          <p class="price">$50</p>
          <p class="description">Get a showroom shine! Includes clay bar treatment, premium wax, deep wheel cleaning, and interior fragrance.</p>
          <ul>
            <li>Everything in the Full Clean</li>
            <li>Clay bar paint decontamination</li>
            <li>Liquid wax for shine & protection</li>
            <li>Deep wheel cleaning</li>
          </ul>
        </div>
      
        <div class="card">
          <button>King Wash</button>
          <p class="quality">100% quality assured</p>
          <p class="price">$80</p>
          <p class="description">The ultimate car care! Includes engine steam cleaning, express ceramic coating, and headlight restoration.</p>
          <ul>
            <li>Everything in the Premium Detail</li>
            <li>Engine steam cleaning</li>
            <li>Express ceramic coating</li>
            <li>Headlight polishing & sealing</li>
          </ul>
        </div>
      </div>

      <div id="banner-spam">
        <img src="" alt="" id="bannerIcon">
        <h1>UNEXPECTED RAIN?</h1>
        <p>At King Car Wash, your wash is secure. 
        With our rain insurance.</p>
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
    `;

  const bookBTN = document.getElementById("bookNow");

  bookBTN.addEventListener("click", () => {
    console.log("click");

    navigateTo("/screenUser1");
  });
}
