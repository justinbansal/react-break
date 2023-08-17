function TimerDisplay(props) {
  const { formattedTime } = props;
  return (
    <div className="timer-circle-container">
      <svg className="timer-circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle className="time-elapsed" cx="50" cy="50" r="45" />
      </svg>
      <span className="time-remaining">{formattedTime}</span>
    </div>
  )
}

export default TimerDisplay;


