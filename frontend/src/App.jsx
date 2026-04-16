import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Checkout from './pages/Checkout.jsx';
import ClientDashboard from './pages/ClientDashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/dashboard" element={<ClientDashboard />} />
      </Routes>
    </Router>
  );
}
export default App;
