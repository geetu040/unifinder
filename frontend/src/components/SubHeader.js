import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';

// defining some subheader styles
const subHeaderStyles = {
    height: '50vh',
    width: '100%',
    backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(${process.env.PUBLIC_URL}/images/background.jpg)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    textAlign: 'center',
    color: '#fff',
};

export default function SubHeader(props) {
    // showing the navbar
  const showMenu = () => {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) {
      navLinks.style.top = '0';
    }
  }

  // hiding the navbar
  const hideMenu = () => {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) {
      navLinks.style.top = '-800px';
    }
  }

  // getting the location of the webpage to check is it is the /universities page
    const location = useLocation();
    const uniPath = '/universities';

    return (
        <section className="sub-header" style={subHeaderStyles}>
            <nav>

              {/* logo icon */}
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

                {/* for smaller screens */}
                <i className="fa-solid fa fa-bars" onClick={showMenu}>Menu</i>
            </nav>
            <h1>{props.page}</h1>

            {/* if on /universities, display the search bar */}
            {location.pathname === uniPath && <SearchBar onSearch={props.onSearch} />}

        </section>
    )
}

