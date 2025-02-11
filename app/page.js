import React from 'react';
import {Header} from '../components/Header.js';
import {HeroSection} from '../components/HeroSection.js';
import {TrackRecord} from '../components/TrackRecord.js';
import {Expertise} from '../components/Expertise.js';
import {Commitment} from '../components/Commitment.js';
import {SuccessLegacy} from '../components/SuccessLegacy.js';
import {Reputation} from '../components/Reputation.js';
import {Footer} from '../components/Footer.js';

const HomePage = () => {

  return (
    <React.Fragment>
      <Header />
      <main>
        <HeroSection />
        <TrackRecord />
        <Expertise />
        <Commitment />
        <SuccessLegacy />
        <Reputation />
      </main>
      <Footer />
    </React.Fragment>
   );
  };
  
  export default page;