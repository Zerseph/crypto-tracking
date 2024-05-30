import React from 'react';
import CryptoChart from './components/CryptoChart';

const App: React.FC = () => {
  const symbols = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'ADAUSDT', 'XRPUSDT'];

  return (
    <div>
      <h1>Dashbooard - Crypto-Tracking</h1>
      <div>
        {symbols.map(symbol => (
          <CryptoChart key={symbol} symbol={symbol} />
        ))}
      </div>
    </div>
  );
};

export default App;
