import React, { useState } from 'react';

const Footer = () => {
  const [openService, setOpenService] = useState(null);
  const [openSecurity, setOpenSecurity] = useState(null);

  const services = [
    { t: 'WordPress Hosting', d: 'Servidores optimizados para que tu sitio WP vuele con seguridad total.' },
    { t: 'Web Hosting', d: 'Ideal para pequeñas y medianas empresas con soporte 24/7.' },
    { t: 'VPS Hosting', d: 'Potencia flexible con recursos garantizados y acceso root.' },
    { t: 'Dedicado', d: 'Máximo rendimiento. Todo el servidor físico solo para ti.' }
  ];

  return (
    <>
      <footer className="bg-brand-dark text-white pt-10 overflow-hidden relative border-t border-brand-primary/20">
        <div className="bg-[#151E32] py-10 px-6 border-b border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <h4 className="text-brand-primary font-black text-xl tracking-tight uppercase">Formas de Pago</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['💳 Tarjetas', 'PayPal', 'OXXO', '🏦 Bancos'].map((p, i) => (
                <div key={i} className="bg-white/5 px-6 py-3 rounded-2xl font-black text-sm border border-white/10 hover:bg-brand-primary transition-all cursor-default">{p}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="text-3xl font-[1000] tracking-tighter">WEBHOSTING<span className="text-brand-primary">.MX</span></div>
            <p className="text-slate-400 text-sm">Líderes en México. Infraestructura Enterprise con soporte local experto.</p>
          </div>
          <div>
            <h5 className="text-brand-primary font-black uppercase text-xs mb-8">Servicios</h5>
            <ul className="space-y-2">
              {services.map((s, i) => (
                <li key={i} className="border-b border-white/5 pb-2">
                  <button onClick={() => setOpenService(openService === i ? null : i)} className="w-full text-left text-sm font-bold text-slate-400 hover:text-white flex justify-between">
                    <span>{s.t}</span><span>+</span>
                  </button>
                  {openService === i && <p className="text-[11px] text-slate-500 italic mt-2">{s.d}</p>}
                </li>
              ))}
            </ul>
          </div>
          <div><h5 className="text-brand-primary font-black uppercase text-xs mb-8">Confianza</h5><p className="text-xs text-slate-400">🛡️ PCI DSS Compliant<br/>🔒 SSL 256-bit Secure</p></div>
          <div className="bg-white/5 p-6 rounded-[32px] border border-white/10">
             <h4 className="font-bold mb-4">Newsletter</h4>
             <input type="text" placeholder="Tu email..." className="w-full bg-transparent border border-white/10 p-3 rounded-xl text-xs mb-2 outline-none" />
             <button className="w-full bg-brand-primary p-3 rounded-xl text-xs font-black">UNIRME</button>
          </div>
        </div>

        <div className="bg-black/40 py-8 px-6 text-center">
           <p className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">© 2026 WEBHOSTING MX | ELABORADO POR URIEL ZAGADA</p>
        </div>
      </footer>

      {/* BOTÓN WHATSAPP FLOTANTE */}
      <a 
        href="https://wa.me/521234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group overflow-hidden"
      >
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 animate-pulse"></div>
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>
    </>
  );
};
export default Footer;
