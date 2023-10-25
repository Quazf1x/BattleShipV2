import { v4 as uuidv4 } from "uuid";

const inputs = {
  radios: [
    {
      id: 'carrier-radio',
      name: 'ship-radio',
      type: 'radio',
      labelName: 'Carrier',
      key: uuidv4()
    },

    {
      id: 'battleship-radio',
      name: 'ship-radio',
      type: 'radio',
      labelName: 'Battleship',
      key: uuidv4()
    },

    {
      id: 'cruiser-radio',
      name: 'ship-radio',
      type: 'radio',
      labelName: 'Cruiser',
      key: uuidv4()
    },

    {
      id: 'submarine-radio',
      name: 'ship-radio',
      type: 'radio',
      labelName: 'Submarine',
      key: uuidv4()
    },
    
    {
      id: 'destroyer-radio',
      name: 'ship-radio',
      type: 'radio',
      labelName: 'Destroyer',
      key: uuidv4()
    }
  ]
}

export default inputs;