import axios from "axios";

export const getExchangeRates = async (): Promise<{ [key: string]: number }> => {
  try {
    const response = await axios.get("http://hasanadiguzel.com.tr/api/kurgetir");
    return response.data.TCMB_AnlikKurBilgileri;
  } catch (error) {
    throw new Error("Döviz kurları alınırken bir hata oluştu.");
  }
};