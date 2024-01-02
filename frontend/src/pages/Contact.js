import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Contact() {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    function sendContactRequest(email, message) {
        const apiUrl = 'https://unifinder-function.azurewebsites.net/api/contact-function?code=-9GcG-YCpvxyI9makLvoepKsViIO8lS_b4axf_bIBzjHAzFumeZl7Q==';

        return fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                message: message,
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return "Saved";
            })
            .then(data => {
                return data; // You can process the response data as needed
            })
            .catch(error => {
                throw new Error(`Error: ${error.message}`);
            });
    }

    const handleInputChange = (e) => {
        if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else if (e.target.name === 'message') {
            setMessage(e.target.value);
        }
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();

        try {
            const response = await sendContactRequest(email, message);
            setResponseMessage(response);
            // Handle the response as needed
        } catch (error) {
            setResponseMessage(`Error: ${error.message}`);
            // Handle the error as needed
        }
    };

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
                        <form onSubmit={handleSendMessage}>
                            <input type="email" name="email" placeholder="Enter Email" value={email} onChange={handleInputChange} required />
                            <textarea rows="8" name="message" placeholder="Message" value={message} onChange={handleInputChange} required />
                            <button type="submit" className="hero-btn red-btn">Send Message</button>
                        </form>
                        {responseMessage && <p>{responseMessage}</p>}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
