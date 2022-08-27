import React, { useEffect, useRef, useState } from "react";
// import { CompetitionEksternal } from "../Data";
function CountDownTimer() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("Oct 19, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  });
  return (
    <>
      <div>
        <p className="number">{timerDays}</p>
        <p>
          <small>Days</small>
        </p>
      </div>
      <div>
        <p className="number">{timerHours}</p>
        <p>
          <small>Hours</small>
        </p>
      </div>
      <div>
        <p className="number">{timerMinutes}</p>
        <p>
          <small>Minutes</small>
        </p>
      </div>
      <div>
        <p className="number">{timerSeconds}</p>
        <p>
          <small>Seconds</small>
        </p>
      </div>
    </>
  );
}

export default CountDownTimer;
