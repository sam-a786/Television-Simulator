import React from 'react';
import Carousel from "@itseasy21/react-elastic-carousel";

const breakPoints= [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },

];
const Carousel = () => {
  return (
    <>
    <div className="carousel">
    <Carousel breakPoints={breakPoints}>
        <Item>One</Item>
        <Item>Two</Item>
        <Item>Three</Item>
    </Carousel>
    </div>
    </>
  )
}

export default Carousel