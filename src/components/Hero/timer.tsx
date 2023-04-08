import React, { useState, useEffect, CSSProperties } from 'react';

interface CountdownStyle extends CSSProperties {
  '--value': number;
}

export default function Timer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [eventTime, setEventTime] = useState(false);

  useEffect(() => {
      const target = new Date('04/10/2023 23:59:59');
      // const target = new Date();
      // target.setSeconds(target.getSeconds() + 5);

      const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setEventTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {eventTime ? (
        <h2 className='mt-5 flex-row text-center font-black text-white  text-3xl'>
          The event has begun!
        </h2>
      ) : (
        <div className='flex justify-center pt-6 '>
          
          <div className='grid grid-flow-col gap-2 text-center auto-cols-max'>
            <div className='flex flex-col p-3 bg-neutral rounded-box text-neutral-content'>
              <span className='countdown font-mono text-2xl md:text-5xl xl:text-7xl lg:text-6xl text-white' style={{ '--value': days } as CountdownStyle}>
                <span></span>
              </span>
              days
            </div>
            <div className='flex flex-col p-3 bg-neutral rounded-box text-neutral-content'>
              <span className='countdown font-mono text-2xl md:text-5xl xl:text-7xl lg:text-6xl text-white' style={{ '--value': hours } as CountdownStyle}>
                <span></span>
              </span>
              hours
            </div>
            <div className='flex flex-col p-3 bg-neutral rounded-box text-neutral-content'>
              <span className='countdown font-mono text-2xl md:text-5xl xl:text-7xl lg:text-6xl text-white' style={{ '--value': minutes } as CountdownStyle}>
                <span></span>
              </span>
              min
            </div>
            <div className='flex flex-col p-3 bg-neutral rounded-box text-neutral-content'>
              <span className='countdown font-mono text-2xl md:text-5xl xl:text-7xl lg:text-6xl text-white' style={{ '--value': seconds } as CountdownStyle}>
                <span></span>
              </span>
              sec
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
