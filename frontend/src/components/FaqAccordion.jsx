import React, { useState } from 'react';

const FaqAccordion = () => {
  // Estado para saber cuál pregunta está abierta
  const [activeIndex, setActiveIndex] = useState(null);

  // Array con las preguntas y respuestas simuladas
  const faqs = [
    { q: "¿Que es un Servidor Dedicado?", a: "Es un equipo físico completo exclusivo para tu uso. No compartes recursos (RAM, CPU, Disco) con ningún otro cliente, lo que garantiza el máximo rendimiento." },
    { q: "Diferencia de Servidores Dedicados con VPS Hosting", a: "En un VPS compartes el hardware físico con otros usuarios virtualmente. En un Dedicado, todo el servidor físico y su potencia son 100% tuyos." },
    { q: "Diferencia de hosting compartido y Servidor Dedicado", a: "El hosting compartido es para sitios pequeños y compartes todo. El dedicado te da libertad total para instalar cualquier software y soporta alto tráfico." },
    { q: "¿Cómo administro mi Servidor Dedicado?", a: "Te entregamos accesos completos de Administrador/Root. Podrás acceder vía SSH (Linux) o Escritorio Remoto (Windows)." },
    { q: "¿Que puedo hacer con un Servidor Dedicado?", a: "Alojar aplicaciones empresariales, bases de datos masivas, crear tu propia empresa de hosting web, o alojar tiendas online de alto tráfico." },
    { q: "¿Que sistema operativo debo de usar?", a: "Depende de tus necesidades. Ofrecemos diversas versiones de Linux (Ubuntu, AlmaLinux, Debian) y Windows Server." },
    { q: "Razones para contratar un Servidor Dedicado", a: "Mayor seguridad, rendimiento superior, personalización sin límites y tiempos de carga ultrarrápidos para tus usuarios." },
    { q: "¿Cuanto cuesta rentar un Servidor Dedicado?", a: "Nuestros planes empiezan desde $1,848.00 MXN mensuales, con descuentos si pagas anual o semestralmente." }
  ];

  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Preguntas Frecuentes</h2>
          <p className="text-gray-500 text-sm">Damos respuesta a dudas básicas sobre Servidores Dedicados.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded shadow-sm border border-gray-100 overflow-hidden">
              <div 
                className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition select-none"
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              >
                <span className="text-sm font-semibold text-gray-700">{faq.q}</span>
                <span className="text-2xl text-gray-400 font-light leading-none">
                  {activeIndex === i ? '−' : '+'}
                </span>
              </div>
              
              {/* Esta es la subsección que se despliega */}
              {activeIndex === i && (
                <div className="p-4 bg-gray-50 border-t border-gray-100 text-sm text-gray-600 animate-fade-in-down">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-btn-green hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-sm shadow-md transition">
            ¿DESEAS MÁS INFORMACIÓN?
          </button>
        </div>
      </div>
    </div>
  );
};
export default FaqAccordion;
