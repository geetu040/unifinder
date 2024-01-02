import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
    return (
        <>
            <Header />

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
