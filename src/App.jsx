import { useState } from 'react'
import Header from './assets/Components/Header'
import GameScreen from './assets/Components/GameScreen'
import Player from './assets/Game logic/Player'

let P1, P2;

function App() {

  const startGame = () => {
    P1 = new Player('p1');
    P2 = new Player('p2');
    P1.board.autoPlaceFleet();
    P2.board.autoPlaceFleet();
  }

  return (
    <div onChange={startGame()}>
      <Header/>
      <GameScreen player1={P1} player2={P2}/>
    </div>
  )
}

export default App
