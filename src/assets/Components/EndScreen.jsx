function EndScreen({ winner }) {
  return (
    <main className="start-main">
      <h1>{winner} won!</h1>
      <p className="minor-text">Refresh the page to play again.</p>
    </main>
  );
}

export default EndScreen;
