'use client';

import Timer from '../methods/timer';
import Notifications from '../methods/notifications';

const timer = new Timer();

const notifications = new Notifications();

export default function StartButton() {
  function handleStartButton() {
    console.log('Start button clicked');

    // Request permission for notifications
    notifications.requestPermission();

    // Start Timer
    timer.start();
  }

  return (
    <button onClick={handleStartButton}>Start</button>
  )
}
