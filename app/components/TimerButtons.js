function TimerButtons(props) {
  const { onStart, onStop, onReset } = props;
  return (
    <div>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}

export default TimerButtons;
