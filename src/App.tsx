import React, { useState } from 'react';

// Основной компонент приложения
const App = () => {
  // Состояние 3D-эффекта
  const [is3D, setIs3D] = useState(false);

  // Обработчик наведения мыши
  const handleMouseOver = () => {
    setIs3D(true);
  };

  // Обработчик ухода мыши
  const handleMouseOut = () => {
    setIs3D(false);
  };

  // Обработчик оплаты
  const handlePay = () => {
    // Открыть форму оплаты
    const form = document.getElementById('payment-form');
    form.style.display = 'block';
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Основной блок с 3D-эффектом */}
      <div
        className={`transition duration-500 ${is3D ? 'w-16 h-16 bg-blue-500 rounded-lg shadow-md transform rotate-x-45 rotate-y-45' : 'w-16 h-16 bg-blue-500'}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {/* Дополнительный блок для 3D-эффекта */}
        {is3D && (
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-50 transform -rotate-x-45 -rotate-y-45" />
        )}
      </div>

      {/* Форма оплаты */}
      <form id="payment-form" className="hidden" onSubmit={handlePay}>
        <h2 className="text-lg font-bold mb-4">Оплата картой Мир</h2>
        <input type="text" placeholder="Номер карты" className="w-full p-2 mb-4 border border-gray-400" />
        <input type="text" placeholder="Срок действия" className="w-full p-2 mb-4 border border-gray-400" />
        <input type="text" placeholder="Код безопасности" className="w-full p-2 mb-4 border border-gray-400" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Оплатить</button>
      </form>

      {/* Кнопка оплаты */}
      <button onClick={handlePay} className="bg-blue-500 text-white p-2 rounded-lg mt-4">Оплатить картой Мир</button>
    </div>
  );
};

export default App;