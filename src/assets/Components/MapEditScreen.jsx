import { useState } from "react";
import Grid from "./Grid"
import inputs from "../../shipRadiosData"

export default function MapEditScreen({ handlePlacement, player }) {

  const [checkedShip, setCheckedShip] = useState('Carrier');
  const [carrierAmount, setCarrierAmount] = useState('1');
  const [battleshipAmount, setBattleshipAmount] = useState('1');
  const [cruiserAmount, setCruiserAmount] = useState('2');
  const [submarineAmount, setSubmarineAmount] = useState('3');

  const onCheck = (e) => {
    const input = e.target.closest('input');
    setCheckedShip(input.value);
  }

  let radios = inputs.radios.map(radio => {
    return(
      <div key={radio.key}>
        <input onChange={onCheck} value={radio.labelName} name={radio.type} id={radio.id} type={radio.type} checked={checkedShip == radio.labelName}/>
        <label htmlFor={radio.id}>{radio.labelName}</label>
      </div>
    )
  });

  return(
    <main className="map-edit-main">
      <h1>Place down your ships</h1>
      <div>
        <Grid handleClick={handlePlacement} player={player} color='pink'/>
        <div id='edit-buttons-wrapper'>
          {radios}
          <button id='start-game-btn'>Start Game</button>
        </div>
      </div>
    </main>
  )
}