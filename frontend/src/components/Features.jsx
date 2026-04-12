import React from 'react';

const Features = () => {
  return (
    <div className="bg-white py-20 px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 flex justify-center">
           {/* Placeholder de la imagen del círculo con cuadrados */}
           <div className="w-80 h-80 rounded-full border-4 border-yellow-400 bg-brand-dark flex flex-wrap justify-center items-center p-8 gap-2 shadow-xl">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-16 h-16 bg-blue-500 rounded border-2 border-brand-light-blue"></div>
              ))}
           </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">¿Por qué Contratar un Servidor Dedicado?</h2>
          <p className="font-semibold mb-4 text-gray-700">Beneficios:</p>
          <ul className="space-y-4">
            {[
              'El mejor rendimiento con acceso completo al hardware de tu Servidor Dedicado',
              'Mayor seguridad, puedes configurar las reglas del firewall libremente',
              'Uso de recursos exclusivos, CPU, RAM, Discos y Ancho de Banda',
              'Soporte para aplicaciones exigentes con bases de datos grandes',
              'Control administrativo completo: Acceso root o administrador'
            ].map((item, index) => (
              <li key={index} className="flex items-start text-sm text-gray-600">
                <span className="text-orange-500 mr-2 font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Features;
