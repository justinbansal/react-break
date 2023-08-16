export default function Field() {
  return (
    <div className="timer-input">
      <input type="number" min="0" max="99" placeholder="HH"/>
      <input type="number" min="0" max="59" placeholder="MM"/>
      <input type="number" min="0" max="59" placeholder="SS"/>
    </div>
  )
}
