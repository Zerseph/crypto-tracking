import React from "react";
import CryptoChart from "./components/CryptoChart";

const App: React.FC = () => {
  const symbols = ["BTCUSDT", "ETHUSDT", "BNBUSDT", "ADAUSDT", "XRPUSDT"];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center text-gray">
        Dashbooard - Crypto-Tracking
      </h1>
      <div className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {symbols.map((symbol) => (
            <CryptoChart key={symbol} symbol={symbol} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
