import React, { useState, useEffect } from "react";
import "./Digitalclock.css";

function DigitalClock() {
  const [time, updateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      updateTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="heading">
      <h1>Digital Clock</h1>
      <div className="clock">
        <div className="time">
          <span className="time">{time.toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
}
export default DigitalClock;
