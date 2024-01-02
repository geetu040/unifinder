import React from 'react';
import { Link } from 'react-router-dom';

let navLinks = document.getElementById("navLinks");
const showMenu = () => {
  navLinks.style.top = '0';
}
const hideMenu = () => {
  navLinks.style.top = '-800px'
}

const headerStyles = {
  minHeight: '100vh',
  width: '100%',
  backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(${process.env.PUBLIC_URL}/images/banner.png)`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  position: 'relative',
};

function Header() {
  return (
    <section className="header" style={headerStyles}>
      <nav>
        <Link to="/">
          <img src='/images/favicon.png' alt="" />
        </Link>
        <div className="nav-links" id="navLinks">
          <i className="fa-solid fa fa-xmark" onClick={hideMenu}></i>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/universities">UNIVERSITIES</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </div>
        <i className="fa-solid fa fa-bars" onClick={showMenu}></i>
      </nav>
      <div className="text-box">
        <h1>Empowering Your Educational Journey: Discover Your Ideal University</h1>
        <p>
          Embarking on your educational journey after completing high school is a significant step, and selecting the right university for your bachelor's degree is a crucial decision. Your choice of university can shape your academic path, career opportunities, and personal growth. At our platform, we understand the importance of this choice and are here to guide you through the process.
        </p>
        <Link to="/" className="hero-btn">We'll help you find the right university for you</Link>
      </div>
    </section>
  );
}

export default Header;
