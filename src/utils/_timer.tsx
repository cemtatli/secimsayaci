export const formatValue = (value: any) => {
  return value.toString().padStart(2, "0");
};

export const updateTimerData = (countDownDate: any) => {
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

    return updatedTimerData;
  }

  return null;
};
