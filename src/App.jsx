import { useState } from "react";

import Header from "./assets/Components/Header.jsx";
import GameScreen from "./assets/Components/GameScreen.jsx";
import StartScreen from "./assets/Components/StartScreen.jsx";
import MapEditScreen from "./assets/Components/MapEditScreen.jsx";
import EndScreen from "./assets/Components/EndScreen.jsx";
import Player from "./assets/Game logic/Player.js";

function App() {
  const [gameState, setGameState] = useState("Start");
  const [playerName, setPlayerName] = useState("");
  const [winnerName, setWinnerName] = useState("-");
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState(new Player("AI"));

  const startGame = () => {
    setPlayerOne(new Player(playerName));
    playerTwo.board.autoPlaceFleet();
  };

  const handleStart = () => {
    startGame();
    setGameState("Map Edit");
  };

  const handleEditFinish = () => {
    setGameState("Game");
  };

  const handleEnd = (winner) => {
    setWinnerName(winner);
    setGameState("End");
  };

  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleShipPlacement = (e, size, direction) => {
    const x = parseInt(e.target.dataset.x);
    const y = parseInt(e.target.dataset.y);

    const isPlaced = playerOne.board.placeShip(x, y, size, direction);
    setPlayerOne({ ...playerOne });
    return isPlaced;
  };

  const attackPlayer = (x = 0, y = 0, player) => {
    if (player == playerTwo) {
      const isValid = playerTwo.board.receiveAttack(x, y); //checking if the cell was already hit
      if (isValid == false) return false;
      setPlayerTwo({ ...playerTwo });
    } else if (player == playerOne) {
      playerOne.board.receiveRandomAttack();
      setPlayerOne({ ...playerOne });
    }
    return true;
  };

  // if there's a winning player, function return them
  const checkWinner = (player1, player2) => {
    if (player1.board.areAllShipsSunk()) {
      return player2.name;
    } else if (player2.board.areAllShipsSunk()) {
      return player1.name;
    } else return false;
  };

  const playRound = (e) => {
    const x = e.target.dataset.x;
    const y = e.target.dataset.y;

    const isValid = attackPlayer(x, y, playerTwo); // var is false when user shot the cell that was already hit
    if (!isValid) return; //if its false, breaks the round

    attackPlayer(x, y, playerOne); //random "ai" attack

    const winner = checkWinner(playerOne, playerTwo);
    if (winner) {
      handleEnd(winner);
    }
  };

  let screen;

  switch (gameState) {
    case "Start":
      screen = (
        <StartScreen handleInput={handleNameChange} handleClick={handleStart} />
      );
      break;
    case "Map Edit":
      screen = (
        <MapEditScreen
          handlePlacement={handleShipPlacement}
          handleStage={handleEditFinish}
          player={playerOne}
        />
      );
      break;
    case "Game":
      screen = (
        <GameScreen
          handleClick={playRound}
          player1={playerOne}
          player2={playerTwo}
        />
      );
      break;
    case "End":
      screen = <EndScreen winner={winnerName} />;
      break;
  }

  return (
    <>
      <Header />
      {screen}
    </>
  );
}

export default App;
