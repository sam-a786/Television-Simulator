import React from 'react';
import Carouselcomponent from './carousel';

const Home = () => {
  return (
    <div className="home">
      <div className="row">
        <div className="col-md-6">
          <div className="clickable-picture">Placeholder 1</div>
        </div>
        <div className="col-md-6">
          <div className="clickable-picture">Placeholder 2</div>
        </div>
      </div>
      <div className="row">
        <Carouselcomponent />
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
