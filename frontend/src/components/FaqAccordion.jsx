import React, { useState } from 'react';

const FaqAccordion = () => {
  const [sel, setSel] = useState(null);

  const faqs = [
    { 
      q: "¿Tienen centros de datos en México?", 
      a: "Sí, operamos en centros de datos Tier III ubicados estratégicamente en Querétaro y CDMX para garantizar latencias menores a 20ms en todo el país.",
      icon: "🇲🇽"
    },
    { 
      q: "¿Puedo personalizar mi servidor?", 
      a: "Totalmente. Puedes escalar RAM, almacenamiento NVMe y elegir entre diversos procesadores Intel Xeon o AMD EPYC según tus necesidades.",
      icon: "⚙️"
    },
    { 
      q: "¿Cuánto tiempo tarda la activación?", 
      a: "Nuestros servidores pre-configurados se entregan en menos de 4 horas. Los equipos con hardware personalizado pueden tardar hasta 24 horas.",
      icon: "⏱️"
    },
    { 
      q: "¿Incluyen protección contra ataques DDoS?", 
      a: "Sí, todos nuestros planes incluyen mitigación DDoS de nivel empresarial de hasta 1Tbps de forma nativa y sin costo adicional.",
      icon: "🛡️"
    },
    { 
      q: "¿Qué sistemas operativos puedo instalar?", 
      a: "Soportamos todas las distribuciones de Linux (Ubuntu, Debian, CentOS, AlmaLinux) y versiones licenciadas de Windows Server.",
      icon: "🐧"
    },
    { 
      q: "¿Tienen contratos forzosos?", 
      a: "No. Creemos en la libertad de nuestros clientes. Ofrecemos contratos mensuales flexibles que puedes cancelar en cualquier momento sin penalizaciones.",
      icon: "📄"
    },
    { 
      q: "¿El soporte técnico es 24/7?", 
      a: "Exacto. Nuestro equipo de ingenieros expertos está disponible por ticket, chat y teléfono los 365 días del año para cualquier emergencia.",
      icon: "👨‍💻"
    },
    { 
      q: "¿Cómo accedo a mi servidor dedicado?", 
      a: "Te entregamos acceso Root total vía SSH para Linux o Escritorio Remoto (RDP) para Windows, además de una consola IPMI para gestión fuera de banda.",
      icon: "🔑"
    }
  ];

  return (
    <div className="bg-brand-bg py-28 px-6 relative overflow-hidden">
      {/* Círculo decorativo de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-secondary/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-4">
            <span className="text-brand-primary text-[10px] font-black tracking-widest uppercase">Centro de Ayuda</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-[1000] text-brand-dark mb-4 tracking-tighter">
            Preguntas <span className="text-brand-primary">Frecuentes</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            Resolvemos tus dudas técnicas para que puedas enfocarte en hacer crecer tu negocio con la mejor infraestructura de México.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <div 
              key={i} 
              className={`group transition-all duration-500 rounded-3xl border ${
                sel === i 
                ? 'bg-white border-brand-primary shadow-xl shadow-orange-100 scale-[1.02]' 
                : 'bg-white/50 border-slate-200 hover:border-brand-secondary hover:bg-white shadow-sm'
              }`}
            >
              <button 
                onClick={() => setSel(sel === i ? null : i)} 
                className="w-full p-7 text-left flex justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <span className={`text-2xl transition-transform duration-300 ${sel === i ? 'scale-125' : 'group-hover:scale-110'}`}>
                    {f.icon}
                  </span>
                  <span className={`font-bold text-lg leading-tight ${sel === i ? 'text-brand-dark' : 'text-slate-700'}`}>
                    {f.q}
                  </span>
                </div>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  sel === i ? 'bg-brand-primary border-brand-primary text-white rotate-180' : 'border-slate-300 text-slate-400'
                }`}>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                sel === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-7 pb-7 pt-2 text-slate-500 font-medium leading-relaxed border-t border-slate-100 mt-2 italic">
                  {f.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-brand-dark rounded-[40px] text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <span className="text-9xl text-white font-black">?</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4 relative z-10">
            ¿Aún tienes dudas técnicas?
          </h3>
          <p className="text-slate-400 mb-8 relative z-10">
            Nuestros arquitectos de soluciones están listos para diseñar tu infraestructura ideal.
          </p>
          <button className="bg-brand-primary hover:bg-orange-600 text-white font-black px-12 py-4 rounded-2xl transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-900/20 relative z-10">
            HABLAR CON UN INGENIERO
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
