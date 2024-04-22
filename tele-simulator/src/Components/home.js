import React from 'react';
import Carouselcomponent from './carousel';
import EndgameImage from '../Images/Endgame.jpeg'; 
import InfinityImage from '../Images/Infinity war.jpg'; 

const Home = () => {
  return (
    <div className="home">
      
      
      <div className="row1"> 
      <a href="https://www.imdb.com/title/tt4154796/?ref_=fn_al_tt_1">
            <img src={EndgameImage} alt="Endgame" className="img" style={{ width: '250px', height: '250px', paddingTop: '1100px', paddingBottom: '50px', paddingRight: '300px'  }}/>
      </a>
      <a href="https://www.imdb.com/title/tt4154756/">
            <img src={InfinityImage} alt="Infinity War" className="img" style={{ width: '250px', height: '250px', paddingBottom: '50px' }}/>
      </a>
      </div>
      
      
      <div className="row2">
        <Carouselcomponent />
      </div>
      
      
      <div className="row3">
      <a href="https://www.imdb.com/title/tt4154796/?ref_=fn_al_tt_1">
            <img src={EndgameImage} alt="Endgame" className="img" style={{ width: '250px', height: '250px', paddingTop: '50px' , paddingBottom: '100px', paddingRight: '75px'  }}/>
      </a>
      <a href="https://www.imdb.com/title/tt4154756/">
            <img src={InfinityImage} alt="Infinity War" className="img" style={{ width: '250px', height: '250px', paddingBottom: '100px', paddingRight: '75px' }}/>
      </a>
      <a href="https://www.imdb.com/title/tt4154756/">
            <img src={InfinityImage} alt="Infinity War" className="img" style={{ width: '250px', height: '250px', paddingBottom: '100px' }}/>
      </a>
      </div>
      
      
      <div className="row4">
      <a href="https://www.imdb.com/title/tt4154796/?ref_=fn_al_tt_1">
            <img src={EndgameImage} alt="Endgame" className="img" style={{ width: '250px', height: '250px', paddingTop: '50px' , paddingBottom: '100px', paddingRight: '75px'  }}/>
      </a>
      <a href="https://www.imdb.com/title/tt4154756/">
            <img src={InfinityImage} alt="Infinity War" className="img" style={{ width: '250px', height: '250px', paddingBottom: '100px', paddingRight: '75px' }}/>
      </a>
      <a href="https://www.imdb.com/title/tt4154756/">
            <img src={InfinityImage} alt="Infinity War" className="img" style={{ width: '250px', height: '250px', paddingBottom: '100px' }}/>
      </a>
      </div>


      <div className="row5">
      <a href="https://www.imdb.com/title/tt4154796/?ref_=fn_al_tt_1">
            <img src={EndgameImage} alt="Endgame" className="img" style={{ width: '250px', height: '250px', paddingTop: '50px' , paddingBottom: '100px', paddingRight: '75px'  }}/>
      </a>
      <a href="https://www.imdb.com/title/tt4154756/">
            <img src={InfinityImage} alt="Infinity War" className="img" style={{ width: '250px', height: '250px', paddingBottom: '100px', paddingRight: '75px' }}/>
      </a>
      <a href="https://www.imdb.com/title/tt4154756/">
            <img src={InfinityImage} alt="Infinity War" className="img" style={{ width: '250px', height: '250px', paddingBottom: '100px' }}/>
      </a>
      </div>
    </div>
  );
};

export default Home;
