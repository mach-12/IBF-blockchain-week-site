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
        <div>
            {eventTime ? (<h2 className='flex-row text-center font-bold text-3xl space-x-4 pt-5'>The event has begun</h2>)
            : (
            <div className="flex-row text-center font text-3xl space-x-4 pt-5 tracking-wide">
                <span>Days: {days}</span>
                <span>Hours: {hours}</span>
                <span>Minutes: {minutes}</span>
                <span>Seconds: {seconds}</span>
            </div>
            )}
        </div>
    )
}