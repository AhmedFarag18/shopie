import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 25, hours: 22, minutes: 11, seconds: 53 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { d, h, m, s } = { d: prev.days, h: prev.hours, m: prev.minutes, s: prev.seconds };
        s--; if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; d--; }
        if (d < 0) { clearInterval(timer); return { days: 0, hours: 0, minutes: 0, seconds: 0 }; }
        return { days: d, hours: h, minutes: m, seconds: s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center  gap-2 mt-4 md:mt-0 text-lg text-dark font-medium max-md:text-sm bg-light px-4 py-2 rounded-xl">
      <span>{timeLeft.days} <span className="text-gray-500">Days</span></span>
      {['hours', 'minutes', 'seconds'].map((u) => (
        <React.Fragment key={u}>
          <span className="text-gray-500">:</span>
          <span>{timeLeft[u].toString().padStart(2, '0') + u.slice(0, 1)}</span>
        </React.Fragment>
      ))}
    </div>
  );
}
