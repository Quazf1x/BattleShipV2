export default function StartScreen({ handleInput, handleClick }) {
  return(
    <main className="start-main">
      <h1>Enter your name</h1>
      <input onChange={handleInput} maxLength="25"/>
      <button onClick={handleClick}>Start</button>
    </main>
  )
}