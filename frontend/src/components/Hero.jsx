import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="relative bg-brand-bg min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern z-0 opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center relative z-10 w-full">
        <div className="md:w-1/2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-slate-200 mb-8 transform hover:scale-105 transition-transform cursor-default">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            <span className="text-brand-dark text-[10px] font-black tracking-[0.2em] uppercase">High Performance Datacenter</span>
          </div>
          
          <h1 className="text-6xl md:text-[85px] font-[1000] text-brand-dark mb-6 leading-[0.9] tracking-tighter">
            HARDWARE <br/> <span className="text-brand-primary italic">DEDICADO.</span>
          </h1>
          
          <p className="text-xl mb-12 text-slate-500 font-medium max-w-lg leading-relaxed border-l-4 border-brand-primary/20 pl-6">
            Rendimiento extremo sin concesiones. Servidores físicos de última generación con redundancia total.
          </p>
          
          <div className="flex flex-col sm:gap-6 sm:flex-row justify-center md:justify-start">
            <button onClick={() => document.getElementById('pricing-section').scrollIntoView({behavior:'smooth'})} className="px-12 py-5 bg-brand-dark text-white font-black rounded-2xl shadow-2xl hover:bg-slate-800 transition-all transform hover:-translate-y-1">CONFIGURAR AHORA</button>
            <button onClick={() => navigate('/dashboard')} className="px-12 py-5 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-2xl hover:border-brand-primary transition-all">REVISAR STATUS</button>
          </div>
        </div>
        
        {/* SERVIDOR EXCELSO 3D MEJORADO */}
        <div className="md:w-1/2 w-full mt-24 md:mt-0 flex justify-center perspective-1000">
          <div className="relative group transform rotate-y-[-18deg] rotate-x-[12deg] transition-all duration-1000 ease-out hover:rotate-y-[-5deg] hover:rotate-x-[5deg]">
             
             {/* Reflejo de luz en el suelo */}
             <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-brand-primary/10 blur-3xl rounded-full"></div>

             <svg width="420" height="520" viewBox="0 0 350 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative drop-shadow-2xl">
                {/* Lateral del Rack (Profundidad) */}
                <path d="M20 30 L40 10 L340 10 L340 410 L320 430 Z" fill="#1e293b" />
                
                {/* Frente del Rack */}
                <rect x="20" y="30" width="300" height="400" rx="12" fill="#020617" stroke="#1e293b" strokeWidth="2"/>
                
                {/* Unidades de Servidor */}
                {[55, 125, 195, 265].map((y, i) => (
                  <g key={i} transform={`translate(35, ${y})`}>
                    <rect width="270" height="60" rx="8" fill="url(#metal)" stroke={i === 1 ? "#FF7A00" : "#1e293b"} strokeWidth="1.5"/>
                    {/* Rejillas realistas */}
                    <g opacity="0.3">
                      {[...Array(10)].map((_, j) => (
                        <rect key={j} x={15 + j*10} y="15" width="4" height="30" rx="2" fill="#000"/>
                      ))}
                    </g>
                    {/* Indicadores de Actividad */}
                    <rect x="180" y="20" width="75" height="20" rx="4" fill="#020617" />
                    <circle cx="200" cy="30" r="3.5" fill={i === 1 ? "#FF7A00" : "#10b981"} className={i === 1 ? "animate-pulse" : ""} />
                    <circle cx="215" cy="30" r="3.5" fill={i === 1 ? "#FF7A00" : "#10b981"} opacity="0.6" />
                    <circle cx="230" cy="30" r="3.5" fill="#ef4444" opacity="0.2" />
                  </g>
                ))}

                {/* Unidad de Energía inferior */}
                <g transform="translate(35, 345)">
                   <rect width="270" height="70" rx="8" fill="#1e293b" opacity="0.4"/>
                   <rect x="20" y="20" width="40" height="30" rx="4" fill="#020617"/>
                   <rect x="70" y="20" width="40" height="30" rx="4" fill="#020617"/>
                   <text x="220" y="40" fill="#FF7A00" fontSize="10" fontWeight="900" fontFamily="monospace" className="animate-pulse">ONLINE</text>
                </g>

                <defs>
                  <linearGradient id="metal" x1="0" y1="0" x2="270" y2="60" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1e293b" /><stop offset="0.5" stopColor="#334155" /><stop offset="1" stopColor="#0f172a" />
                  </linearGradient>
                </defs>
             </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
