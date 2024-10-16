import React from 'react';
import './About.css';
import chefImage from '../assets/restaurant chef B.jpg';

function About() {
  return (
    <div className="about">
      <h1>The Little Lemon Story</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            Little Lemon is more than just a restaurant; it's a culinary journey that began in the heart of Chicago in 1995. Founded by the Marconi family, our establishment brings the sun-kissed flavors of the Mediterranean to the bustling streets of the Windy City.
          </p>
          <p>
            Our philosophy is simple: use the freshest, locally-sourced ingredients to create dishes that honor traditional recipes while embracing modern culinary innovations. Every meal at Little Lemon is crafted with passion, expertise, and a touch of family love.
          </p>
          <p>
            From our famous homemade limoncello to our signature dishes, we strive to transport our guests to the coastal villages of Italy and Greece with every bite. At Little Lemon, we're not just serving food; we're creating memories and fostering a community united by a love for exceptional Mediterranean cuisine.
          </p>
        </div>
        <div className="about-image">
          <img src={chefImage} alt="Little Lemon Chef" />
        </div>
      </div>
    </div>
  );
}

export default About;
