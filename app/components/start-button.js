'use client';

import Timer from '../methods/timer';

const timer = new Timer();

export default function StartButton() {
  function handleStartButton() {
    console.log('Start button clicked');

    // Start Timer
    timer.start();
  }

  return (
    <button onClick={handleStartButton}>Start</button>
  )
}
