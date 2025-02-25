import React from 'react';

import '../App.css'

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-section">
            <h1 className="title">Hi, This is Shivaraj Kumbar</h1>
            <h5 className="subtitle">And I'm A MernStack Developer</h5>
            <p className="description">
              Passionate about building amazing web applications with cutting-edge technologies.
            </p>
          </div>
          <div className="col-12 col-md-6 text-center image-section">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwm1d0I5dkyb8RRR5X6_ySaBIyuf56Tg7T5Q&s' alt="Profile photo" className='profile-img img-fluid'/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;