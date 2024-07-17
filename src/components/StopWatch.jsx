import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import "./StopWatch.css";

const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {}, []);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    });
  };

  return (
    <div className="container">
      <h1 className="stopwatch-title">Stop Watch Demo</h1>
      <h2 className="stopwatch-timer">{timer}</h2>
      <section className="btn-group">
        <button className="start-btn">Start</button>
        <button className="stop-btn">Stop</button>
        <button className="reset-btn">Reset</button>
      </section>
    </div>
  );
};

export default StopWatch;
