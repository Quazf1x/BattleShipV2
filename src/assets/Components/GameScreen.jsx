import PlayerCard from "./PlayerCard";
import Player from "../Game logic/Player";

function GameScreen({player1, player2}) {
  return (
    <main className="game-main">
      <PlayerCard player={player1} color='pink'/>
      <hr className='vertical-border'></hr>
      <PlayerCard player={player2} color='grey'/>
    </main>
  )
}

export default GameScreen;