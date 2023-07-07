import { useEffect, useState, useContext } from "react";
import { ElectionContext } from "../context/election-context";
import { updateTimerData } from "../utils/_timer";

const Timer = () => {
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

  useEffect(() => {
    const updateData = () => {
      const updatedData = updateTimerData(countDownDate);
      if (updatedData) {
        setTimerData(updatedData);
      }
    };

    updateData();

    const timer = setInterval(() => {
      updateData();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [countDownDate]);

  return (
    <section className="grid select-none grid-cols-2 gap-4 md:grid-cols-4">
      {timerData.map((item, index) => (
        <div className="text-center dark:text-white text-slate-950" key={index}>
          <div className="text-5xl font-bold sm:text-6xl">{item.value}</div>
          <div className="text-base font-medium md:text-lg">{item.label}</div>
        </div>
      ))}
    </section>
  );
};

export default Timer;
