import React from "react";
import CryptoChart from "./components/CryptoChart";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const symbols = [
    { symbol: "BTCUSDT", name: "Bitcoin" },
    { symbol: "ETHUSDT", name: "Ethereum" },
    { symbol: "BNBUSDT", name: "Binance Coin" },
    { symbol: "ADAUSDT", name: "Cardano" },
    { symbol: "XRPUSDT", name: "Ripple" },
    { symbol: "LTCUSDT", name: "Litecoin" },
  ];

  const backgroundImageUrl = "/backgrounda4agro.jpg";
  return (
    <div
      className="min-h-screen p-8 flex flex-col"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center text-white">
        Dashbooard - Crypto-Tracking 🪙
      </h1>
      <div className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {symbols.map((crypto) => (
            <CryptoChart key={crypto.symbol} symbol={crypto.symbol} name={crypto.name} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
