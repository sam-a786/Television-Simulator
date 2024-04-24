import React from 'react';
import backgroundImage from '../Images/bg.jpg';
import Carouselcomponent from './carousel';
import EndgameImage from '../Images/Endgame.jpeg'; 
import InfinityImage from '../Images/Infinity war.jpg'; 
import Ironman1 from '../Images/ironman1.jpg';
import Ironman2 from '../Images/ironman2.jpg';
import Ironman3 from '../Images/ironman3.jpg';
import Cap1 from '../Images/cap1.jpg';
import Cap2 from '../Images/cap2.jpg';
import Cap3 from '../Images/cap3.jpeg';
import Avengers2 from '../Images/avengers2.jpg';
import DP1 from '../Images/dp1.jpg';
import DP2 from '../Images/dp2.jpg';

const Home = () => {
  return (
    <div className="home" style={{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'auto', // Change background size to auto
      backgroundRepeat: 'repeat', // Repeat the background image
      width: '100vw', 
      minHeight: '100vh', // Set minHeight instead of height
      margin: '0', // Add margin to the top
      padding: '100px 0', // Add padding to the top and bottom
      overflow: 'auto' // Enable scrolling
    }}>

      {/* Row for "Up next" text */}
      <div className="row0" style={{paddingTop: '950px', paddingLeft: '100px'}}>
        <p>Up next</p>
      </div>

      {/* Row for Endgame and Infinity War images */}
      <div className="row1"> 
        <a href="https://www.imdb.com/title/tt4154796/?ref_=fn_al_tt_1">
          <img src={EndgameImage} alt="Endgame" className="img" style={{ width: '250px', height: '250px', paddingTop: '50px', paddingBottom: '50px', paddingRight: '300px', paddingLeft: '500px' }}/>
        </a>
        <a href="https://www.imdb.com/title/tt4154756/">
          <img src={InfinityImage} alt="Infinity War" className="img" style={{ width: '250px', height: '250px', paddingBottom: '50px' }}/>
        </a>
      </div>
            
      {/* Row for Carousel */}
      <div className="row2" style={{paddingLeft: '500px'}}>
        <Carouselcomponent />
      </div>
      
      {/* Row for Ironman images */}
      <div className="row3">
        <a href="https://www.imdb.com/title/tt0371746/?ref_=fn_al_tt_1">
          <img src={Ironman1} alt="Ironman1" className="img" style={{ width: '250px', height: '250px', paddingTop: '50px', paddingBottom: '100px', paddingRight: '75px', paddingLeft: '450px' }}/>
        </a>
        <a href="https://www.imdb.com/title/tt1228705/?ref_=fn_al_tt_3">
          <img src={Ironman2} alt="Ironman2" className="img" style={{ width: '250px', height: '250px', paddingBottom: '100px', paddingRight: '75px' }}/>
        </a>
        <a href="https://www.imdb.com/title/tt1300854/?ref_=fn_al_tt_2">
          <img src={Ironman3} alt="Ironman3" className="img" style={{ width: '250px', height: '250px', paddingBottom: '100px' }}/>
        </a>
      </div>
      
      {/* Row for Captain America images */}
      <div className="row4">
        <a href="https://www.imdb.com/title/tt0458339/?ref_=fn_al_tt_3">
          <img src={Cap1} alt="Cap1" className="img" style={{ width: '250px', height: '250px', paddingTop: '50px', paddingBottom: '100px', paddingRight: '75px', paddingLeft: '450px' }}/>
        </a>
        <a href="https://www.imdb.com/title/tt1843866/?ref_=fn_al_tt_4">
          <img src={Cap2} alt="Cap2" className="img" style={{ width: '250px', height: '250px', paddingBottom: '100px', paddingRight: '75px' }}/>
        </a>
        <a href="https://www.imdb.com/title/tt3498820/?ref_=fn_al_tt_2">
          <img src={Cap3} alt="Cap3" className="img" style={{ width: '250px', height: '250px', paddingBottom: '100px' }}/>
        </a>
      </div>

      {/* Row for Avengers and Deadpool images */}
      <div className="row5">
        <a href="https://www.imdb.com/title/tt2395427/?ref_=fn_al_tt_1">
          <img src={Avengers2} alt="Avengers2" className="img" style={{ width: '250px', height: '250px', paddingTop: '50px', paddingBottom: '100px', paddingRight: '75px', paddingLeft: '450px' }}/>
        </a>
        <a href="https://www.imdb.com/title/tt1431045/?ref_=fn_al_tt_2">
          <img src={DP1} alt="Deadpool1" className="img" style={{ width: '250px', height: '250px', paddingBottom: '100px', paddingRight: '75px' }}/>
        </a>
        <a href="https://www.imdb.com/title/tt5463162/?ref_=fn_al_tt_3">
          <img src={DP2} alt="Deadpool2" className="img" style={{ width: '250px', height: '250px', paddingBottom: '100px' }}/>
        </a>
      </div>
    </div>
  );
};

export default Home;