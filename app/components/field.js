export default function Field() {
  return (
    <div className="timer-input">
      <input name="hours" type="number" min="0" max="99" placeholder="HH"/>
      <input name="minutes" type="number" min="0" max="59" defaultValue="5" placeholder="MM"/>
      <input name="seconds" type="number" min="0" max="59" defaultValue="00" placeholder="SS"/>
    </div>
  )
}
