import { useState } from "react";
import Grid from "./Grid"
import inputs from "../../shipRadiosData"

export default function MapEditScreen({ handlePlacement, player }) {

  const [isHorizontal, setHorizontal] = useState(false);
  const [checkedShip, setCheckedShip] = useState('Carrier');
  const [ships, setShips] = useState({
    carrier:{
      name: 'Carrier',
      amount: 1,
      size: 5
    },
    battleship:{
      name: 'Battleship',
      amount: 2,
      size: 4
    },
    cruiser:{
      name: 'Cruiser',
      amount: 1,
      size: 3
    },
    submarine:{
      name: 'Submarine',
      amount: 2,
      size: 2
    },
    destroyer:{
      name: 'Destroyer',
      amount: 3,
      size: 1
    },
  });

  // Changed current ship
  const handleCheck = (e) => {
    const input = e.target.closest('input');
    setCheckedShip(input.value);
  }

  // Switch ship direction
  const handleSwitch = () => {
    setHorizontal(!isHorizontal);
  }

  // Changes the remaining amount of ships that can be placed
  const updateShipAmount = (shipName, newValue) => {
    switch(shipName) {
      case 'Carrier':
        setShips({...ships, carrier: {...ships.carrier, amount:newValue}});
        break;
      case 'Battleship':
        setShips({...ships, battleship: {...ships.battleship, amount:newValue}});
        break;
      case 'Cruiser':
        setShips({...ships, cruiser: {...ships.cruiser, amount:newValue}});
        break;
      case 'Submarine':
        setShips({...ships, submarine: {...ships.submarine, amount:newValue}});
        break;
      case 'Destroyer':
        setShips({...ships, destroyer: {...ships.destroyer, amount:newValue}});
        break;
    }
  }

  // Returns the amount of a named ship that can be placed
  const getShipAmount = (shipName) => {
    switch(shipName) {
      case 'Carrier':
        return ships.carrier.amount;
      case 'Battleship':
        return ships.battleship.amount;
      case 'Cruiser':
        return ships.cruiser.amount;
      case 'Submarine':
        return ships.submarine.amount;
      case 'Destroyer':
        return ships.destroyer.amount;
    }
  }

  const getShipSize = (shipName) => {
    switch(shipName) {
      case 'Carrier':
        return ships.carrier.size;
      case 'Battleship':
        return ships.battleship.size;
      case 'Cruiser':
        return ships.cruiser.size;
      case 'Submarine':
        return ships.submarine.size;
      case 'Destroyer':
        return ships.destroyer.size;
    }
  }

  const decreaseShipAmount = (shipName) => {
    let state = getShipAmount(shipName);
    state--;
    updateShipAmount(checkedShip, state);
  }

  //places the ship and updates state
  const placeSizedShip = (e) => {
    if(getShipAmount(checkedShip) <= 0) return;
    const currentShipSize = getShipSize(checkedShip);
    const direction = isHorizontal ? 'Horizontal' : 'Vertical';
    const isPlaced = handlePlacement(e, currentShipSize, direction);
    if(isPlaced) {
      decreaseShipAmount(checkedShip);
    }
  }

  let radios = inputs.radios.map(radio => {
    return(
      <div key={radio.key}>
        <input onChange={handleCheck} value={radio.labelName} name={radio.type} id={radio.id} type={radio.type} checked={checkedShip == radio.labelName}/>
        <label htmlFor={radio.id}>{radio.labelName} x{getShipAmount(radio.labelName)}</label>
      </div>
    )
  });

  return(
    <main className="map-edit-main">
      <h1>Place down your ships</h1>
      <div>
        <Grid handleClick={placeSizedShip} player={player} color='pink'/>
        <div id='edit-buttons-wrapper'>
          <div>
            <input onChange={handleSwitch} id='vertical-switch' value={isHorizontal} type='checkbox'/>
            <label htmlFor='vertical-switch'>Horizontal?</label>
          </div>
          {radios}
          <button id='start-game-btn'>Start Game</button>
        </div>
      </div>
    </main>
  )
}