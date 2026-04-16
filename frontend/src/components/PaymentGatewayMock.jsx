import React, { useState } from 'react';
const PaymentGatewayMock = () => {
  const [loading, setLoading] = useState(false);
  const handlePay = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); alert("💳 ¡Pago aprobado! Servidor en proceso de activación."); }, 2000);
  };
  return (
    <div className="bg-white py-28 px-6 border-t border-slate-100">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-[1000] text-brand-dark mb-6 tracking-tighter">Pasarela de <span className="text-brand-primary">Pago Seguro</span></h2>
          <p className="text-slate-500 font-medium mb-8">Encriptación de grado militar para tu seguridad.</p>
          <div className="flex gap-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-[10px] font-black uppercase">🛡️ SSL SECURE</div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-[10px] font-black uppercase">💳 PCI DSS</div>
          </div>
        </div>
        <div className="bg-brand-dark p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
          <form onSubmit={handlePay} className="relative z-10 space-y-6">
            <input required type="text" placeholder="Número de Tarjeta" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-brand-primary font-mono" />
            <div className="grid grid-cols-2 gap-4">
              <input required type="text" placeholder="MM/AA" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-brand-primary" />
              <input required type="password" placeholder="CVC" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-brand-primary" />
            </div>
            <button disabled={loading} className="w-full py-5 bg-brand-primary text-brand-dark font-[1000] rounded-2xl hover:bg-white transition-all shadow-xl">
              {loading ? "PROCESANDO..." : "PAGAR AHORA"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default PaymentGatewayMock;
