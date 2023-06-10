import React, { useEffect, useState, useContext } from "react";
import { ElectionContext } from "../context/election-context";

const Timer: React.FC = () => {
  const { electionType } = useContext(ElectionContext);
  const countDownDate = new Date(
    electionType === "yerel" ? "2024-03-31T00:00:00" : "2028-05-14T00:00:00"
  ).getTime();
  const [timerData, setTimerData] = useState([
    { label: "Gün", value: "00" },
    { label: "Saat", value: "00" },
    { label: "Dakika", value: "00" },
    { label: "Saniye", value: "00" },
  ]);

  const formatValue = (value: number) => {
    return value.toString().padStart(2, "0");
  };

  const updateTimerData = () => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const updatedTimerData = [
        { label: "Gün", value: formatValue(days) },
        { label: "Saat", value: formatValue(hours) },
        { label: "Dakika", value: formatValue(minutes) },
        { label: "Saniye", value: formatValue(seconds) },
      ];

      setTimerData(updatedTimerData);
    }
  };

  useEffect(() => {
    updateTimerData(); // İlk render'da sayaç değerlerini güncellemek için çağırıyoruz.

    const timer = setInterval(() => {
      updateTimerData();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [electionType]);

  return (
    <div className="grid select-none grid-cols-2 gap-4 md:grid-cols-4">
      {timerData.map((item, index) => (
        <div className="text-center dark:text-white text-slate-950" key={index}>
          <div className="text-5xl font-bold sm:text-6xl">{item.value}</div>
          <div className="text-base font-medium md:text-lg">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Timer;
