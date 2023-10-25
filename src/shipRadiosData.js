import { v4 as uuidv4 } from "uuid";

const inputs = {
  radios: [
    {
      id: 'carrier-radio',
      name: 'ship-radio',
      type: 'radio',
      labelName: 'carrier',
      key: uuidv4()
    },

    {
      id: 'battleship-radio',
      name: 'ship-radio',
      type: 'radio',
      labelName: 'battleship',
      key: uuidv4()
    },

    {
      id: 'cruiser-radio',
      name: 'ship-radio',
      type: 'radio',
      labelName: 'cruiser',
      key: uuidv4()
    },

    {
      id: 'submarine-radio',
      name: 'ship-radio',
      type: 'radio',
      labelName: 'submarine',
      key: uuidv4()
    },
    
    {
      id: 'destroyer-radio',
      name: 'ship-radio',
      type: 'radio',
      labelName: 'destroyer',
      key: uuidv4()
    }
  ]
}

export default inputs;