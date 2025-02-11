import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import TrackRecord from '../components/TrackRecord';
import Expertise from '../components/Expertise';
import Commitment from '../components/Commitment';
import SuccessLegacy from '../components/SuccessLegacy';
import Reputation from '../components/Reputation';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        
        <TrackRecord />
        <Expertise />
        <Commitment />
        <SuccessLegacy />
        <Reputation />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;