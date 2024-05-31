import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getMarketData } from "../services/binanceApi";

interface CryptoChartProps {
  symbol: string;
}

const CryptoChart: React.FC<CryptoChartProps> = ({ symbol }) => {
  const [data, setData] = useState<{ time: number; price: number }[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getMarketData(symbol);
        setData((prevData) => {
          return [...prevData, { time: Date.now(), price: parseFloat(result.price) }];
        });
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Unknown error");
        }
      }
    };
    const interval = setInterval(fetchData, 5000); //Aqui actualizo cada 5sg para obtener resultados en tiempo real
    return () => clearInterval(interval); // Aqui evito que se siga ejecutando cuando el componente se desmonta
  }, [symbol]);

  const chartOptions = {
    chart: {
      id: "realtime",
    },
    xaxis: {
      type: "datetime" as "datetime",
    },
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        {symbol}
      </h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <Chart
          options={chartOptions}
          series={[{ name: symbol, data: data.map((d) => [d.time, d.price]) }]}
          type="line"
          height="300"
        />
      )}
    </div>
  );
};

export default CryptoChart;
