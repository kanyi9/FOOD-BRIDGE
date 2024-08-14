import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import InfoCards from './InfoCards';
import About from './About.jsx';
import TeamSection from './TeamSection';
import Footer from './Footer';
import Campaigns from './Campaigns';

function Home() {
  return (
    <div className="flex flex-col  bg-white">
      <Header />
      <Navigation />
      <HeroSection />
      <InfoCards />
      <About />
      <Campaigns />
      <TeamSection />
      <Footer/>
    </div>
  );
}

export default Home;

