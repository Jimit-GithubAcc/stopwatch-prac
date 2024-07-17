import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {}, []);

  return (
    <div>
      StopWatch Compo
      <h1>{timer}</h1>
    </div>
  );
};

export default StopWatch;
