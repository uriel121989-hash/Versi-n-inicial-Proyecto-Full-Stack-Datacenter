import React from 'react';
const Features = () => {
  const items = [
    { t: "99.9% Uptime", d: "Garantía de disponibilidad para tu negocio.", i: "💎" },
    { t: "Soporte Local", d: "Expertos en México listos para ayudarte 24/7.", i: "🇲🇽" },
    { t: "Conexión 1Gbps", d: "Velocidad de red premium sin cuellos de botella.", i: "🚀" },
    { t: "Hardware Nuevo", d: "Equipos de última generación Intel y AMD.", i: "🛠️" }
  ];
  return (
    <div className="bg-white py-24 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 grid grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div key={i} className="p-8 bg-brand-bg/50 border border-brand-secondary/10 rounded-2xl hover:bg-brand-bg transition-all group">
              <div className="text-3xl mb-4">{item.i}</div>
              <h3 className="text-brand-dark font-black mb-2">{item.t}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 leading-tight">Infraestructura <br/><span className="text-brand-secondary">de confianza.</span></h2>
          <p className="text-slate-500 text-lg mb-8 leading-relaxed font-medium">Diseñamos soluciones que se adaptan al crecimiento de tu empresa con seguridad y escalabilidad.</p>
          <button className="bg-brand-secondary text-white px-8 py-3 rounded-lg font-bold hover:bg-sky-600 transition-all shadow-lg shadow-sky-100">SABER MÁS</button>
        </div>
      </div>
    </div>
  );
};
export default Features;
