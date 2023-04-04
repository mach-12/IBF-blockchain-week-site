import React, { useState, useEffect } from 'react';

export default function Timer() {

    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    
    const [eventTime, setEventTime] = useState(false) 

    useEffect(() => {
        // const target = new Date("04/10/2023 23:59:59");

        const target = new Date();
        target.setSeconds(target.getSeconds() + 15);

        const interval = setInterval(() => {
          const now = new Date();
          const difference = target.getTime() - now.getTime();
    
          const d = Math.floor(difference / (1000 * 60 * 60 * 24));
          setDays(d);
    
          const h = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
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
      <div className="flex flex-col items-center">
      {eventTime ? (
        <h2 className='text-center font-bold text-3xl mt-5'>The event has begun</h2>
      ) : (
        <div className="flex flex-row justify-center items-center space-x-4 mt-5 ">
          <div className="flex flex-col items-center bg-gray-800 text-purple-700 rounded-lg p-2 border-2 border-indigo-900 w-24 h-24">
            <span className="font-bold text-3xl">{days}</span>
            <span className="font-medium">Days</span>
          </div>
          <div className="flex flex-col items-center bg-gray-800 text-purple-700 rounded-lg p-2 border-2 border-indigo-900 w-24 h-24">
            <span className="font-bold text-3xl">{hours}</span>
            <span className="font-medium">Hours</span>
          </div>
          <div className="flex flex-col items-center bg-gray-800 text-purple-700 rounded-lg p-2 border-2 border-indigo-900 w-24 h-24">
            <span className="font-bold text-3xl">{minutes}</span>
            <span className="font-medium">Minutes</span>
          </div>
          <div className="flex flex-col items-center bg-gray-800 text-purple-700 rounded-lg p-2 border-2 border-indigo-900 w-24 h-24">
            <span className="font-bold text-3xl">{seconds}</span>
            <span className="font-medium">Seconds</span>
          </div>
        </div>
      )}
    </div>
    
    )
}