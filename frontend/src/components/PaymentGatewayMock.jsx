import React, { useState } from 'react';

const PaymentGatewayMock = () => {
  // Estado para simular la carga del pago
  const [isProcessing, setIsProcessing] = useState(false);

  // Función que se ejecuta al darle clic en pagar
  const handlePayment = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    setIsProcessing(true); // Cambia el botón a "Procesando..."
    
    // Simulamos un retraso de 2.5 segundos de "conexión al banco"
    setTimeout(() => {
      setIsProcessing(false);
      alert('¡Aprobado! Pago simulado exitosamente.\n\nEn el futuro, esto se conectará a Stripe, PayPal o tu Backend.');
    }, 2500);
  };

  return (
    // Agregamos el ID para que los botones de la tabla bajen hasta aquí
    <div id="seccion-pago" className="bg-white py-20 px-4 border-t border-gray-200 scroll-mt-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Pasarela de Pago Segura</h2>
          <p className="text-gray-500 text-sm">Estás a un paso de obtener tu Servidor Dedicado</p>
        </div>

        {/* Convertimos esto en un <form> real */}
        <form onSubmit={handlePayment} className="flex flex-col md:flex-row gap-8">
          
          <div className="md:w-2/3 bg-gray-50 p-8 rounded-lg shadow-inner border border-gray-200">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">Datos de Facturación</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">Nombre en la tarjeta</label>
                <input required type="text" placeholder="Ej. Juan Pérez" className="w-full border border-gray-300 rounded p-3 focus:ring-2 focus:ring-brand-blue outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">Número de Tarjeta</label>
                <input required type="text" placeholder="0000 0000 0000 0000" maxLength="16" className="w-full border border-gray-300 rounded p-3 focus:ring-2 focus:ring-brand-blue outline-none font-mono" />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm font-semibold mb-1 text-gray-700">Vencimiento (MM/AA)</label>
                  <input required type="text" placeholder="12/25" maxLength="5" className="w-full border border-gray-300 rounded p-3 focus:ring-2 focus:ring-brand-blue outline-none text-center" />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-semibold mb-1 text-gray-700">CVC</label>
                  <input required type="password" placeholder="***" maxLength="3" className="w-full border border-gray-300 rounded p-3 focus:ring-2 focus:ring-brand-blue outline-none text-center font-mono" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 bg-brand-dark text-white p-6 rounded-lg shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">Resumen</h3>
              <div className="flex justify-between text-sm mb-3 text-gray-300">
                <span>Servidor M1 (1 mes)</span>
                <span>$1,848.00</span>
              </div>
              <div className="flex justify-between text-sm mb-4 text-gray-300">
                <span>IVA (16%)</span>
                <span>$295.68</span>
              </div>
              <div className="flex justify-between text-xl font-bold border-t border-gray-600 pt-4 mb-6">
                <span>Total MXN</span>
                <span className="text-green-400">$2,143.68</span>
              </div>
            </div>
            
            <div>
              <button 
                type="submit" 
                disabled={isProcessing}
                className={`w-full py-4 rounded-lg font-bold text-center transition-all ${
                  isProcessing ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
                }`}
              >
                {isProcessing ? 'Procesando Pago...' : 'Pagar de Forma Segura'}
              </button>
              <p className="text-xs text-gray-400 text-center mt-4">🔒 Transacción encriptada con SSL de 256 bits.</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PaymentGatewayMock;
