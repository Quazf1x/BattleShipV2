import { useState } from 'react'
import Header from './assets/Components/Header'
import GameScreen from './assets/Components/GameScreen'
import StartScreen from './assets/Components/StartScreen'
import MapEditScreen from './assets/Components/MapEditScreen'
import Player from './assets/Game logic/Player'

let P1, P2;

function App() {
  const [gameState, setGameState] = useState('Start');
  const [playerName, setPlayerName] = useState('');  

  const startGame = () => {
    P1 = new Player(playerName);
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

  let screen;

  switch(gameState) {
    case 'Start':
      screen = <StartScreen handleInput={handleNameChange} handleClick={handleStart}/>
      break;
    case 'Map Edit':
      screen = <MapEditScreen player={P1}/>;
      break;
    case 'Game':
      screen = <GameScreen player1={P1} player2={P2}/>
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
