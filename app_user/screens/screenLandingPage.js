import { navigateTo } from "../app.js";

function loadCSS(href) {
  const existingLink = document.querySelector(`link[href="${href}"]`);
  if (!existingLink) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }
}
export default function renderScreenUserLanding() {
  const app = document.getElementById("app");

      // 👇 Carga el CSS al renderizar esta pantalla
      loadCSS("/app_user/styles/screenLandingPage.css");

  app.innerHTML = `

  <nav>
      <div class="hamburger" id="menuToggle">&#9776;</div>

      <div class="nav-links">
        <a href="">SERVICES</a>
        <a href="">WASH INSURE</a>
      </div>

      <img src="/app_admin/assets/Logo-user.png" alt="KingCarWashLogo" class="logo" />

      <div class="nav-links">
        <a href="">EXPERIENCES</a>
        <a href="">WASH TRACK</a>
      </div>
    </nav>

        <div class="sidebar" id="sidebar">
      <div class="close-sidebar" id="sidebarClose">&#9776;</div>
      <a href="">SERVICES</a>
      <a href="">WASH INSURE</a>
      <a href="">EXPERIENCES</a>
      <a href="">WASH TRACK</a>
    </div>

    <section id="container">
      <div id="bannerInitial">
        <img src="/app_user/assets/banner-icon.png" alt="BannerIcon" id="bannerIcon" />
        <h1>SHINE UP YOUR DAY</h1>
        <p>
          Schedule your appointment at <span>WashTrack</span><br />
          and make your car look brand new.
        </p>
        <h2>Easy, Fast, and Hassle-Free</h2>
        <button id="bookNow">Book now</button>
      </div>

    <div id="packages">
        <h2>Packages</h2>
        <p>Your car deserves the best care! At <strong>King Wash Track</strong></p>
        <p>We offer tailored wash packages to suit your needs, from a quick refresh to a deep, luxurious clean. Select the perfect package and give your car the <strong>shine it deserves!</strong></p>
    </div>

    <div id="services">
        <div class="card">
          <div class="card-title">Express</div>
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
          <div class="card-title">Wheel-S</div>
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
          <div class="card-title">Full Clean</div>
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
          <div class="card-title">Interior-R</div>
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
          <div class="card-title">Premium</div>
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
          <div class="card-title">King Wash</div>
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
        <img src="/app_user/assets/unexpected-rain.png" alt="" id="bannerIcon">
        <h1>UNEXPECTED RAIN?</h1>
        <p>At King Car Wash, your wash is secure. <br />
        With our rain insurance.</p>
        <h3>Get a free re-wash within 48 hours</h3>
      </div>

      <div id="highlights">
        <h2>Highlights</h2>
        <p><strong>What Sets Us Apart:</strong> An Unwavering Commitment <br />
         to Your Satisfaction and Your Car's Care</p>
      </div>


      <div id="kingValue">
  <div class="kingValueCard">
    <img src="/app_user/assets/deep-clean.png" alt="">
    <div class="textContent">
      <h6>Deep Clean</h6>
      <p>Impeccable interior <br />
      and exterior</p>
    </div>
  </div>

  <div class="kingValueCard">
    <img src="/app_user/assets/total-peace-of-mind.png" alt="">
    <div class="textContent">
      <h6>Total Peace of Mind</h6>
      <p>Rain insurance at <br />
      no extra cost</p>
    </div>
  </div>

  <div class="kingValueCard">
    <img src="/app_user/assets/complete-wash.png" alt="">
    <div class="textContent">
      <h6>Complete Wash</h6>
      <p>All the services your <br />
      car needs</p>
    </div>
  </div>

  <div class="kingValueCard">
    <img src="/app_user/assets/worry-free-experience.png" alt="">
    <div class="textContent">
      <h6>Worry-Free Experience</h6>
      <p>We take care of <br />
      everything</p>
    </div>
  </div>
</div>



      <footer>
      <div class="footer-content">
        <div class="logo-column">
          <img src="/app_admin/assets/logo-user.png" alt="KingWashTrack logo" />
          <div class="social-icons">
            <img src="/app_user/assets/facebook-icon.png" id="FacebookIcon" alt="Facebook">
            <img src="/app_user/assets/instagram-icon.png" id="igIcon" alt="Instagram">
            <img src="/app_user/assets/pinterest-icon.png" id="pinterestIcon" alt="Pinterest">
          </div>
        </div>

        <div class="info-column">
          <h4>Working Hours:</h4>
          <p>Mon-Sat: 08:30 - 17:00</p>
          <p>Sun: 09:00 - 17:00</p>
        </div>

        <div class="info-column">
          <h4>Address:</h4>
          <p>Caney, Cra.83c #25-15,</p>
          <p>Cali, Valle del Cauca, Colombia</p>
        </div>

        <div class="info-column">
          <h4>Hits Up:</h4>
          <p>+57 313 123 4567</p>
          <p>KingWashTrack@gmail.com</p>
        </div>
      </div>

      <div class="copyright">
        © KingWashTrack.com.au. All rights reserved | designed by ChontaduroGroup
      </div>
    </footer>
      
</section>
    `;

  const bookBTN = document.getElementById("bookNow");
  //const washTrackA = document.getElementById("washTrack");//
  const menuToggle = document.getElementById("menuToggle"); 
  const sidebar = document.getElementById("sidebar");
  const sidebarClose = document.getElementById("sidebarClose");
  

  bookBTN.addEventListener("click", () => {
    console.log("click");

    navigateTo("/");
  });

  //washTrackA.addEventListener("click", () => {
   // console.log("click");

    //navigateTo("/");
  //});
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  sidebarClose.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
}