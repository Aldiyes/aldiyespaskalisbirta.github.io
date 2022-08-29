import React, { useEffect, useRef, useState } from "react";
import "./count-down-timer.css";
function CountDownTimer(props) {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = (prps) => {
    const countdownDate = new Date(`${props.time}`).getTime();

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
        setTimerDays(days < 10 ? "0" + days : days);
        setTimerHours(hours < 10 ? "0" + hours : hours);
        setTimerMinutes(minutes < 10 ? "0" + minutes : minutes);
        setTimerSeconds(seconds < 10 ? "0" + seconds : seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  });
  return (
    <>
      <div>
        <p className="number">
          {timerDays}
          <span>D</span>
        </p>
      </div>

      <div>
        <p className="number">
          {timerHours}
          <span>H</span>
        </p>
      </div>

      <div>
        <p className="number">
          {timerMinutes}
          <span>M</span>
        </p>
      </div>

      <div>
        <p className="number">
          {timerSeconds}
          <span>S</span>
        </p>
      </div>
    </>
  );
}

export default CountDownTimer;
