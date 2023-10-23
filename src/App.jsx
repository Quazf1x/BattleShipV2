import { useState } from 'react'
import Header from './assets/Components/Header'
import GameScreen from './assets/Components/GameScreen'
import StartScreen from './assets/Components/StartScreen'
import MapEditScreen from './assets/Components/MapEditScreen'
import Player from './assets/Game logic/Player'

let P1, P2; // get rid off of variabler later

function App() {
  const [gameState, setGameState] = useState('Start');
  const [playerName, setPlayerName] = useState('');
  const [playerOne, setPlayerOne] = useState('');

  const startGame = () => {
    setPlayerOne(new Player(playerName));
    P2 = new Player('AI');
    P2.board.autoPlaceFleet();
  }

  const handleStart = () => {
    startGame();
    setGameState('Map Edit');
  }

  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  }

  const handleShipPlacement = (e) => {
    const x = parseInt(e.target.dataset.x);
    const y = parseInt(e.target.dataset.y);
    playerOne.board.placeShip(x, y, 3);
    console.log(playerOne);
    setPlayerOne({...playerOne});
  }

  let screen;

  switch(gameState) {
    case 'Start':
      screen = <StartScreen handleInput={handleNameChange} handleClick={handleStart}/>
      break;
    case 'Map Edit':
      screen = <MapEditScreen handlePlacement={handleShipPlacement} player={playerOne}/>;
      break;
    case 'Game':
      screen = <GameScreen player1={playerOne} player2={P2}/>
      break;
  }

  return (
    <>
      <Header />
        {screen}
    </>
  )
}

export default App
