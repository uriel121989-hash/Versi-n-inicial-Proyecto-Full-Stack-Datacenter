import React, { useState, useEffect } from 'react';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center shadow-md">
            <span className="text-white font-black text-sm">W</span>
          </div>
          <div className="text-2xl font-black tracking-tighter text-brand-dark">WEBHOSTING<span className="text-brand-primary">.MX</span></div>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-bold text-slate-600">
          <a href="#" className="hover:text-brand-primary transition-colors">HOSTING</a>
          <a href="#" className="text-brand-primary">SERVIDORES</a>
          <a href="#" className="hover:text-brand-primary transition-colors">DOMINIOS</a>
          <button className="bg-brand-dark text-white px-6 py-2 rounded-full hover:bg-slate-800 transition-all">Mi Panel</button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
