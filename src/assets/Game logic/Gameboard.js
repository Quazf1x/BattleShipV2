import Ship from "./Ship.js";
import { randomNumber } from "./utils.js";

const SIZE = 10;

export default class Gameboard {
  constructor() {
    this.boardArr = Array(SIZE)
      .fill(null)
      .map(() => Array(SIZE).fill(null));
    this.ships = [];
  }

  clearBoard() {
    this.boardArr = Array(SIZE)
      .fill(null)
      .map(() => Array(SIZE).fill(null));
  }

  receiveAttack(x, y) {
    if (this.boardArr[x][y] == null) {
      this.boardArr[x][y] = "miss";
      return true;
    } else if (this.boardArr[x][y].isHit || this.boardArr[x][y] == "miss") {
      return false;
    } else {
      this.boardArr[x][y].isHit = true;
      this.boardArr[x][y].ship.hit();
      return true;
    }
  }

  receiveRandomAttack() {
    let randomX;
    let randomY;
    do {
      randomX = randomNumber(10);
      randomY = randomNumber(10);
    } while (!this.receiveAttack(randomX, randomY));
  }

  placeShip(x, y, length, direction = "Horizontal") {
    let ship = new Ship(length, direction);
    let valid = this.checkValidity(x, y, ship);
    if (!valid) return false;

    for (let i = 0; i < ship.length; i++) {
      this.boardArr[x][y] = { ship, isHit: false };

      ship.direction == "Horizontal" ? x++ : y++;
    }
    this.ships.push(ship);
    return true;
  }

  checkValidity(x, y, ship) {
    if (
      (ship.direction == "Horizontal" && x + ship.length > SIZE) ||
      (ship.direction == "Vertical" && y + ship.length > SIZE)
    )
      return false;
    else {
      let coords = [];

      for (let i = 0; i < ship.length; i++) {
        coords.push(this.boardArr[x][y]);

        ship.direction == "Horizontal" ? x++ : y++;
      }
      return coords.every((coord) => coord == null);
    }
  }

  autoPlaceShip(length) {
    const randomX = randomNumber(10);
    const randomY = randomNumber(10);
    const randomDirection = Math.random() > 0.5 ? "Horizontal" : "Vertical";

    let isPlaced = this.placeShip(randomX, randomY, length, randomDirection);
    if (!isPlaced) this.autoPlaceShip(length);
  }

  autoPlaceFleet() {
    // array of all ships' lengths
    const fleetLengths = [5, 4, 4, 3, 2, 2, 1, 1, 1];
    this.clearBoard();
    fleetLengths.forEach((length) => this.autoPlaceShip(length));
  }

  areAllShipsSunk() {
    return this.ships.every((ship) => ship.isSunk);
  }
}
