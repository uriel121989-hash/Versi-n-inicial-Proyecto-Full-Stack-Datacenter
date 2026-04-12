import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-brand-blue text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="text-3xl font-black tracking-tighter">WEBHOSTING<span className="text-sm font-normal text-brand-light-blue">.MX</span></div>
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-semibold">
          <a href="#" className="hover:text-brand-light-blue">WEB HOSTING</a>
          <a href="#" className="hover:text-brand-light-blue">SERVIDORES</a>
          <a href="#" className="hover:text-brand-light-blue">DOMINIOS</a>
          <a href="#" className="bg-green-500 px-4 py-1 rounded-full text-xs">Mi Panel</a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
