import { useState } from 'react'
import Header from './assets/Components/Header'
import GameScreen from './assets/Components/GameScreen'
import StartScreen from './assets/Components/StartScreen'
import MapEditScreen from './assets/Components/MapEditScreen'
import Player from './assets/Game logic/Player'

function App() {
  const [gameState, setGameState] = useState('Start');

  const [playerName, setPlayerName] = useState('');
  const [playerOne, setPlayerOne] = useState('');
  const [playerTwo, setPlayerTwo] = useState(new Player('AI'));

  const startGame = () => {
    setPlayerOne(new Player(playerName));
    playerTwo.board.autoPlaceFleet();
  }

  const handleStart = () => {
    startGame();
    setGameState('Map Edit');
  }

  const handleEditFinish = () => {
    setGameState('Game');
  }

  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  }

  const handleShipPlacement = (e, size, direction) => {
    const x = parseInt(e.target.dataset.x);
    const y = parseInt(e.target.dataset.y);

    const isPlaced = playerOne.board.placeShip(x, y, size, direction);
    setPlayerOne({...playerOne});
    return isPlaced;
  }

  let screen;

  switch(gameState) {
    case 'Start':
      screen = <StartScreen handleInput={handleNameChange} handleClick={handleStart}/>
      break;
    case 'Map Edit':
      screen = <MapEditScreen handlePlacement={handleShipPlacement} handleStage={handleEditFinish} player={playerOne}/>;
      break;
    case 'Game':
      screen = <GameScreen player1={playerOne} player2={playerTwo}/>
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
