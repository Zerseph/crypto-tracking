const BASE_URL = 'https://api.binance.com';

export const getMarketData = async (symbol: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/v3/ticker/price?symbol=${symbol}`);
    if (!response.ok) {
      const errorDetails = await response.json();
      console.error('Error fetching data:', errorDetails);
      throw new Error(`Failed to fetch market data: ${errorDetails.msg}`);
    }
    return response.json();
  } catch (error) {
    console.error('Network or server error:', error);
    throw new Error('Network or server error');
  }
};
