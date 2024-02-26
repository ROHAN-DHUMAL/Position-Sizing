import { useEffect, useState } from "react";

const riskPercentage = [1, 2, 3, 4, 5, 6, 7];

function App() {
  const [capital, setCapital] = useState(5000);
  const [risk, setRisk] = useState(1);
  const [stopLoss, setStopLoss] = useState(5);
  const [numberOfShare, setNumberOfShare] = useState(0);

  useEffect(() => {
    const newPositionSize = (capital * (risk / 100)) / stopLoss;
    setNumberOfShare(newPositionSize);
  }, [capital, risk, stopLoss]);

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center space-y-4 bg-gradient-to-br from-blue-500 to-purple-500 p-8 rounded-lg shadow-lg">
        <div className="w-full max-w-md bg-white bg-opacity-30 backdrop-blur-sm border border-gray-300 rounded-lg p-4">
          <label className="block mb-2 text-white">Capital: </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            type="number"
            value={capital}
            onChange={(e) => setCapital(parseFloat(e.target.value))}
          />
        </div>
        <div className="w-full max-w-md bg-white bg-opacity-30 backdrop-blur-sm border border-gray-300 rounded-lg p-4">
          <label className="block mb-2 text-white">Risk Percentage: </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            value={risk}
            onChange={(e) => setRisk(parseFloat(e.target.value))}
          >
            {riskPercentage.map((item, index) => (
              <option key={index} value={item}>
                {item}%
              </option>
            ))}
          </select>
        </div>
        <div className="w-full max-w-md bg-white bg-opacity-30 backdrop-blur-sm border border-gray-300 rounded-lg p-4">
          <label className="block mb-2 text-white">Stop Loss: </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            type="number"
            value={stopLoss}
            onChange={(e) => setStopLoss(parseFloat(e.target.value))}
          />
        </div>
        <div className="w-full max-w-md bg-white bg-opacity-30 backdrop-blur-sm border border-gray-300 rounded-lg p-4">
          <label className="block mb-2 text-white">Position Size: </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
            type="number"
            value={numberOfShare}
            readOnly
          />
        </div>
      </div>

    </>
  );
}

export default App;
