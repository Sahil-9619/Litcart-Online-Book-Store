import React from 'react'
import { useEffect, useState } from 'react';

const Timer = ({ initialSeconds = 300 }) => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  // Format to MM:SS
  const formatTime = (secs) => {
    const mins = String(Math.floor(secs / 60)).padStart(2, '0');
    const secsRemaining = String(secs % 60).padStart(2, '0');
    return `${mins}:${secsRemaining}`;
  };

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, [timeLeft]);

  return (
    <div className="text-xl font-semibold  text-black rounded-lg h-20 w-25">
      {timeLeft > 0 ? formatTime(timeLeft) : "Time's up!"}
    </div>
  );
};

export default Timer;
