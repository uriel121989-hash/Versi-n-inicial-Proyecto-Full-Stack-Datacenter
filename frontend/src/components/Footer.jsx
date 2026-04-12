import React, { useState } from 'react';

const Footer = () => {
  // Estado para saber qué enlace está abierto
  const [openLink, setOpenLink] = useState(null);

  // Función para abrir/cerrar enlaces
  const toggleLink = (id) => {
    if (openLink === id) {
      setOpenLink(null); // Si ya está abierto, lo cierra
    } else {
      setOpenLink(id); // Si está cerrado, lo abre
    }
  };

  // Datos estructurados con sus descripciones
  const col1 = [
    { id: 'h1', title: 'WordPress Hosting', desc: 'Optimizado para WP con caché avanzado, seguridad proactiva y soporte experto.' },
    { id: 'h2', title: 'Web Hosting', desc: 'Alojamiento compartido ideal para sitios personales y pequeñas empresas.' },
    { id: 'h3', title: 'VPS Hosting', desc: 'Servidores Privados Virtuales con recursos dedicados y acceso root total.' },
    { id: 'h4', title: 'Dedicado', desc: 'Máximo rendimiento y control con servidores físicos exclusivos para tu proyecto.' },
    { id: 'h5', title: 'Reseller Hosting', desc: 'Empieza tu propia empresa de hosting usando nuestra infraestructura blanca.' },
    { id: 'h6', title: 'Creador de Páginas Web', desc: 'Diseña tu sitio web en minutos con nuestro sistema de arrastrar y soltar.' },
    { id: 'h7', title: 'Tienda en Línea', desc: 'Todo lo necesario para vender en internet de forma segura y rápida.' }
  ];

  const col2 = [
    { id: 'd1', title: 'Registrar Dominio', desc: 'Busca y asegura el nombre ideal para tu marca en internet.' },
    { id: 'd2', title: 'Transferir Dominio', desc: 'Trae tu dominio con nosotros, renuévalo y obtén beneficios exclusivos.' },
    { id: 'd3', title: 'Certificados SSL', desc: 'Protege los datos de tus clientes y mejora tu posicionamiento en Google.' },
    { id: 'd4', title: 'Email Hosting', desc: 'Cuentas de correo corporativo profesional con tu propio dominio.' },
    { id: 'd5', title: 'Migración de Sitios Web', desc: 'Mudamos tu página web hacia nuestros servidores sin costo ni interrupciones.' }
  ];

  const col3 = [
    { id: 'o1', title: 'Quienes Somos', desc: 'Conoce nuestra historia, infraestructura y visión corporativa.' },
    { id: 'o2', title: "FAQ's", desc: 'Respuestas rápidas a las dudas más frecuentes de nuestros clientes.' },
    { id: 'o3', title: 'Afiliados', desc: 'Gana comisiones recurrentes recomendando nuestros servicios.' },
    { id: 'o4', title: 'Términos', desc: 'Condiciones de servicio y políticas operativas legales.' },
    { id: 'o5', title: 'Aviso de Privacidad', desc: 'Descubre cómo protegemos y manejamos tus datos personales.' },
    { id: 'o6', title: 'Uso de Recursos', desc: 'Políticas de uso justo para garantizar la estabilidad de la red.' },
    { id: 'o7', title: 'SLA', desc: 'Acuerdo de Nivel de Servicio: nuestra garantía de 99.9% de tiempo en línea.' }
  ];

  return (
    <footer className="bg-[#1e1e1e] text-white relative">
      
      {/* SECCIÓN 1: Formas de Pago */}
      <div className="bg-[#414b56] py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-start gap-12 md:pl-20">
          <div className="text-center md:text-left">
            <p className="font-bold text-xl tracking-wide">Formas de Pago</p>
            <p className="text-xs text-gray-300 hover:text-white cursor-pointer transition mt-1">Ver Datos de Pago</p>
          </div>
          
          <div className="flex space-x-10 items-center">
            <div className="flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition">
              <div className="text-3xl">💳</div>
              <div className="w-4 h-4 bg-green-500 rounded-full text-[10px] flex items-center justify-center font-bold text-white shadow">?</div>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition">
              <div className="text-2xl font-bold text-blue-300 italic tracking-tighter">PayPal</div>
              <div className="w-4 h-4 bg-green-500 rounded-full text-[10px] flex items-center justify-center font-bold text-white shadow">?</div>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition">
              <div className="text-xl font-bold text-red-600 bg-white px-2 rounded-sm border-b-2 border-yellow-400">OXXO</div>
              <div className="w-4 h-4 bg-green-500 rounded-full text-[10px] flex items-center justify-center font-bold text-white shadow">?</div>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer hover:scale-105 transition">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏦</span>
                <span className="text-xl font-bold text-gray-300 tracking-widest">BANCOS</span>
              </div>
              <div className="w-4 h-4 bg-green-500 rounded-full text-[10px] flex items-center justify-center font-bold text-white shadow">?</div>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 2: Enlaces (Mega Menu Footer Interactivo) */}
      <div className="bg-[#1e1e1e] py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-300 md:pl-20">
          
          {/* Columna 1 */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base tracking-wide">Servicios de<br/>Hosting</h4>
            <ul className="space-y-1">
              {col1.map((item) => (
                <li key={item.id} className="w-full">
                  <div 
                    onClick={() => toggleLink(item.id)}
                    className="hover:text-white cursor-pointer transition flex justify-between items-center w-4/5 text-gray-400 py-1.5"
                  >
                    <span>{item.title}</span>
                    <span className={`text-gray-500 text-[10px] transition-transform duration-300 ${openLink === item.id ? 'rotate-90 text-[#38bdf8]' : ''}`}>
                      ▸
                    </span>
                  </div>
                  {/* Contenido desplegable */}
                  {openLink === item.id && (
                    <div className="text-xs text-gray-500 pl-3 pr-6 py-2 border-l-2 border-[#38bdf8] ml-1 mb-2 bg-[#252525] rounded-r-md">
                      {item.desc}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 2 */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base tracking-wide">Dominios y<br/>Seguridad</h4>
            <ul className="space-y-1">
              {col2.map((item) => (
                <li key={item.id} className="w-full">
                  <div 
                    onClick={() => toggleLink(item.id)}
                    className="hover:text-white cursor-pointer transition flex justify-between items-center w-4/5 text-gray-400 py-1.5"
                  >
                    <span>{item.title}</span>
                    <span className={`text-gray-500 text-[10px] transition-transform duration-300 ${openLink === item.id ? 'rotate-90 text-[#38bdf8]' : ''}`}>
                      ▸
                    </span>
                  </div>
                  {openLink === item.id && (
                    <div className="text-xs text-gray-500 pl-3 pr-6 py-2 border-l-2 border-[#38bdf8] ml-1 mb-2 bg-[#252525] rounded-r-md">
                      {item.desc}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base tracking-wide">Otros<br/>&nbsp;</h4>
            <ul className="space-y-1">
              {col3.map((item) => (
                <li key={item.id} className="w-full">
                  <div 
                    onClick={() => toggleLink(item.id)}
                    className="hover:text-white cursor-pointer transition flex justify-between items-center w-3/5 text-gray-400 py-1.5"
                  >
                    <span>{item.title}</span>
                    <span className={`text-gray-500 text-[10px] transition-transform duration-300 ${openLink === item.id ? 'rotate-90 text-[#38bdf8]' : ''}`}>
                      ▸
                    </span>
                  </div>
                  {openLink === item.id && (
                    <div className="text-xs text-gray-500 pl-3 pr-6 py-2 border-l-2 border-[#38bdf8] ml-1 mb-2 bg-[#252525] rounded-r-md w-[80%]">
                      {item.desc}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4 - Marca e Info */}
          <div>
            <div className="flex items-center gap-2 mb-6 cursor-pointer">
              <div className="w-6 h-6 bg-[#38bdf8] flex items-center justify-center rounded-sm">
                <span className="text-white font-black text-sm">W</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tighter">WEBHOSTING<span className="text-[10px] font-normal text-[#38bdf8]">.MX</span></span>
            </div>
            
            <p className="text-xs mb-6 text-gray-400 leading-relaxed pr-8">
              Web Hosting MX, proveedor de<br/>
              servicios de web hosting en México<br/>
              de alto desempeño y registrar<br/>
              acreditado de dominios .MX
            </p>

            {/* Badges de Seguridad */}
            <div className="flex gap-2 mb-6">
              <div className="border border-gray-600 rounded px-3 py-1 flex items-center justify-center bg-[#2a2f35]">
                <span className="font-black text-white text-xl tracking-tighter">.mx</span>
              </div>
              <div className="border border-gray-600 rounded px-2 py-1 flex items-center justify-center bg-[#2a2f35] gap-2">
                 <span className="text-xl">🛡️</span>
                 <span className="text-gray-300 font-bold text-[10px] leading-none text-left">SECURE<br/><span className="text-[8px] font-normal">SSL ENCRYPTION</span></span>
              </div>
            </div>

            <div className="text-xs text-gray-400 mb-4 cursor-pointer hover:text-white transition">Internacional | Europa</div>
            
            {/* Redes Sociales */}
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-[#1877f2] rounded flex items-center justify-center cursor-pointer text-white font-bold text-xs hover:opacity-80">f</div>
              <div className="w-6 h-6 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded flex items-center justify-center cursor-pointer text-white font-bold text-xs hover:opacity-80">ig</div>
              <div className="w-6 h-6 bg-[#21759b] rounded flex items-center justify-center cursor-pointer text-white font-bold text-xs hover:opacity-80">W</div>
            </div>
          </div>
          
        </div>
      </div>

      {/* SECCIÓN 3: Copyright y Créditos */}
      <div className="bg-[#111111] py-6 px-4 text-center border-t border-[#333]">
        <p className="text-gray-500 text-[11px] mb-1">
          Derechos Reservados © {new Date().getFullYear()} <strong className="text-gray-400">Web Hosting MX</strong> | El Hosting de México | <span className="text-gray-400 cursor-pointer hover:text-white transition">Mapa del Sitio</span>
        </p>
        <p className="text-gray-600 text-[10px] mb-4">
          Web Hosting y Dominios S. de R.L. de C.V.
        </p>
        
        {/* Créditos de Uriel */}
        <p className="text-gray-400 text-xs">
          Proyecto Frontend. 
          <span className="ml-1 text-[#38bdf8] font-bold tracking-wider hover:text-white cursor-default transition">
            Elaborado por Uriel Zagada.
          </span>
        </p>
      </div>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a href="#" className="fixed bottom-6 right-6 bg-[#00cbf0] hover:bg-[#00a8c6] text-white px-5 py-2.5 rounded-full flex items-center gap-2 shadow-2xl transition-all transform hover:scale-105 z-50">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
        <span className="font-semibold text-sm">WhatsApp</span>
      </a>

    </footer>
  );
};
export default Footer;
