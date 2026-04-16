import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

const ClientDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-32 px-6">
        <div className="flex justify-between items-end mb-12">
           <div>
              <h1 className="text-4xl font-[1000] text-brand-dark">Panel de <span className="text-brand-secondary">Control</span></h1>
              <p className="text-slate-500 font-medium">Gestiona tus servidores en tiempo real.</p>
           </div>
           <button onClick={() => navigate('/')} className="bg-white border border-slate-200 px-6 py-2 rounded-xl font-bold text-slate-600 hover:bg-slate-50">Cerrar Sesión</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
           <div className="bg-white p-10 rounded-[40px] shadow-xl border border-slate-100">
              <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">Activos</p>
              <p className="text-6xl font-[1000] text-brand-dark">02</p>
           </div>
           <div className="bg-brand-dark p-10 rounded-[40px] shadow-xl text-white">
              <p className="text-brand-primary text-xs font-black uppercase tracking-widest mb-2">Uptime</p>
              <p className="text-6xl font-[1000]">99.9%</p>
           </div>
           <div className="bg-white p-10 rounded-[40px] shadow-xl border border-slate-100">
              <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">Próximo Pago</p>
              <p className="text-2xl font-[1000] text-brand-primary">15 MAY 2026</p>
           </div>
        </div>
      </div>
    </div>
  );
};
export default ClientDashboard;
