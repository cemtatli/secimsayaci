import React, { useEffect, useState } from "react";
import { getExchangeRates } from "../services/exchange";

interface Currency {
  Isim: string;
  CurrencyName: string;
  BanknoteBuying: number;
  BanknoteSelling: number;
}

const ExchangeRatesComponent: React.FC = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const rates = await getExchangeRates();
        setCurrencies(
          rates.filter(
            (currency: Currency) =>
              currency.CurrencyName === "US DOLLAR" ||
              currency.CurrencyName === "EURO" ||
              currency.CurrencyName === "POUND STERLING"
          )
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchExchangeRates();
  }, []);

  const formatCurrencyName = (name: string) => {
    switch (name) {
      case "US DOLLAR":
        return "USD - Amerikan Doları";
      case "EURO":
        return "EUR - Euro";
      case "POUND STERLING":
        return "GBP - İngiliz Sterlini";
      default:
        return name;
    }
  };

  return (
    <section className="container mx-auto">
      <h2 className="font-semibold text-base dark:text-white text-center md:text-start">
        Anlık Döviz Kurları
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {currencies.map((currency) => (
          <div
            className="border border-zinc-200 text-sm font-medium dark:border-zinc-700 dark:bg-zinc-900 dark:text-white rounded-lg p-2 flex flex-col justify-center items-center"
            key={currency.CurrencyName}
          >
            <h3 className="text-base text-center font-semibold mb-2">
              {formatCurrencyName(currency.CurrencyName)}
            </h3>
            <div className="text-sm">
              <div className="flex flex-col gap-1.5">
                <span>
                  <strong>Alış:</strong> {currency?.BanknoteBuying?.toFixed(2)} ₺
                </span>
                <span>
                  <strong>Satış:</strong> {currency?.BanknoteSelling?.toFixed(2)} ₺
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExchangeRatesComponent;
