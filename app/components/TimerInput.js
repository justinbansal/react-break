function TimerInput(props) {
  const {hours, minutes, seconds, onInputChange } = props;

  return (
    <div className="timer-input">
      <input
        type="number"
        value={hours}
        onChange={e => onInputChange('hours', parseInt(e.target.value))}
      />
      <input
        type="number"
        value={minutes}
        onChange={e => onInputChange('minutes', parseInt(e.target.value))}
      />
      <input
        type="number"
        value={seconds}
        onChange={e => onInputChange('seconds', parseInt(e.target.value))}
      />
    </div>
  )
}

export default TimerInput;
