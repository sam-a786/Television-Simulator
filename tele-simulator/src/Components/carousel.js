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
const carouselStyles = {
    width: '850px', //had to overwrite the width as we are using a bootstrap library for the carousel it ignores the width and then we dont see any items
};


const Carouselcomponent = () => {
  return (
    <> 
    <div className="carousel" style={carouselStyles}>
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