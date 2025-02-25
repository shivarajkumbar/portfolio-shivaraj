import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";


const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Me</h1>
           <b> <p className="contact-description" >Feel free to reach out for collaborations or just a friendly chat!</p></b>
            <form className="contact-form">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" required />

                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />

                <label>Message</label>
                <textarea placeholder="Enter your message" rows="5" required></textarea>

                <button type="submit" color='black' >Send Message</button>
            </form>
            <footer className="contact-footer">
                <a href="https://www.instagram.com/shivarajkumbar1?igsh=ZDkzeWUwaXp5cGtr" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram color='black' /></a>
                <a href="https://www.linkedin.com/in/shivaraja-kumbar-480507331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin color='black'/></a>
                <a href="https://github.com/shivarajkumbar" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub color='black'/></a>
            </footer>
        </div>
    );
}

export default Contact