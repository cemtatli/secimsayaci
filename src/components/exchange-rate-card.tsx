const ExchangeRateCard = ({ currency }: any) => {
  return (
    <div className="bg-white rounded-md shadow">
      <div
        className="h-36 bg-cover bg-center rounded-t-md"
        style={{ backgroundImage: `url(${currency.image})` }}></div>
      <div className="p-2.5 text-gray-800 text-center font-medium">
        <p className="text-base">{currency.name}</p>
        <p>{currency.selling}TL</p>
      </div>
    </div>
  );
};

export default ExchangeRateCard;
