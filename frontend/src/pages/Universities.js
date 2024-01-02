import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

export default function Universities() {

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

    const handleSearch = async (searchTerm) => {
        try {
            // You can replace the URL below with the actual API endpoint
            const apiUrl = `https://unifinder-data.azurewebsites.net/search?query=${encodeURIComponent(searchTerm)}`;
      
            const response = await fetch(apiUrl, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
      
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error.message);
          }
    };

    return (
        <>
            <section className="sub-header" style={subHeaderStyles}>
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
                <h1>Universities</h1>
                <SearchBar onSearch={handleSearch} />
            </section>

            

            <div className="programs">

            </div>

            <Footer />
        </>
    )
}
