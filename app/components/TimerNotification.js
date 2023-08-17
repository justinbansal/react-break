function TimerNotification() {
  if (Notification.permission === 'default') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification("Time for a break!");
      }
    });
  }

  if (Notification.permission === 'granted') {
    new Notification("Time for a break!");
  }
}

export default TimerNotification;
