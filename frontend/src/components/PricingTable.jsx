import React, { useState, useEffect } from 'react';

const PricingTable = () => {
  // --- LÓGICA PARA SERVIDORES DEDICADOS (API) ---
  const [servers, setServers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://versi-n-inicial-proyecto-full-stack.onrender.com/api/servers')
      .then(res => res.json())
      .then(data => { setServers(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  // --- LÓGICA PARA CLOUD VPS (DINÁMICO) ---
  const [vpsType, setVpsType] = useState('linux');
  const vpsPlans = [
    { id: 1, name: '1 SLICE', base: 3, cpu: '1 Cores', ram: '2GB', ssd: '40GB' },
    { id: 2, name: '2 SLICE', base: 6, cpu: '1 Cores', ram: '4GB', ssd: '80GB' },
    { id: 3, name: '3 SLICE', base: 9, cpu: '2 Cores', ram: '6GB', ssd: '120GB' },
    { id: 4, name: '4 SLICE', base: 12, cpu: '2 Cores', ram: '8GB', ssd: '160GB' },
  ];

  const getVpsPrice = (base) => {
    if (vpsType === 'storage') return base + 1;
    if (vpsType === 'windows') return base + 2;
    return base;
  };

  return (
    <div id="pricing-section">
      
      {/* SECCIÓN 1: SERVIDORES DEDICADOS (DISEÑO OSCURO) */}
      <div className="bg-[#0B0F1A] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-[1000] text-white mb-2 tracking-tighter">
              Servidores Dedicados <span className="text-brand-secondary">Premium</span>
            </h2>
            <p className="text-slate-400 text-sm font-medium">Datos extraídos en tiempo real desde la base de datos PostgreSQL.</p>
          </div>

          {loading ? (
            <div className="flex justify-center py-10"><div className="w-10 h-10 border-4 border-brand-secondary border-t-transparent rounded-full animate-spin"></div></div>
          ) : (
            <div className="overflow-x-auto rounded-2xl border border-white/5 shadow-2xl bg-[#111827]">   
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-slate-400 uppercase text-[10px] tracking-widest border-b border-white/5 bg-white/5">
                    <th className="p-5 font-black">Modelo</th>
                    <th className="p-5 font-black">RAM</th>
                    <th className="p-5 font-black">Procesador</th>
                    <th className="p-5 font-black">Disco</th>
                    <th className="p-5 font-black">Precio</th>
                    <th className="p-5 text-center font-black">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {servers.map((s) => (
                    <tr key={s.id} className="hover:bg-white/5 transition-colors text-white">
                      <td className="p-5 font-black text-brand-secondary italic">{s.id}</td>
                      <td className="p-5 font-bold">{s.ram}</td>
                      <td className="p-5">
                         <div className="font-bold">{s.cpu}</div>
                         <div className="text-[10px] text-slate-500">{s.cpu_sub}</div>
                      </td>
                      <td className="p-5 text-slate-400">{s.disk}</td>
                      <td className="p-5 font-black text-lg">{s.price} <span className="text-[10px] text-slate-500">/mes</span></td>
                      <td className="p-5 text-center">
                        <button className="bg-brand-secondary hover:bg-sky-500 text-white font-black px-6 py-2 rounded-lg text-xs shadow-lg shadow-sky-900/20 transition-all">Contratar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* SECCIÓN 2: CLOUD VPS (LO QUE PIDIÓ EL CLIENTE - DISEÑO CLARO) */}
      <div className="bg-brand-bg py-24 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-[1000] text-brand-dark mb-4 tracking-tighter">Planes <span className="text-brand-primary">Cloud VPS</span></h2>
            <p className="text-slate-500 font-medium">Lógica dinámica de precios según el sistema operativo.</p>
          </div>

          {/* Selector de SO (TABS) */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-white p-1.5 rounded-2xl shadow-xl border border-slate-200">    
              {['linux', 'storage', 'windows'].map((type) => (
                <button
                  key={type}
                  onClick={() => setVpsType(type)}
                  className={`flex items-center gap-3 px-8 py-3 rounded-xl font-black text-xs uppercase tracking-tighter transition-all ${vpsType === type ? 'bg-brand-secondary text-white shadow-lg shadow-sky-200' : 'text-slate-400 hover:bg-slate-50'}`}
                >
                  {type === 'linux' ? '🐧 Linux' : type === 'storage' ? '☁️ Storage' : '🪟 Windows'}      
                </button>
              ))}
            </div>
          </div>

          {/* Cards de Precios VPS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {vpsPlans.map((plan) => (
              <div key={plan.id} className={`bg-white rounded-[32px] p-10 border-2 transition-all duration-500 hover:shadow-2xl ${plan.id === 2 ? 'border-brand-secondary scale-105 z-10' : 'border-slate-50 shadow-sm'}`}>
                <div className="text-center mb-8">
                  <p className="text-brand-secondary font-black text-xs tracking-widest mb-4 uppercase">{plan.name}</p>
                  <div className="flex justify-center items-start">
                    <span className="text-2xl font-black text-brand-dark mt-2">$</span>
                    <span className="text-7xl font-[1000] text-brand-dark tracking-tighter">{getVpsPrice(plan.base)}</span>
                  </div>
                  <p className="text-slate-400 text-[9px] font-black uppercase mt-1">Per Month</p>        
                </div>
                <div className="space-y-4 mb-10 border-t border-slate-50 pt-8">
                  {[plan.cpu, plan.ram, plan.ssd, '10Gbps Port'].map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-brand-primary font-bold">✓</span>
                      <span className="text-slate-600 font-bold text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <button className={`w-full py-4 rounded-full font-black text-sm transition-all shadow-lg ${plan.id === 2 ? 'bg-brand-primary text-white hover:bg-orange-600' : 'bg-brand-secondary text-white hover:bg-sky-600'}`}>
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default PricingTable;
