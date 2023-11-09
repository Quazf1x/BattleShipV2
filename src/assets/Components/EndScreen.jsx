function EndScreen({ winner }) {
  return(
    <main className="start-main">
      <h1>{winner} won!</h1>
      <button>Play again</button>
    </main>
  )
}

export default EndScreen;