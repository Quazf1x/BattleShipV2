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
  
  // const handleGameboardAttack = (e) => {
  //   const x = e.target.dataset.x;
  //   const y = e.target.dataset.y;
  //   playerTwo.board.receiveAttack(x, y);
  //   setPlayerTwo({...playerTwo});
  // }

  const attackPlayer = (x = 0, y = 0, player) => {
    if (player == playerTwo) {
      const isValid = playerTwo.board.receiveAttack(x, y); //checking if the cell was already hit
      if(isValid == false) return false;
      setPlayerTwo({...playerTwo});
    }
    else if (player == playerOne) {
      playerOne.board.receiveRandomAttack();
      setPlayerOne({...playerOne});
    }
    return true;
  }

  const playRound = (e) => {
    const x = e.target.dataset.x;
    const y = e.target.dataset.y;
    const isValid = attackPlayer(x, y, playerTwo); // var is false when user shot the cell that was already hit
    if(!isValid) return; //if its false, breaks the round
    attackPlayer(x, y, playerOne); //random "ai" attack
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
      screen = <GameScreen handleClick={playRound} player1={playerOne} player2={playerTwo}/>
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
