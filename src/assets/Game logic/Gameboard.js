const SIZE = 10;

export default class Gameboard {
  constructor() {
    this.boardArr = Array(SIZE).fill(null).map(() => Array(SIZE).fill(null));
    this.ships = [];
  }

  placeShip(ship, x, y) {
      if(
        ship.direction == 'Horizontal' && x + ship.length > SIZE ||
        ship.direction == 'Vertical' && y + ship.length > SIZE
        ) 
      return;

    for(let i = 0; i < ship.length; i++) {
      this.boardArr[x][y] = { ship, index: i };

      ship.direction == 'Horizontal' ?
      x++ : y++;
    }
    this.ships.push(ship);
  }
}