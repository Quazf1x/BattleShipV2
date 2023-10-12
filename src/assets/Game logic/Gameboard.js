import Ship from "./Ship";

const SIZE = 10;

export default class Gameboard {
  constructor() {
    this.boardArr = Array(SIZE).fill(null).map(() => Array(SIZE).fill(null));
    this.ships = [];
  }

  receiveAttack(x, y) {
    if(this.boardArr[x][y] == null) {
      this.boardArr[x][y] = 'miss';
      return;
    }
    else if (this.boardArr[x][y].isHit) {
      return;
    }
    else {
      this.boardArr[x][y].isHit = true;
      this.boardArr[x][y].ship.hit();
    }
  }

  placeShip(x, y, length, direction = 'Horizontal') {
    let ship = new Ship(length, direction);
      if(
        ship.direction == 'Horizontal' && x + ship.length > SIZE ||
        ship.direction == 'Vertical' && y + ship.length > SIZE
        ) 
      return;

    for(let i = 0; i < ship.length; i++) {
      this.boardArr[x][y] = {ship, isHit: false};

      ship.direction == 'Horizontal' ?
      x++ : y++;
    }
    this.ships.push(ship);
  }
}