import React, { useRef, useState } from "react";

const Stopwatch = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalaRef = useRef(null);
  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalaRef.current);
    intervalaRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalaRef.current);
  }
  let secoundpassed = 0;
  if (startTime !== null && now !== null) {
    secoundpassed = (now - startTime) / 1000;
  }
  return (
    <div className="bg-emerald-500 justify-center p-5">
      <h1 className="text-white text-2xl">
        Time passed:{secoundpassed.toFixed(3)}
      </h1>
      <button
        onClick={handleStart}
        className="hover:bg-white hover:text-black p-3"
      >
        Start
      </button>
      <button
        onClick={handleStop}
        className="hover:bg-white hover:text-black p-3"
      >
        Stop
      </button>
    </div>
  );
};

export default Stopwatch;
