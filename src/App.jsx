import { useState } from 'react';

const App = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [response, setResponse] = useState(null);
  const [showNewImage, setShowNewImage] = useState(false);

  const handleNoButtonHover = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100; 
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const handleYesClick = () => {
    setResponse('Ура, так и знал ;)');
    setShowNewImage(true);
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-4">
        <div>
          {showNewImage ? (
            <img className="w-96" src="bear-kisses.gif" alt="happy bear" />
          ) : (
            <img className="w-96" src="jump-bear.gif" alt="jump bear" />
          )}
        </div>

        
        {!response && (
          <div>
            <h1 className="text-3xl font-bold">Ты согласна стать моей Валентинкой?</h1>
          </div>
        )}

        {response ? (
          <div className="text-2xl text-pink-600 animate-bounce">{response}</div>
        ) : (
          <div className="flex gap-4 relative">
            <button
              onClick={handleYesClick}
              className="px-6 py-2 bg-green-600 text-white rounded-lg
                hover:bg-green-700 transform transition-all duration-300
                hover:scale-110 active:scale-95 shadow-lg
                focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Да
            </button>

            <div className="relative" style={{ transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)` }}>
              <button
                onMouseEnter={handleNoButtonHover}
                className="px-6 py-2 bg-red-500 text-white rounded-lg
                  cursor-not-allowed transform transition-all duration-300
                  shadow-lg focus:outline-none"
              >
                Нет
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default App