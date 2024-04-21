import React from 'react';
import Carouselcomponent from './carousel'; // Import Carouselcomponent from Carousel.js

const Home = () => {
  return (
    <div className="home">
      <div className="row">
        <div className="clickable-picture">Placeholder 1</div>
        <div className="clickable-picture">Placeholder 2</div>
      </div>
      <div className="row">
        <Carouselcomponent /> {/* Use the Carouselcomponent here */}
      </div>
      <div className="row">
        <div className="image">Placeholder 3</div>
        <div className="image">Placeholder 4</div>
        <div className="image">Placeholder 5</div>
      </div>
    </div>
  );
};

export default Home;
