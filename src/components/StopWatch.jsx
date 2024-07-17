import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import "./StopWatch.css";

const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerRef = useRef(0);
  const trackTimerRef = useRef(null);

  useEffect(() => {
    if (isTimerRunning) {
      trackTimerRef.current = setInterval(() => {
        setTimer(Date.now() - timerRef.current);
      }, 10);
    }

    return () => {
      clearInterval(trackTimerRef.current);
    };
  }, [isTimerRunning]);

  const toggleStartTimer = () => {
    setIsTimerRunning((prev) => !prev);
    timerRef.current = Date.now() - timer;
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
    // To Reset the timer back to 0
    clearInterval(trackTimerRef.current);
    setTimeout(() => {
      setTimer(0);
    }, 2000);
  };

  const resetTimer = () => {
    setTimer(0);
    setIsTimerRunning(false);
  };

  const displayFormattedTime = (time) => {
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time % 1000) / 10);

    const getMinutes = minutes.toString().padStart(2, "0");
    const getSeconds = seconds.toString().padStart(2, "0");
    const getMilliseconds = milliseconds.toString().padStart(2, "0");

    return `${getMinutes}:${getSeconds}:${getMilliseconds}`;
  };

  return (
    <div className="container">
      <h1 className="stopwatch-title">Stop Watch Demo</h1>
      <h2 className="stopwatch-timer">{displayFormattedTime(timer)}</h2>
      <section className="btn-group">
        <button className="start-btn" onClick={toggleStartTimer}>
          {isTimerRunning ? "Pause" : "Start"}
        </button>
        <button className="stop-btn" onClick={stopTimer}>
          Stop
        </button>
        <button className="reset-btn" onClick={resetTimer}>
          Reset
        </button>
      </section>
    </div>
  );
};

export default StopWatch;
