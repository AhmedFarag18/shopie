import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days:25, hours:22, minutes:11, seconds:53 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { d,h,m,s } = { d:prev.days, h:prev.hours, m:prev.minutes, s:prev.seconds };
        s--; if (s<0){s=59; m--;}
        if(m<0){m=59; h--;}
        if(h<0){h=23; d--;}
        if(d<0){clearInterval(timer); return {days:0,hours:0,minutes:0,seconds:0};}
        return { days:d, hours:h, minutes:m, seconds:s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center mt-4 md:mt-0">
      <div className="text-3xl font-bold bg-gray-100 px-4 py-2 rounded-lg">
        {timeLeft.days} Days
      </div>
      {[ 'hours','minutes','seconds' ].map((u) => (
        <React.Fragment key={u}>
          <div className="text-3xl font-bold mx-2">:</div>
          <div className="text-3xl font-bold bg-gray-100 px-4 py-2 rounded-lg">
            {timeLeft[u].toString().padStart(2,'0')}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
