import axios from "axios";

export const getExchangeRates = async (): Promise<{ [key: string]: any }> => {
  try {
    const response = await axios.get("https://finans.truncgil.com/v3/today.json");
    return response.data;
  } catch (error) {
    throw new Error("Döviz kurları alınırken bir hata oluştu.");
  }
};
