import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import PricingTable from '../components/PricingTable.jsx';
import Features from '../components/Features.jsx';
import PaymentGatewayMock from '../components/PaymentGatewayMock.jsx';
import FaqAccordion from '../components/FaqAccordion.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <Hero />
      <div id="pricing-section">
        <PricingTable />
      </div>
      <Features />
      <PaymentGatewayMock />
      <FaqAccordion />
      <Footer />
    </div>
  );
};
export default Home;
