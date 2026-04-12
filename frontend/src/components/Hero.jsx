import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-brand-blue to-blue-500 text-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        
        {/* Lado izquierdo: Textos */}
        <div className="md:w-1/2 pr-8 text-center md:text-left z-10">
          <p className="text-brand-light-blue font-bold mb-2 tracking-wide uppercase text-sm">Servidores Dedicados Premium</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
            Servidores Dedicados en México
          </h1>
          <p className="text-lg mb-8 text-blue-100">
            Contratos mensuales flexibles para el crecimiento sostenido de tu empresa, sin plazos forzosos, cargos ocultos con 99.99% Online y tráfico ilimitado.
          </p>
          <button className="bg-brand-dark hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            ¡Inicia tu crecimiento Hoy!
          </button>
        </div>

        {/* Lado derecho: Nueva Ilustración de Servidor */}
        <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center relative">
          
          {/* Luz de fondo brillante (Glow effect) */}
          <div className="absolute w-80 h-80 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-pulse"></div>
          
          {/* Contenedor con animación de flotación */}
          <div className="relative animate-[bounce_4s_infinite] drop-shadow-2xl">
            <svg width="350" height="400" viewBox="0 0 300 380" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Estructura principal del Rack */}
              <rect x="20" y="10" width="260" height="360" rx="15" fill="#0f172a" stroke="#38bdf8" strokeWidth="4"/>
              
              {/* Servidor 1 */}
              <g transform="translate(35, 40)">
                <rect width="230" height="60" rx="8" fill="#1e293b"/>
                <rect x="10" y="25" width="120" height="10" rx="5" fill="#334155"/>
                <circle cx="160" cy="30" r="6" fill="#ef4444" className="animate-pulse" />
                <circle cx="180" cy="30" r="6" fill="#22c55e" />
                <circle cx="200" cy="30" r="6" fill="#22c55e" />
              </g>

              {/* Servidor 2 */}
              <g transform="translate(35, 120)">
                <rect width="230" height="60" rx="8" fill="#1e293b"/>
                <rect x="10" y="25" width="120" height="10" rx="5" fill="#334155"/>
                <circle cx="160" cy="30" r="6" fill="#22c55e" />
                <circle cx="180" cy="30" r="6" fill="#22c55e" className="animate-pulse"/>
                <circle cx="200" cy="30" r="6" fill="#38bdf8" />
              </g>

              {/* Servidor 3 */}
              <g transform="translate(35, 200)">
                <rect width="230" height="60" rx="8" fill="#1e293b"/>
                <rect x="10" y="25" width="120" height="10" rx="5" fill="#334155"/>
                <circle cx="160" cy="30" r="6" fill="#22c55e" />
                <circle cx="180" cy="30" r="6" fill="#22c55e" />
                <circle cx="200" cy="30" r="6" fill="#22c55e" className="animate-[pulse_1s_infinite]"/>
              </g>

              {/* Servidor 4 (Base de datos) */}
              <g transform="translate(35, 280)">
                <rect width="230" height="60" rx="8" fill="#1e293b"/>
                <path d="M10 30 C 10 15, 60 15, 60 30 C 60 45, 10 45, 10 30 Z" fill="#38bdf8" opacity="0.8"/>
                <path d="M10 35 C 10 50, 60 50, 60 35" stroke="#38bdf8" fill="none" strokeWidth="2" opacity="0.8"/>
                <path d="M10 40 C 10 55, 60 55, 60 40" stroke="#38bdf8" fill="none" strokeWidth="2" opacity="0.8"/>
                <circle cx="160" cy="30" r="6" fill="#eab308" className="animate-pulse" />
                <circle cx="180" cy="30" r="6" fill="#22c55e" />
                <circle cx="200" cy="30" r="6" fill="#22c55e" />
              </g>
            </svg>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Hero;
