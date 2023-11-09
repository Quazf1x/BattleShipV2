import PlayerCard from "./PlayerCard";

function GameScreen({ player1, player2, handleClick }) {
  return (
    <main className="game-main">
      <PlayerCard player={player1} color="pink" isEnemy={false} />
      <hr className="vertical-border"></hr>
      <PlayerCard
        handleClick={handleClick}
        player={player2}
        color="grey"
        isEnemy={true}
      />
    </main>
  );
}

export default GameScreen;
