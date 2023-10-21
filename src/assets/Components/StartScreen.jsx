export default function StartScreen({ handleClick }) {
  return(
    <main className="start-main">
      <h1>Enter your name</h1>
      <input maxLength="25"/>
      <button onClick={handleClick}>Start</button>
    </main>
  )
}