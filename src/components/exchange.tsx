import React, { useEffect, useState } from "react";
import { getExchangeRates } from "../api/exchange"; // assuming you've imported the getExchangeRates function from the appropriate file
import ExchangeRateCard from "./exchange-rate-card";

const ExchangeRatesComponent: React.FC = () => {
  const [exchangeRates, setExchangeRates] = useState<any>(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const data = await getExchangeRates();
        setExchangeRates(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchExchangeRates();
  }, []);

  return <ExchangeRatesList exchangeRates={exchangeRates} />;
};

const ExchangeRatesList: React.FC<{ exchangeRates: any }> = ({ exchangeRates }) => {
  if (!exchangeRates) {
    return null;
  }

  const { USD, EUR, GBP, "gram-altin": gramAltin } = exchangeRates;

  const currencies = [
    {
      name: "USD",
      selling: USD.Selling,
      image: "https://i01.sozcucdn.com/wp-content/uploads/2023/07/06/dolar-ne-kadar-depo.jpg",
    },
    {
      name: "EUR",
      selling: EUR.Selling,
      image:
        "https://static4.depositphotos.com/1000781/384/i/450/depositphotos_3843513-stock-photo-euro-banknotes.jpg",
    },
    {
      name: "GBP",
      selling: GBP.Selling,
      image:
        "https://s.yimg.com/ny/api/res/1.2/OaVragOQnACnIqO.IqEsHA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/fx_empire_176/805ac4fa80b2d794c96bc6ea6dc62817",
    },
    {
      name: "Gram Altın",
      selling: gramAltin.Selling,
      image:
        "https://iaftm.tmgrup.com.tr/af6362/1200/627/0/31/874/488?u=https://iftm.tmgrup.com.tr/2021/12/22/gram-altin-kac-tl-gram-altin-dustu-mu-gram-altin-fiyati-22-aralik-1640145044059.jpeg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {currencies.map((currency) => (
        <ExchangeRateCard key={currency.name} currency={currency} />
      ))}
    </div>
  );
};

export default ExchangeRatesComponent;
