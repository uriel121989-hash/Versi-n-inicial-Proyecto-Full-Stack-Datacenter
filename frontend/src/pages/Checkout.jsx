import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

const Checkout = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <div className="max-w-4xl mx-auto pt-32 px-6">
        <button onClick={() => navigate('/')} className="mb-6 text-brand-primary font-bold hover:underline">← Volver al Inicio</button>
        <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-slate-100">
          <h1 className="text-4xl font-[1000] text-brand-dark mb-4">Finalizar <span className="text-brand-primary">Orden</span></h1>
          <p className="text-slate-500 mb-8 font-medium">Estás a un paso de activar tu infraestructura.</p>
          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 mb-8">
            <div className="flex justify-between items-center mb-4">
               <span className="font-bold text-slate-700">Servidor Dedicado M1</span>
               <span className="font-black text-brand-dark">$1,848.00 MXN</span>
            </div>
            <div className="border-t border-slate-200 pt-4 flex justify-between items-center text-xl">
               <span className="font-black text-brand-dark">Total</span>
               <span className="font-black text-brand-primary">$1,848.00 MXN</span>
            </div>
          </div>
          <button className="w-full py-5 bg-brand-dark text-white font-black rounded-2xl hover:bg-slate-800 shadow-xl transition-all">
            CONFIRMAR Y PAGAR
          </button>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
