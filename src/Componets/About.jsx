import React from 'react';

import '../App.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 about-text">
          <h1>About Me</h1>
          <p>
            Hello! I'm <strong>Shivaraj kumbar</strong>, a passionate MERN Stack Developer dedicated to crafting 
            innovative and user-friendly web applications. With a strong foundation in React.js, Express.js, 
            and MongoDB, I specialize in building scalable solutions for modern web experiences. 
          </p>
          <p>
            I thrive on solving complex problems and bringing ideas to life through code. When I'm not coding, 
            you can find me exploring new technologies, working on side projects, or collaborating with 
            like-minded professionals to create impactful digital solutions.
          </p>
          <p>
            Let’s build something amazing together!
          </p>
        </div>
        
        <div className="col-12 col-md-6 text-center">
         <img src="https://preview.redd.it/k33qky6dzit91.jpg?width=736&format=pjpg&auto=webp&s=6acfa44bf692166a9d805c6cf3f485acfd31ecbe" alt="Shivaraj Kumbar" className="about-image img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default About;