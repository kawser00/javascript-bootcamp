const getCurrentTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const twelveHoursFormat = hours > 12 ? hours - 12 : hours;
  const hoursFormat   = timeFormat(twelveHoursFormat);
  const minutesFormat = timeFormat(minutes);
  const secondsFormat = timeFormat(seconds);

  console.log(`${hoursFormat}:${minutesFormat}:${secondsFormat}`);
};

const timeFormat = (timeType) => {
  return timeType < 10 ? "0" + timeType : timeType;
}

const timer = setInterval(() => {
  getCurrentTime();
}, 1000);

clearInterval(timer);
