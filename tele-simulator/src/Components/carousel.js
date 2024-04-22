import React from 'react';
import Carousel from "@itseasy21/react-elastic-carousel";
import Item from './Item';
import InfinityImage from '../Images/Infinity war.jpg'; 
import "./../styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },    // These breakpoints determine how the slider moves and the width of the items
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const carouselStyles = {
  width: '850px', // Overwrite the width to ensure it's displayed properly
};

const Carouselcomponent = () => {
  return (
    <>
      <div className="carousel" style={carouselStyles}>
        <Carousel breakPoints={breakPoints}>
          <Item><a href="https://www.imdb.com/title/tt4154796/?ref_=fn_al_tt_1"> <img src={InfinityImage} alt="Infinity War" className="carousel-image" style={{ width: '250px', height: '250px'}} /> </a> </Item>
          <Item><a href="https://www.imdb.com/title/tt4154796/?ref_=fn_al_tt_1"> <img src={InfinityImage} alt="Infinity War" className="carousel-image" style={{ width: '250px', height: '250px'}} /> </a> </Item>
          <Item><a href="https://www.imdb.com/title/tt4154796/?ref_=fn_al_tt_1"> <img src={InfinityImage} alt="Infinity War" className="carousel-image" style={{ width: '250px', height: '250px'}} /> </a> </Item>
          <Item><a href="https://www.imdb.com/title/tt4154796/?ref_=fn_al_tt_1"> <img src={InfinityImage} alt="Infinity War" className="carousel-image" style={{ width: '250px', height: '250px'}} /> </a> </Item>
          <Item><a href="https://www.imdb.com/title/tt4154796/?ref_=fn_al_tt_1"> <img src={InfinityImage} alt="Infinity War" className="carousel-image" style={{ width: '250px', height: '250px'}} /> </a> </Item>
        </Carousel>
      </div>
    </>
  );
};

export default Carouselcomponent;