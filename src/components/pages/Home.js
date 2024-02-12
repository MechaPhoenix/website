
import React from 'react';
import PromoVideo from './PromoVideo';
import RobotSection from './RobotSection';
import '../css/Home.css';
import '../css/dots.css'
import Banner from "../../assets/7722Banner.png"

const LandingPage = () => {
  return (
    <div>
      <header>
        <img className='Banner' src={Banner} />
      </header>

      <section>
        <h2>Team Promo Video</h2>
        <PromoVideo />
      </section>

      <section>
        <h2>Current Season</h2>
      </section>

      <section>
        <h2>Our Robot</h2>
        <RobotSection />
      </section>

      <footer>
        <h2>Site Created by James Bearinger | Images by Mecha Pheonix</h2>
      </footer>
    </div>
  );
};

export default LandingPage;
