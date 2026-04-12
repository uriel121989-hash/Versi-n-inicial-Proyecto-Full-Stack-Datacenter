import React, { useState, useEffect } from 'react';

const PricingTable = () => {
  // 1. Estados para guardar los datos y controlar la pantalla de carga
  const [servers, setServers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. useEffect: Se ejecuta automáticamente al abrir la página
  useEffect(() => {
    // Llamamos a la API de tu Backend
    fetch('https://versi-n-inicial-proyecto-full-stack.onrender.com/api/servers')
      .then((response) => {
        if (!response.ok) throw new Error('Error al conectar con el servidor');
        return response.json();
      })
      .then((data) => {
        setServers(data); // Guardamos los datos de la base de datos
        setLoading(false); // Apagamos el mensaje de carga
      })
      .catch((err) => {
        console.error(err);
        setError('No se pudo conectar con la base de datos.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-[#111111] py-16 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 tracking-tight">
          Servidores Dedicados <span className="text-[#38bdf8]">Premium</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 text-sm md:text-base">
          Datos extraídos en tiempo real desde nuestra base de datos PostgreSQL en la nube.
        </p>

        {/* Pantalla de Carga */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-[#38bdf8] border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-[#38bdf8] font-bold animate-pulse tracking-widest">CONECTANDO A SUPABASE...</p>
          </div>
        )}

        {/* Pantalla de Error */}
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg text-center max-w-2xl mx-auto">
            <span className="text-2xl block mb-2">⚠️</span>
            {error} <br/> <span className="text-xs text-gray-400">¿El backend en el puerto 3000 está encendido?</span>
          </div>
        )}

        {/* Tabla Real renderizada desde la Base de Datos */}
        {!loading && !error && (
          <div className="overflow-x-auto shadow-2xl rounded-xl border border-[#333] bg-[#1e1e1e]">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-[#2a2f35] text-gray-300 text-xs md:text-sm uppercase tracking-wider border-b border-gray-600">
                  <th className="py-5 px-6 font-bold rounded-tl-xl">Modelo</th>
                  <th className="py-5 px-6 font-bold">RAM</th>
                  <th className="py-5 px-6 font-bold">Procesador</th>
                  <th className="py-5 px-6 font-bold">Disco Duro</th>
                  <th className="py-5 px-6 font-bold">Raid</th>
                  <th className="py-5 px-6 font-bold">Uplink</th>
                  <th className="py-5 px-6 font-bold">Precio</th>
                  <th className="py-5 px-6 font-bold text-center rounded-tr-xl">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700/50">
                {servers.map((server) => (
                  <tr key={server.id} className="hover:bg-[#252a30] transition-colors duration-200 group">
                    <td className="py-5 px-6">
                      <span className="bg-[#2a2f35] text-[#38bdf8] font-black px-3 py-1 rounded text-lg border border-[#333] group-hover:border-[#38bdf8] transition-colors">
                        {server.id}
                      </span>
                    </td>
                    <td className="py-5 px-6 font-bold text-gray-200 text-lg">{server.ram}</td>
                    <td className="py-5 px-6">
                      <div className="font-bold text-white text-base">{server.cpu}</div>
                      <div className="text-xs text-gray-500 font-medium tracking-wide mt-0.5">{server.cpu_sub}</div>
                    </td>
                    <td className="py-5 px-6 text-sm text-gray-300 font-medium">{server.disk}</td>
                    <td className="py-5 px-6 text-sm text-gray-300">{server.raid}</td>
                    <td className="py-5 px-6 text-sm text-gray-300">{server.bw}</td>
                    <td className="py-5 px-6 text-xl font-black text-white">
                      {server.price} <span className="text-xs text-gray-500 font-normal">/mes</span>
                    </td>
                    <td className="py-5 px-6 text-center">
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.4)] hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] transform hover:-translate-y-1 transition-all">
                        Contratar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingTable;
