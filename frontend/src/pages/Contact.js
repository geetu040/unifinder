import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Contact() {

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
                <h1>Contact Us</h1>
            </section>

            <section className="contact-us">
                <div className="row">
                    <div className="contact-col">
                        <div>
                            <i className="fa-solid fa-house"></i>
                            <span>
                                <h5>SEECS, National University of Science and Technology</h5>
                                <p>Islamabad, Pakistan</p>
                            </span>
                        </div>
                        <div>
                            <i className="fa-solid fa-phone"></i>
                            <span>
                                <h5>+923021117531</h5>
                                <p>Monday to Saturday, 9AM to 5PM</p>
                            </span>
                        </div>
                        <div>
                            <i className="fa-solid fa-envelope"></i>
                            <span>
                                <h5>unifinder@mail.com</h5>
                                <p>Email us </p>
                            </span>
                        </div>
                    </div>
                    <div className="contact-col">
                        <form action="/" method="get">
                            <input type="text" name="name" placeholder="Enter Your Name" required />
                            <input type="email" name="email" placeholder="Enter Email" required />
                            <input type="text" name="subject" placeholder="Enter Your Subject" required />
                            <textarea rows="8" name="message" placeholder="Message" required />
                            <button type="submit" className="hero-btn red-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
