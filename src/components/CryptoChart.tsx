import React from "react";

interface CryptoChartProps {
  symbol: string;
}

const CryptoChart: React.FC<CryptoChartProps> = ({ symbol }) => {
  return (
    <div>
      <h2>
        {symbol}
      </h2>
    </div>
  );
};

export default CryptoChart;
