import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import PricingTable from '../components/PricingTable.jsx';
import Features from '../components/Features.jsx';
import FaqAccordion from '../components/FaqAccordion.jsx';
import PaymentGatewayMock from '../components/PaymentGatewayMock.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <Navbar />
      <Hero />
      <PricingTable />
      <Features />
      <FaqAccordion />
      <PaymentGatewayMock />
      <Footer />
    </div>
  );
};

export default Home;
