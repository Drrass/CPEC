import React from 'react';
import Hero from '../components/Hero';
import AboutUsSection from '../components/AboutUsSection';
import Services from '../components/Services';
import Industries from '../components/Industries';
import WhatWeDeliver from '../components/WhatWeDeliver';
import WhyChooseCPEC from '../components/WhyChooseCPEC';
import VisionMission from '../components/VisionMission';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <AboutUsSection />
      <Services />
      <Industries />
      <WhatWeDeliver />
      <WhyChooseCPEC />
      {/* <VisionMission /> */}
    </div>
  );
};

export default Home;
