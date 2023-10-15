import PlayerCard from "./PlayerCard";
import Player from "../Game logic/Player";

const player1 = new Player('you');
const player2 = new Player('ai');

function GameScreen() {
  return (
    <main>
      <PlayerCard player={player1} color='pink'/>
      <hr className='vertical-border'></hr>
      <PlayerCard player={player2} color='grey'/>
    </main>
  )
}

export default GameScreen;