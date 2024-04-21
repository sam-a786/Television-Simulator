import React from 'react';
import Carousel from "@itseasy21/react-elastic-carousel";
import Item from './Item';
import "./../styles.css";

const breakPoints= [
    { width: 1, itemsToShow: 1 },    //these breakpoints determind how the silder moves and the width of the items
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },

];
const Carouselcomponent = () => {
  return (
    <> 
    <div className="carousel">
    <Carousel breakPoints={breakPoints}>
        <Item>One</Item>
        <Item>Two</Item>
        <Item>Three</Item>
        <Item>One</Item>
        <Item>Two</Item>
        <Item>Three</Item>
    </Carousel>
    </div>
    </>
  )
}

export default Carouselcomponent