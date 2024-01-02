import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function About() {

  let navLinks = document.getElementById("navLinks");
  const showMenu = () => {
    navLinks.style.top = '0';
  }
  const hideMenu = () => {
    navLinks.style.top = '-800px'
  }

  const subHeaderStyles = {
    height: '50vh',
    width: '100%',
    backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(${process.env.PUBLIC_URL}/images/background.jpg)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    textAlign: 'center',
    color: '#fff',
  };

  return (
    <>
      <section className="sub-header" style={subHeaderStyles}>
        <nav>
        <Link to="/">
          <img src='/images/favicon.png' alt="" />
        </Link>
          <div className="nav-links" id="navLinks">
            <i className="fa-solid fa fa-xmark" onclick={hideMenu}></i>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/universities">UNIVERSITIES</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
          </div>
          <i className="fa-solid fa fa-bars" onclick={showMenu}></i>
        </nav>
        <h1>About Us</h1>
      </section>

      <section className="about-us">
        <h1>Your Gateway to Educational Exploration</h1>
        <hr />
        <br />
        <p>Welcome to UniFinder, your premier gateway to unlocking a world of educational opportunities in Pakistan. We understand that your educational journey is a significant milestone in your life, and the choices you make today will shape your future. That's where UniFinder steps in, committed to being your trusted partner on this exciting quest for knowledge and growth.</p>
        <p>With a wealth of information at your fingertips, UniFinder is your one-stop destination for navigating the diverse landscape of educational possibilities in Pakistan. Our mission is simple but profound: to empower you with the knowledge, guidance, and resources you need to make well-informed decisions about your academic path.</p>
        <p>Our platform is designed with your needs in mind. Whether you're a recent high school graduate eager to take the next step into higher education or someone seeking to enhance your career prospects through further studies, UniFinder has you covered. We offer a comprehensive database of universities, programs, and campuses across the country, ensuring that you have access to the latest information on academic offerings, admission requirements, faculty expertise, and more.</p>
        <p>But UniFinder is more than just a repository of data. It's your partner in discovery, your advisor in decision-making, and your compass on the educational map. We're here to guide you through this transformative journey, providing insights and resources to help you select the right university and program that align perfectly with your dreams and aspirations.</p>
        <p>Your academic future is filled with boundless potential, and UniFinder is your key to unlocking it. Take the first step toward a brighter tomorrow - Start Exploring with UniFinder today and embark on a journey of educational exploration and personal growth.</p>
        <br />
        <Link to="/" className="hero-btn red-btn">Start Exploring</Link>
      </section>

      <Footer />
    </>
  );
}
