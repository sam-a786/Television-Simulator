import React from 'react';
import Carousel from "@itseasy21/react-elastic-carousel";
import Item from './Item';
import Thor1 from '../Images/thor1.jpg'; 
import Thor2 from '../Images/thor2.jpg'; 
import Thor3 from '../Images/thor3.jpg'; 
import Thor4 from '../Images/thor4.jpeg'; 
import av1 from '../Images/avengers1.jpg';
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
          <Item><a href="https://www.imdb.com/title/tt0800369/?ref_=fn_al_tt_1"> <img src={Thor1} alt="Thor 1" className="carousel-image" style={{ width: '250px', height: '250px'}} /> </a> </Item>
          <Item><a href="https://www.imdb.com/title/tt1981115/?ref_=fn_al_tt_4"> <img src={Thor2} alt="Thor 2" className="carousel-image" style={{ width: '250px', height: '250px'}} /> </a> </Item>
          <Item><a href="https://www.imdb.com/title/tt3501632/?ref_=fn_al_tt_2"> <img src={Thor3} alt="Thor 3" className="carousel-image" style={{ width: '250px', height: '250px'}} /> </a> </Item>
          <Item><a href="https://www.imdb.com/title/tt10648342/?ref_=fn_al_tt_3"> <img src={Thor4} alt="Thor 4" className="carousel-image" style={{ width: '250px', height: '250px'}} /> </a> </Item>
          <Item><a href="https://www.imdb.com/title/tt0848228/?ref_=fn_al_tt_2"> <img src={av1} alt="Avengers assemble" className="carousel-image" style={{ width: '250px', height: '250px'}} /> </a> </Item>
        </Carousel>
      </div>
    </>
  );
};

export default Carouselcomponent;