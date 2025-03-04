import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-page">
      <h1>About Ghost Studios</h1>
      <p>Ghost Studios is a cutting-edge game development company dedicated to crafting immersive and innovative gaming experiences.</p>
      <p>We specialize in open-world racing, action-adventure, and multiplayer games.</p>
      <Link to="/">
        <button className="primary-btn">Go Back</button>
      </Link>
    </div>
  );
}

export default About;
