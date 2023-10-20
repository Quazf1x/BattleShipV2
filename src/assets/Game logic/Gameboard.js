import Ship from "./Ship";
import { randomNumber } from './utils.js';

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
    let valid = this.checkValidity(x, y, ship);
    if(!valid) return false;

    for(let i = 0; i < ship.length; i++) {
      this.boardArr[x][y] = {ship, isHit: false, index: i};  // remove index later

      ship.direction == 'Horizontal' ?
      x++ : y++;
    }
    this.ships.push(ship);
    return true;
  }

  checkValidity(x, y, ship) {
    if(
      ship.direction == 'Horizontal' && x + ship.length > SIZE ||
      ship.direction == 'Vertical' && y + ship.length > SIZE
    ) 
    return false;
    else {
      let coords = [];

      for(let i = 0; i < ship.length; i++) {
        coords.push(this.boardArr[x][y]);

        ship.direction == 'Horizontal' ? 
        x++ : y++;
      }
      return coords.every(coord => coord == null);
    } 
  }

  autoPlaceShip(length) {
    const randomX = randomNumber(10);
    const randomY = randomNumber(10);
    const randomDirection = Math.random() > 0.5 ? 'Horizontal' : 'Vertical' ;

    let isPlaced = this.placeShip(randomX, randomY, length, randomDirection);
    if(!isPlaced) this.autoPlaceShip(length);
  }

  autoPlaceFleet() {
    for(let i = 1; i <= 5; i++) {
      this.autoPlaceShip(i);
    }
  }

  areAllShipsSunk() {
    return this.ships.every(ship => ship.isSunk);
  }
}