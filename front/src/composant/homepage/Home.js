import React,{useEffect} from 'react'
import './home.css'
import ListSpecialite from '../homepage/specialite/ListSpecialite';
import { Link } from 'react-router-dom';
const Pro = () => {
    // Sticky Navigation Menu Js
    useEffect(() => {
        // Wrap your code in useEffect to ensure it runs after the component has mounted
        let nav = document.querySelector("nav");
        let scrollBtn = document.querySelector(".scroll-button a");
    
        if (nav && scrollBtn) {
          window.onscroll = function() {
            if (document.documentElement.scrollTop > 20) {
              nav.classList.add("sticky");
              scrollBtn.style.display = "block";
            } else {
              nav.classList.remove("sticky");
              scrollBtn.style.display = "none";
            }
          }
    
          // Rest of your code...
    
          // Side Navigation Menu Js
          let body = document.querySelector("body");
          let navBar = document.querySelector(".navbar");
          let menuBtn = document.querySelector(".menu-btn");
          let cancelBtn = document.querySelector(".cancel-btn");
    
          if (body && navBar && menuBtn && cancelBtn) {
            menuBtn.onclick = function() {
              navBar.classList.add("active");
              menuBtn.style.opacity = "0";
              menuBtn.style.pointerEvents = "none";
              body.style.overflowX = "hidden";
              scrollBtn.style.pointerEvents = "none";
            }
    
            cancelBtn.onclick = function() {
              navBar.classList.remove("active");
              menuBtn.style.opacity = "1";
              menuBtn.style.pointerEvents = "auto";
              body.style.overflowX = "auto";
              scrollBtn.style.pointerEvents = "auto";
            }
    
            // Rest of your code...
    
            // Side Navigation Bar Close While We click On Navigation Links
            let navLinks = document.querySelectorAll(".menu li a");
            for (var i = 0; i < navLinks.length; i++) {
              navLinks[i].addEventListener("click", function() {
                navBar.classList.remove("active");
                menuBtn.style.opacity = "1";
                menuBtn.style.pointerEvents = "auto";
              });
            }
          }
        }
    
        // Ensure to clean up event listeners when the component unmounts
        return () => {
          window.onscroll = null;
          // Additional cleanup if needed
        };
      }, []);
  return (
    <div className='body'>
    <div className="scroll-button">
      <a href="#home">
        <i className="fas fa-arrow-up" />
      </a>
    </div>
    {/* navigation menu */}
    <nav className='nav'>
      <div className="navbar">
        <div className="logo">
          {/* <img src="https://th.bing.com/th/id/OIP.DH4nETbcth5lFh4T1Gl82gAAAA?rs=1&pid=ImgDetMain" 
          style={{height:'70px',width:'100px'}} /> */}
          <a href="#">Rendez-vous Medical.</a>
        </div>
        <ul className="menu">
          <li>
          <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Speciality medical</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className='dropdown'>
         <a >se connecter</a>
         <div className='dropdown-content'>
         <ul>
           <li><Link to='/login/User'> Patient</Link></li>
           <li><Link to='/login/Doctor'> Doctor</Link></li>
         </ul>
         </div>
        </li>
          <div className="cancel-btn">
            <i className="fas fa-times" />
          </div>
        </ul>
        <div className="media-icons">
          <a href="#">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
      <div className="menu-btn">
        <i className="fas fa-bars" />
      </div>
    </nav>
    {/* Home Section Start */}
    <section className="home" id="home">
      <div className="home-content">
        <div className='log'>
        <h1 > Bienvenue à systéme de rendez-vous medical</h1>
       </div> 
      </div>
    </section>
    {/* About Section Start */}
    <section className="about" id="about">
      <div className="content">
        <div className="title">
          <span>About Us</span>
        </div>
        <div className="about-details">
          <div className="left1">
            <img src="https://i0.wp.com/auxiliumhealthcare.com/wp-content/uploads/2018/03/medical-conference-P42ZDP5.jpg?fit=2048%2C1367&ssl=1" alt="Portfolio" />
          </div>
          <div className="right1">
            <div className="topic">Booking </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt,
              porro veritatis pariatur, nobis voluptatem ipsum repellat nemo
              quisquam error reprehenderit recusandae odio vel, suscipit. Voluptas
              mollitia accusantium quaerat aspernatur labore dolorum placeat ipsa
              sint nam perspiciatis eos consectetur veritatis debitis, quis
              aliquam unde sed maiores sit! Hic molestiae optio iste iure earum
              amet nostrum quaerat facere quae veniam maiores harum iusto aperiam
              vel inventore illo voluptatibus voluptates quo impedit voluptatum
              error vitae, omnis praesentium? Aperiam nulla non, nesciunt fuga rem
              perferendis alias et, temporibus, distinctio culpa unde a laborum
              libero ducimus. Facilis veniam sit praesentium, voluptatibus sint
              maxime iusto eaque.
            </p>
            <div className="button">
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* My Skill Section Start */}
    <section className="skills" id="skills">
      {/* <div className="content"> */}
        <div className="title">
          <span>Listes de specialites</span>
        </div>
        <div className='pos'>
        <ListSpecialite/>
        </div>
      {/* </div> */}
    </section>
    {/* My Services Section Start */}
    <section className="services" id="services">
      <div className="content">
        <div className="title">
          <span>Our Services</span>
        </div>
        <div className="boxes">
          <div className="box">
            <div className="icon">
              <i className="fas fa-desktop" />
            </div>
            <div className="topic">Consultations générales</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              autem quam odio, qui voluptatem eligendi?
            </p>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fas fa-paint-brush" />
            </div>
            <div className="topic">Examens médicaux</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              autem quam odio, qui voluptatem eligendi?
            </p>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fas fa-chart-line" />
            </div>
            <div className="topic">Conseils en santé</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              autem quam odio, qui voluptatem eligendi?
            </p>
          </div>
        </div>
      </div>
    </section>
    
    {/* Contact Me Section Start */}
    <section className="contact" id="contact">
      <div className="content">
        <div className="title">
          <span>Contact-nous</span>
        </div>
        <div className="text">
      <div className="topic">Have Any Questions or Projects?</div>
      <p>
        I'm here to help! Whether you have questions, need assistance, or have a project in mind, feel free to reach out.
      </p>
      <div className="button">
        <button>Contact Me</button>
      </div>
    </div>
      </div>
    </section>
    {/* Footer Section Start */}
    <footer>
      <div className="text">
        <span>
           © 2023 <a href="#">Booking</a> - All rights reserved
        </span>
      </div>
    </footer>
  </div>
  
  )
}

export default Pro
