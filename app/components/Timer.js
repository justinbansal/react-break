'use client'

import { useState, useEffect } from 'react';
import TimerInput from './TimerInput.js';
import TimerButtons from './TimerButtons.js';
import TimerNotification from './TimerNotification.js';

function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);

  const [timeRemaining, setTimeRemaining] = useState(300);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const totalSeconds =  (hours * 3600) + (minutes * 60) + seconds;
    setTimeRemaining(totalSeconds);
  }, [hours, minutes, seconds]);

  useEffect(() => {
    let timer;

    if (isRunning && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      TimerNotification();
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeRemaining]);

  useEffect(() => {
    if (isRunning) {
      const hoursLeft = Math.floor(timeRemaining / 3600);
      const minutesLeft = Math.floor((timeRemaining - (hoursLeft * 3600)) / 60);
      const secondsLeft = timeRemaining % 60;

      onInputChange('hours', hoursLeft);
      onInputChange('minutes', minutesLeft);
      onInputChange('seconds', secondsLeft);
    }
  }, [isRunning, timeRemaining]);

  const onInputChange = (field, value) => {
    if (field === 'hours') {
      value ? setHours(value) : setHours(0);
    } else if (field === 'minutes') {
      value ? setMinutes(value) : setMinutes(0);
    } else if (field === 'seconds') {
      value ? setSeconds(value) : setSeconds(0);
    }
  };

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(5);
    setSeconds(0);
    setTimeRemaining(0);
  };

  return (
    <div>
      <TimerInput hours={hours} minutes={minutes} seconds={seconds} onInputChange={onInputChange}/>
      <TimerButtons onStart={start} onStop={stop} onReset={reset}/>
    </div>
  )
}

export default Timer;
