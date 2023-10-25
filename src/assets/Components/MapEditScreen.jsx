import { useState } from "react";
import Grid from "./Grid"
import inputs from "../../shipRadiosData"

export default function MapEditScreen({ handlePlacement, player }) {

  const [checkedShip, setCheckedShip] = useState('Carrier');
  const [carrierAmount, setCarrierAmount] = useState(1);
  const [battleshipAmount, setBattleshipAmount] = useState(2);
  const [cruiserAmount, setCruiserAmount] = useState(1);
  const [submarineAmount, setSubmarineAmount] = useState(2);
  const [destroyerAmount, setDestroyerAmount] = useState(3);

  const onCheck = (e) => {
    const input = e.target.closest('input');
    setCheckedShip(input.value);
  }

  const updateShipState = (shipName, newValue) => {
    switch(shipName) {
      case 'Carrier':
        setCarrierAmount(newValue);
        break;
      case 'Battleship':
        setBattleshipAmount(newValue);
        break;
      case 'Cruiser':
        setCruiserAmount(newValue);
        break;
      case 'Submarine':
        setSubmarineAmount(newValue);
        break;
      case 'Destroyer':
        setDestroyerAmount(newValue);
        break;
    }
  }

  const getShipState = (shipName) => {
    switch(shipName) {
      case 'Carrier':
        return carrierAmount;
      case 'Battleship':
        return battleshipAmount;
      case 'Cruiser':
        return cruiserAmount;
      case 'Submarine':
        return submarineAmount;
      case 'Destroyer':
        return destroyerAmount;
    }
  }

  const getShipSize = (shipName) => {
    switch(shipName) {
      case 'Carrier':
        return 5;
      case 'Battleship':
        return 4;
      case 'Cruiser':
        return 3;
      case 'Submarine':
        return 2;
      case 'Destroyer':
        return 1;
    }
  }

  const decreaseShipAmount = (shipName) => {
    let state = getShipState(shipName);
    state--;
    updateShipState(checkedShip, state);
  }

  const placeSizedShip = (e) => {
    if(getShipState(checkedShip) <= 0) return;
    const currentShipSize = getShipSize(checkedShip);
    handlePlacement(e, currentShipSize);
    decreaseShipAmount(checkedShip);
  }

  let radios = inputs.radios.map(radio => {
    return(
      <div key={radio.key}>
        <input onChange={onCheck} value={radio.labelName} name={radio.type} id={radio.id} type={radio.type} checked={checkedShip == radio.labelName}/>
        <label htmlFor={radio.id}>{radio.labelName} x{getShipState(radio.labelName)}</label>
      </div>
    )
  });

  return(
    <main className="map-edit-main">
      <h1>Place down your ships</h1>
      <div>
        <Grid handleClick={placeSizedShip} player={player} color='pink'/>
        <div id='edit-buttons-wrapper'>
          {radios}
          <button id='start-game-btn'>Start Game</button>
        </div>
      </div>
    </main>
  )
}