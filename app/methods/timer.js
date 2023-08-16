export default class Timer {
  start() {
    // Read the current time
    const timerInput = document.querySelector('.timer-input');

    const hoursInput = timerInput.querySelector('input[name="hours"]');
    const minutesInput = timerInput.querySelector('input[name="minutes"]');
    const secondsInput = timerInput.querySelector('input[name="seconds"]');

    const hours = parseInt(timerInput.querySelector('input[name="hours"]').value, 10) ? parseInt(timerInput.querySelector('input[name="hours"]').value, 10) : 0;
    const minutes = parseInt(timerInput.querySelector('input[name="minutes"]').value, 10) ? parseInt(timerInput.querySelector('input[name="minutes"]').value, 10) : 0;
    const seconds = parseInt(timerInput.querySelector('input[name="seconds"]').value, 10) ? parseInt(timerInput.querySelector('input[name="seconds"]').value, 10) : 0;

    let time = (hours * 60 * 60) + (minutes * 60) + seconds;

    // Start counting down to 0

    setInterval(() => {
      // Every second a function will run to check if the timer has reached 0
      if (time > 0) {
        time -= 1;
        console.log(time);
      } else {
        console.log('Time is up!');
      }

      // Convert the time back into hours, minutes, seconds and update each input
      const hoursLeft = Math.floor(time / 3600);
      const minutesLeft = Math.floor(time / 60);
      const secondsLeft = Math.floor(time % 60);

      hoursInput.value = hoursLeft;
      minutesInput.value = minutesLeft;
      secondsInput.value = secondsLeft;
    }, 1000);
  }
}
