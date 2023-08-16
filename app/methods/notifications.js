export default class Notifications {
  requestPermission() {
    if (Notification.permission === 'default') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification("Timer has started");
        }
      });
    }

    if (Notification.permission === 'granted') {
      new Notification("Timer has started");
    }
  }
}
